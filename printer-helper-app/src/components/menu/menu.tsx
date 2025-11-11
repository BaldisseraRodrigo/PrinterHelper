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
        <View style={styles.icon}>
          <MaterialIcons name="print" size={50} color="#f7f7f7" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={home}>
        <View style={styles.icon}>
          <MaterialIcons name="home" size={50} color="#f7f7f7"/>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={checklist}>
        <View style={styles.icon}>
          <MaterialIcons name="checklist" size={50} color="#f7f7f7" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 100,
    top: 100,
},

icon: {
  backgroundColor: '#ED7D27',
  borderRadius: 100,
  alignItems: 'center',
  justifyContent: 'center',
  height: 75,
  width: 75,
}
});
