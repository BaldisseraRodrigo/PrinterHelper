import { BackButton } from '@/components/button';
import Header from '@/components/header';
import React, { useState } from 'react';
import { ScrollView, Switch, Text, TextInput, View, StyleSheet} from 'react-native';
import { SwitchButton } from '@/components/switch';

export default function FormPrep() {
  const [infraChecked, setInfraChecked] = useState(false);
  const [posicaoChecked, setPosicaoChecked] = useState(false);
  const [conexaoChecked, setConexaoChecked] = useState(false);

  return (
    <View>
      <Header subtitle="FORMULÁRIO DE INSTALAÇÃO"/>

      <ScrollView>
          <Text style={styles.title}>DADOS PRINCIPAIS</Text>
          <View style={styles.container}>
            <Text>OS:</Text>
            <TextInput style={styles.inputTxt} keyboardType="numeric"/>
            <Text>Data:</Text>
            <TextInput style={styles.inputTxt}/>
            <Text>Técnico Responsável:</Text>
            <TextInput style={styles.inputTxt}/>
          </View>

          <Text style={styles.title}>MONTAGEM</Text>
          <View style={styles.container}>
            <SwitchButton text='RETIRAR os lacres'/>
            <SwitchButton text='MONTAR os encartes em Português'/>
            <SwitchButton text='MONTAR ADF e retirar a trava do scanner (modelos A3)'/>



            <Switch/><Text>MONTAR ADF e retirar a trava do scanner (modelos A3);</Text>
            <Switch/><Text>MONTAR a caixa de resíduos;</Text>
            <Switch/><Text>MONTAR o(s) toner(s);</Text>
            <Switch/><Text>LIGAR o equipamento para a adição de toner;</Text>
            <Switch/><Text>ATUALIZAR o firmware;</Text>
          </View>

          <Text style={styles.title}>CONFIGURAÇÕES</Text>
          <View style={styles.container}>
              <View style={styles.subContainer}>
                <Switch/><Text>ALTERAR o idioma para Português Brasil;</Text>
              </View>
            <Switch/><Text>ALTERAR o fuso-horário para Brasília GMT -3:00;</Text>
            <Switch/><Text>AJUSTAR a data e hora;</Text>
            <Switch/><Text>MONTAR a caixa de resíduos;</Text>
            <Switch/><Text>AJUSTAR o modo de inatividade para o máximo;</Text>
            <Switch/><Text>AJUSTAR os tamanhos de papel e tipo de todas as bandejas;</Text>
            <Switch/><Text>COLAR a etiqueta;</Text>
          </View>

          <Text style={styles.title}>TESTES</Text>
          <View style={styles.container}>
            <Switch/><Text>IMPRIMIR a página de status;</Text>
            <Switch/><Text>TESTAR o equipamento na rede;</Text>
            <Switch/><Text>TESTAR a digitalização normal e frente-verso;</Text>
            <Switch/><Text>TESTAR a cópia normal e frente-verso;</Text>
          </View>

          <Text style={styles.title}>FINALIZAÇÃO</Text>
          <View style={styles.container}>
            <Switch/><Text>COLAR a etiqueta;</Text>
            <Switch/><Text>DEIXAR sobre o equipamento o cabo de força e a página de status;</Text>
            <Switch/><Text>EMBALAR o equipamento e colocar no palete de equipamentos prontos;</Text>
          </View>
          <BackButton/>

      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      top: 100,
      textAlign: 'center',
    },
    text: {
flexDirection: 'row',
    },
    container: {
      borderStyle: 'solid',
      borderColor: 'red',
      borderWidth: 1,
      padding: 20,
      margin: 20,
      top: 100,
      alignItems: 'center',
    },
    subContainer: {
      borderBottomColor: 'black',
      flexDirection: 'row'
    },
    inputTxt: { 
      borderWidth: 1,
      borderColor: '#ccc',
      width: '75%',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10 
    }
})