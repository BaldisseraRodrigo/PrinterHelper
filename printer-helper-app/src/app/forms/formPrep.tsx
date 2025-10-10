import { BackButton } from '@/components/button';
import Header from '@/components/header';
import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet} from 'react-native';
import { SwitchButton } from '@/components/switch';
import { InputNumber, InputData, InputText } from '@/components/input';

export default function FormPrep() {
  const [infraChecked, setInfraChecked] = useState(false);
  const [posicaoChecked, setPosicaoChecked] = useState(false);
  const [conexaoChecked, setConexaoChecked] = useState(false);

  return (
    <View>
      <Header subtitle="FORMULÁRIO DE INSTALAÇÃO"/>

      <ScrollView>

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
              <SwitchButton text='RETIRAR os lacres'/>
              <SwitchButton text='MONTAR os encartes em Português'/>
              <SwitchButton text='MONTAR ADF e destravar scanner (A3)'/>
              <SwitchButton text='MONTAR a caixa de resíduos'/>
              <SwitchButton text='MONTAR o(s) toner(s)'/>
              <SwitchButton text='LIGAR o máquina para adiçionar toner'/>
              <SwitchButton text='ATUALIZAR o firmware'/>
            </View>
          </View>
          
          <View style={styles.container}>
          <Text style={styles.title}>MODO DE MANUTENÇÃO (1087 1087)</Text>
            <View style={styles.subcontainer}>
              <SwitchButton text='ATUALIZAR o preto (486, Mode 1)'/>
              <SwitchButton text='HABILITAR níveis de cores (332)'/>
              <SwitchButton text='ALTERAR para modo Europeu (252)'/>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>CONFIGURAÇÕES</Text>
            <View style={styles.subcontainer}>
              <SwitchButton text='ALTERAR o idioma para PT-BR'/>
              <SwitchButton text='ALTERAR o fuso-horário para Brasília'/>
              <SwitchButton text='AJUSTAR a data e hora'/>
              <SwitchButton text='AJUSTAR o modo inativo para o máximo'/>
              <SwitchButton text='ALTERAR tamanhos e tipos das bandejas'/>
              <SwitchButton text='COLAR a etiqueta'/>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>TESTES</Text>
            <View style={styles.subcontainer}>
              <SwitchButton text='IMPRIMIR a página de status'/>
              <SwitchButton text='TESTAR o equipamento na rede'/>
              <SwitchButton text='TESTAR a digitalização normal e duplex'/>
              <SwitchButton text='TESTAR a cópia normal e duplex'/>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>FINALIZAÇÃO</Text>
            <View style={styles.subcontainer}>
              <SwitchButton text='COLAR a etiqueta'/>
              <SwitchButton text='DEIXAR sobre o equipamento o cabo de força e a página de status'/>
              <SwitchButton text='EMBALAR o equipamento e colocar no palete de equipamentos prontos'/>
            </View>
          </View>
          <BackButton/>
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'black',
      color: 'white',
      fontSize: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    container: {
      padding: 10,
      top: 75,
    },
    subcontainer: {
      borderWidth: 1,
      borderStyle: 'solid',
      padding: 5,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10 
    },
})