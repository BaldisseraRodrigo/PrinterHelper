import { ButtonOff } from '@/components/button';
import Header from '@/components/header';
import { InputNumber, InputText } from '@/components/input';
import { SwitchButton } from '@/components/switch';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FormReti() {
  const [switches, setSwitches] = useState({
    tipo1: false,
    tipo2: false,
    tipo3: false,
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
      <Header subtitle="FORMULÁRIO DE RETIRADA" />
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
              <Text style={styles.title}>TIPO DE RETIRADA</Text>
              <View style={styles.subcontainer}>
                <SwitchButton text='Substituída' value={switches.tipo1} onValueChange={(v) => setSwitches({ ...switches, tipo1: v })}/>
                <SwitchButton text='Retirada Definitiva' value={switches.tipo2} onValueChange={(v) => setSwitches({ ...switches, tipo2: v })}/>
                <SwitchButton text='Retirada para Manutenção' value={switches.tipo3} onValueChange={(v) => setSwitches({ ...switches, tipo3: v })}/>
                <Text style={styles.subtitle}>Backup</Text>
                <View style={styles.minicontainer}>
                  <SwitchButton text='Sim' value={switches.tipo1} onValueChange={(v) => setSwitches({ ...switches, tipo1: v })}/>
                  <SwitchButton text='Não' value={switches.tipo2} onValueChange={(v) => setSwitches({ ...switches, tipo2: v })}/>
                </View>
              </View>
            </View>

            <View style={styles.container}>
              <Text style={styles.title}>OUTRAS INFORMAÇÕES</Text>
              <View style={styles.subcontainer}>
                <SwitchButton text='RETIRAR do PrintWayy' value={switches.conf1} onValueChange={(v) => setSwitches({ ...switches, conf1: v })}/>
                <SwitchButton text='RETIRAR Suprimentos' value={switches.conf2} onValueChange={(v) => setSwitches({ ...switches, conf2: v })}/>
                <SwitchButton text='IMPRIMIR Página de Status' value={switches.conf3} onValueChange={(v) => setSwitches({ ...switches, conf3: v })}/>
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
  subtitle: {
    fontWeight: 'bold',
    color: '#41423a',
    fontSize: 15,
  },
  minicontainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: "#ece2d2",
    
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
