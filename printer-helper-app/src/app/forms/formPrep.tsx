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

          <View style={styles.form}>
            <Text style={styles.title}>DADOS PRINCIPAIS</Text>
            <InputNumber titleForm='OS'/>
            <InputData titleForm='Data'/>
            <InputText titleForm='Técnico Responsável'/>
          </View>

          <View style={styles.checklist}>
            <Text style={styles.title}>MONTAGEM</Text>
            <SwitchButton text='RETIRAR os lacres'/>
            <SwitchButton text='MONTAR os encartes em Português'/>
            <SwitchButton text='MONTAR ADF e destravar scanner (A3)'/>
            <SwitchButton text='MONTAR a caixa de resíduos'/>
            <SwitchButton text='MONTAR o(s) toner(s)'/>
            <SwitchButton text='LIGAR o máquina para adiçionar toner'/>
            <SwitchButton text='ATUALIZAR o firmware'/>
          </View>
          
          <View style={styles.checklist}>
          <Text style={styles.title}>MODO DE MANUTENÇÃO (1087 1087)</Text>
            <SwitchButton text='ATUALIZAR o preto (486, Mode 1)'/>
            <SwitchButton text='HABILITAR níveis de cores (332)'/>
            <SwitchButton text='ALTERAR para modo Europeu (252)'/>
          </View>

          <View style={styles.checklist}>
            <Text style={styles.title}>CONFIGURAÇÕES</Text>
            <SwitchButton text='ALTERAR o idioma para PT-BR'/>
            <SwitchButton text='ALTERAR o fuso-horário para Brasília'/>
            <SwitchButton text='AJUSTAR a data e hora'/>
            <SwitchButton text='AJUSTAR o modo inativo para o máximo'/>
            <SwitchButton text='ALTERAR tamanhos e tipos das bandejas'/>
            <SwitchButton text='COLAR a etiqueta'/>
          </View>

          <View style={styles.checklist}>
            <Text style={styles.title}>TESTES</Text>
            <SwitchButton text='IMPRIMIR a página de status'/>
            <SwitchButton text='TESTAR o equipamento na rede'/>
            <SwitchButton text='TESTAR a digitalização normal e duplex'/>
            <SwitchButton text='TESTAR a cópia normal e duplex'/>
          </View>

          <View style={styles.checklist}>
            <Text style={styles.title}>FINALIZAÇÃO</Text>
            <SwitchButton text='COLAR a etiqueta'/>
            <SwitchButton text='DEIXAR sobre o equipamento o cabo de força e a página de status'/>
            <SwitchButton text='EMBALAR o equipamento e colocar no palete de equipamentos prontos'/>
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
      backgroundColor: 'gray',
      color: 'white',
      fontSize: 20
    },
    form: {
      padding: 10,
      marginBottom: 20,
      top: 75,
      borderStyle: 'solid',
      borderWidth: 1,
    },
    checklist: {
      padding: 10,
      marginBottom: 20,
      top: 75,
    },
})