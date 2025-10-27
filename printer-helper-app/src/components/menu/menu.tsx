import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Menu() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Index')}>
        <Text style={styles.item}><MaterialIcons name="print" size={28} color='#ffffffff' /></Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Forms')}>
        <Text style={styles.item}><MaterialIcons name="home" size={28} color='#ffffffff' /></Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Problems')}>
        <Text style={styles.item}><MaterialIcons name="checklist" size={28} color='#ffffffff' /></Text>
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
    height: 90,
    backgroundColor: '#ed7d27ff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
    elevation: 8,
  },
  item: {
    fontSize: 16,
    color: '#41423a',
    fontWeight: '500',
  },
});
