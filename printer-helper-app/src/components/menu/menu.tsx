import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

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
  function tables() {
    router.push('/tables')
  }
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={home}>
          <MaterialIcons name="home" size={40} color="#f7f7f7" />
      </TouchableOpacity>

      <TouchableOpacity onPress={problems}>
          <MaterialIcons name="print" size={40} color="#f7f7f7"/>
      </TouchableOpacity>

      <TouchableOpacity onPress={checklist}>
          <MaterialIcons name="checklist" size={40} color="#f7f7f7" />
      </TouchableOpacity>

      <TouchableOpacity onPress={tables}>
          <MaterialIcons name='table-rows' size={40} color="#f7f7f7" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
menuContainer: {
    height: 50,
    width: 410,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ed7d27', // altera cor do menu
    display: 'flex',
    position: 'absolute',
    bottom: 45
},
});
