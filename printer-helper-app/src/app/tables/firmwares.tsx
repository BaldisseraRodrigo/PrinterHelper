import { BackButton } from '@/components/button';
import Header from '@/components/header';
import React from 'react';
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Firmwares() {
  const firmwares = [
    {
      categoria: 'Kyocera ECOSYS',
      itens: [
        { modelo: 'P2040dn/dw', versao: 'V.2.12', data: '2024.04.23', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/P2040dnP2040dw__Firmware_v_2_12_zip.download.zip' },
        { modelo: 'P3060/3055/3050/3045dn', versao: 'V.09/23', data: '2023.08.30', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/P3060dnP3055dnP3050dnP3045dn_Firmware_v_0923_zip.download.zip' },
      ]
    },
    {
      categoria: 'Kyocera TASKalfa',
      itens: [
        { modelo: '306ci', versao: 'V.5.05', data: '2023.07.04', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/306ci_Firmware_Pack_v_5_05_zip.download.zip' },
      ]
    },
    {
      categoria: 'RICOH',
      itens: [
        { modelo: 'P 311', versao: 'V.2.13', data: '2025.04.06', link: 'https://support.ricoh.com/bb/pub_e/dr_ut_e/0001333/0001333484/V213/z04684L17.exe' },
      ]
    },
    {
      categoria: 'LEXMARK',
      itens: [
        { modelo: 'MX722adhe', versao: 'MXTGW.240.229', data: '2025.05.16', link: 'https://support.lexmark.com/content/support/en_us/support/download.FW5883485271.html' },
      ]
    },
  ];

  return (
    <ScrollView contentContainerStyle={{backgroundColor: '#fff' }}>
      <Header subtitle="LISTAGEM DE FIRMWARES"/>

      {firmwares.map((categoria, index) => (
        <View key={index} style={{ marginTop: 70 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
            {categoria.categoria}
          </Text>


          <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#000'}}>
            <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>MODELO</Text>
            <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>VERSÃO</Text>
            <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>DATA</Text>
            <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>LINK</Text>
          </View>

          {categoria.itens.map((item, idx) => (
            <View key={idx} style={{ flexDirection: 'row', paddingVertical: 8, borderBottomWidth: 0.5, borderBottomColor: '#ccc' }}>
              <Text style={{ flex: 1, textAlign: 'center', fontSize: 14 }}>{item.modelo}</Text>
              <Text style={{ flex: 1, textAlign: 'center', fontSize: 14 }}>{item.versao}</Text>
              <Text style={{ flex: 1, textAlign: 'center', fontSize: 14 }}>{item.data}</Text>
              <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => Linking.openURL(item.link)}>
                <Text style={{ color: '#ED7D27', fontWeight: 'bold' }}>Download</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}
        <View style={{alignItems: 'center'}}>
          <BackButton/>
        </View>
    </ScrollView>

  );
}
