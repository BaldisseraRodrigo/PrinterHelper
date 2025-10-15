import { BackButton } from '@/components/button';
import Header from '@/components/header';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { SwitchButton } from '@/components/switch';
import { InputNumber, InputData, InputText } from '@/components/input';

export default function FormPrep() {
  const [switches, setSwitches] = useState({
    mont1: false,
    mont2: false,
    mont3: false,
    mont4: false,
    mont5: false,
    mont6: false,
    mont7: false,
    modo1: false,
    modo2: false,
    modo3: false,
    modo4: false,
    conf1: false,
    conf2: false,
    conf3: false,
    conf4: false,
    conf5: false,
    test1: false,
    test2: false,
    test3: false,
    test4: false,
    fina1: false,
    fina2: false,
    fina3: false,
  })

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header subtitle="FORMULÁRIO DE INSTALAÇÃO" />

      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Text style={styles.title}>DADOS PRINCIPAIS</Text>
          <View style={styles.subcontainer}>
            <InputNumber titleForm='OS'/>
            <InputData titleForm='Data'/>
            <InputText titleForm='Técnico Responsável'/>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>MONTAGEM</Text>
          <View style={styles.subcontainer}>
            <SwitchButton text='RETIRAR os lacres' value={switches.mont1} onValueChange={(v) => setSwitches({ ...switches, mont1: v })}/>
            <SwitchButton text='MONTAR os encartes em Português' value={switches.mont2} onValueChange={(v) => setSwitches({ ...switches, mont2: v })}/>
            <SwitchButton text='MONTAR ADF e destravar scanner (A3)' value={switches.mont3} onValueChange={(v) => setSwitches({ ...switches, mont3: v })}/>
            <SwitchButton text='MONTAR a caixa de resíduos' value={switches.mont4} onValueChange={(v) => setSwitches({ ...switches, mont4: v })}/>
            <SwitchButton text='MONTAR o(s) toner(s)' value={switches.mont5} onValueChange={(v) => setSwitches({ ...switches, mont5: v })}/>
            <SwitchButton text='LIGAR a máquina para adicionar toner' value={switches.mont6} onValueChange={(v) => setSwitches({ ...switches, mont6: v })}/>
            <SwitchButton text='ATUALIZAR o firmware' value={switches.mont7} onValueChange={(v) => setSwitches({ ...switches, mont7: v })}/>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>MODO DE MANUTENÇÃO (1087 1087)</Text>
          <View style={styles.subcontainer}>
            <SwitchButton text='ATUALIZAR o preto (486, Mode 1)' value={switches.modo1} onValueChange={(v) => setSwitches({ ...switches, modo1: v })}/>
            <SwitchButton text='HABILITAR níveis de cores (332)' value={switches.modo2} onValueChange={(v) => setSwitches({ ...switches, modo2: v })}/>
            <SwitchButton text='ALTERAR para modo Europeu (252)' value={switches.modo3} onValueChange={(v) => setSwitches({ ...switches, modo3: v })}/>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>CONFIGURAÇÕES</Text>
          <View style={styles.subcontainer}>
            <SwitchButton text='ALTERAR o idioma para PT-BR' value={switches.conf1} onValueChange={(v) => setSwitches({ ...switches, conf1: v })}/>
            <SwitchButton text='ALTERAR o fuso-horário para Brasília' value={switches.conf2} onValueChange={(v) => setSwitches({ ...switches, conf2: v })}/>
            <SwitchButton text='AJUSTAR a data e hora' value={switches.conf3} onValueChange={(v) => setSwitches({ ...switches, conf3: v })}/>
            <SwitchButton text='AJUSTAR o modo inativo para o máximo' value={switches.conf4} onValueChange={(v) => setSwitches({ ...switches, conf4: v })}/>
            <SwitchButton text='ALTERAR tamanhos e tipos das bandejas' value={switches.conf5} onValueChange={(v) => setSwitches({ ...switches, conf5: v })}/>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>TESTES</Text>
          <View style={styles.subcontainer}>
            <SwitchButton text='IMPRIMIR a página de status' value={switches.test1} onValueChange={(v) => setSwitches({ ...switches, test1: v })}/>
            <SwitchButton text='TESTAR o equipamento na rede' value={switches.test2} onValueChange={(v) => setSwitches({ ...switches, test2: v })}/>
            <SwitchButton text='TESTAR a digitalização normal e duplex' value={switches.test3} onValueChange={(v) => setSwitches({ ...switches, test3: v })}/>
            <SwitchButton text='TESTAR a cópia normal e duplex' value={switches.test4} onValueChange={(v) => setSwitches({ ...switches, test4: v })}/>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>FINALIZAÇÃO</Text>
          <View style={styles.subcontainer}>
            <SwitchButton text='COLAR a etiqueta' value={switches.fina1} onValueChange={(v) => setSwitches({ ...switches, fina1: v })}/>
            <SwitchButton text='DEIXAR sobre o equipamento o cabo de força e a página de status' value={switches.fina2} onValueChange={(v) => setSwitches({ ...switches, fina2: v })}/>
            <SwitchButton text='EMBALAR o equipamento e colocar no palete de equipamentos prontos' value={switches.fina3} onValueChange={(v) => setSwitches({ ...switches, fina3: v })}/>
          </View>
        </View>

        <BackButton />
      </ScrollView>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: -50
  },
  scrollContainer: {
    marginTop: 50,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ece2d2',
    color: '#41423a',
    fontSize: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderColor: "#ece2d2"
  },
  container: {
    padding: 10,
  },
  subcontainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: "#ece2d2"
  },
});
