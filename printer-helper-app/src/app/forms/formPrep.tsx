import { BackButton } from '@/components/button';
import Header from '@/components/header';
import React, { useState } from 'react';
import { ScrollView, Switch, Text, TextInput, View } from 'react-native';

export default function FormPrep() {
  const [infraChecked, setInfraChecked] = useState(false);
  const [posicaoChecked, setPosicaoChecked] = useState(false);
  const [conexaoChecked, setConexaoChecked] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff'}}>
      <Header subtitle="FORMULÁRIO DE INSTALAÇÃO"/>

      <ScrollView 
        contentContainerStyle={{alignItems: 'center', marginTop: 60}}>
        <Text>OS:</Text>
        <TextInput 
          style={{ borderWidth: 1, borderColor: '#ccc', width: '75%', padding: 10, borderRadius: 5, marginBottom: 10 }} keyboardType="numeric"
        />

        <Text>Técnico Responsável:</Text>
        <TextInput 
          style={{ borderWidth: 1, borderColor: '#ccc', width: '75%', padding: 10, borderRadius: 5, marginBottom: 10 }}/>

        <Text>Técnico Auxiliar:</Text>
        <TextInput 
          style={{ borderWidth: 1, borderColor: '#ccc', width: '75%', padding: 10, borderRadius: 5, marginBottom: 10 }}/>

        <Text>Local:</Text>
        <TextInput 
          style={{ borderWidth: 1, borderColor: '#ccc', width: '75%', padding: 10, borderRadius: 5, marginBottom: 10 }}/>

        <Text>Setor:</Text>
        <TextInput 
          style={{ borderWidth: 1, borderColor: '#ccc', width: '75%', padding: 10, borderRadius: 5, marginBottom: 20 }}/>

        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>PRÉ-INSTALAÇÃO</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
          <Switch 
            value={infraChecked} onValueChange={setInfraChecked}/>
          <Text style={{ marginLeft: 8 }}>Verificar infraestrutura do local</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
          <Switch 
            value={posicaoChecked} 
            onValueChange={setPosicaoChecked}/>
          <Text style={{ marginLeft: 8 }}>Posicionar equipamento</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <Switch 
            value={conexaoChecked} 
            onValueChange={setConexaoChecked}/>
          <Text style={{ marginLeft: 8 }}>Conectar cabos e ligar equipamento</Text>
        </View>
          <BackButton/>

      </ScrollView>
    </View>
  );
}
