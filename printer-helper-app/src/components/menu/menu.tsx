import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router'

export default function Menu() {
  function home() {
      router.push('/'); 
    }
  function checklist() {
    router.push('/forms')
  }
  function problems() {
    router.push('/problems')
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={problems}>
        <MaterialIcons name="print" size={30} color="#ffffffff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={home}>
        <MaterialIcons name="home" size={50} color="#ffffffff"/>
      </TouchableOpacity>

      <TouchableOpacity onPress={checklist}>
        <MaterialIcons name="checklist" size={30} color="#ffffffff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#ed7d27ff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#41423a',
    zIndex: 100,
},
  botaohome: {
    backgroundColor: '#ff9646ff',
    width: 200,
    height: 100,
    borderRadius: 35,
    borderColor: '#ffffffff',
    borderWidth: 1,
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,

  },
});
