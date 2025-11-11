import { ButtonOff } from '@/components/button';
import Header from '@/components/header';
import { InputNumber, InputText } from '@/components/input';
import { SwitchButton } from '@/components/switch';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FormInst() {
  const [switches, setSwitches] = useState({
    preI1: false,
    preI2: false,
    preI3: false,
    conf1: false,
    conf2: false,
    conf3: false,
    conf4: false,
    conf5: false,
    conf6: false,
    inst1: false,
    inst2: false,
    inst3: false,
  })

  return (
    <View style={styles.containerMain}>
      <Header subtitle="FORMULÁRIO DE INSTALAÇÃO" />
        <SafeAreaView style={styles.safeContainer}>
          <ScrollView 
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={true}>
            <View style={styles.container}>
              <Text style={styles.title}>DADOS PRINCIPAIS</Text>
              <View style={styles.subcontainer}>
                <InputNumber titleForm='OS'/>
                <InputText titleForm='Técnico Responsável'/>
                <InputText titleForm='Técnico Auxiliar'/>
                <InputText titleForm='Cliente'/>
                <InputText titleForm='Local'/>
                <InputText titleForm='Setor'/>
              </View>
            </View>

            <View style={styles.container}>
              <Text style={styles.title}>PRÉ-INSTALAÇÃO</Text>
              <View style={styles.subcontainer}>
                <SwitchButton text='VERIFICAR a infra-estrutura do local (tomada, ponto de rede e balcão)' value={switches.preI1} onValueChange={(v) => setSwitches({ ...switches, preI1: v })}/>
                <SwitchButton text='POSICIONAR o equipamento no local definido previamente' value={switches.preI2} onValueChange={(v) => setSwitches({ ...switches, preI2: v })}/>
                <SwitchButton text='CONECTAR os cabos de força e dados (rede ou USB) e LIGAR o equipamento' value={switches.preI3} onValueChange={(v) => setSwitches({ ...switches, preI3: v })}/>
              </View>
            </View>

            <View style={styles.container}>
              <Text style={styles.title}>CONFIGURAÇÕES</Text>
              <View style={styles.subcontainer}>
                <SwitchButton text='APLICAR os níveis de toner (COLOR)' value={switches.conf1} onValueChange={(v) => setSwitches({ ...switches, conf1: v })}/>
                <SwitchButton text='DEFINIR os endereços de IP, máscara de sub-rede e gateway (REDE)' value={switches.conf2} onValueChange={(v) => setSwitches({ ...switches, conf2: v })}/>
                <SwitchButton text='INSTALAR o Driver nos computadores ou servidor' value={switches.conf3} onValueChange={(v) => setSwitches({ ...switches, conf3: v })}/>
                <SwitchButton text='CONFIGURAR o Scanner para os usuários (MULTI)' value={switches.conf4} onValueChange={(v) => setSwitches({ ...switches, conf4: v })}/>
                <SwitchButton text='INSTALAR o PrintWayy em um computador e monitorar o equipamento' value={switches.conf5} onValueChange={(v) => setSwitches({ ...switches, conf5: v })}/>
                <SwitchButton text='ATUALIZAR o firmware' value={switches.conf6} onValueChange={(v) => setSwitches({ ...switches, conf6: v })}/>
              </View>
            </View>

            <View style={styles.container}>
              <Text style={styles.title}>INSTRUÇÕES DE USO</Text>
              <View style={styles.subcontainer}>
                <SwitchButton text='ORIENTAR os usuários como adicionar papel e substituição do toner' value={switches.inst1} onValueChange={(v) => setSwitches({ ...switches, inst1: v })}/>
                <SwitchButton text='MOSTRAR aos usuários o driver instalado e as opções de impressão' value={switches.inst2} onValueChange={(v) => setSwitches({ ...switches, inst2: v })}/>
                <SwitchButton text='INSTRUIR os usuários como utilizar as funções de cópia e digitalização (MULTI)' value={switches.inst3} onValueChange={(v) => setSwitches({ ...switches, inst3: v })}/>
              </View>
            </View>

            <View style={styles.printArea}>
              <ButtonOff title='Adicionar imagem'/>
              <View style={styles.imageArea}></View>
              <ButtonOff title='Imprimir'/>
            </View>
          </ScrollView>
        </SafeAreaView>
    </View>
  );
}

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  safeContainer: {
    flex: 1,
    marginTop: -35,
  },
  scrollContainer: {
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
  imageArea: {
    alignSelf: 'center',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#ece2d2',
    borderRadius: 5,
    width: 390,
    height: 400,
    margin: 15,
  },
  printArea: {
    padding: 10,
  }
});
