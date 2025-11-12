import Menu from '@/components/menu/menu'
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../components/header'

export default function Firmwares() {

    const toners = [
        {
            type: 'Kyocera',
            item: [
                {modelo: 'P2040dn/dw', versao: 'V.2.12', data: '2024.04.23', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/P2040dnP2040dw__Firmware_v_2_12_zip.download.zip'},
                {modelo: 'M2640idw', versao: 'V.2.13', data: '2024.07.12', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/M2640idw__Firmware_v_2_13_zip.download.zip'},
                {modelo: '306ci', versao: 'V.5.05', data: '2023.07.04', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/306ci_Firmware_Pack_v_5_05_zip.download.zip'},
            ]
        },
        {
            type: 'Ricoh',
            item: [{
                modelo: 'P311',
                versao: 'V.2.17',
                data: '2025.04.06',
                link: 'https://support.ricoh.com/bb/pub_e/dr_ut_e/0001333/0001333484/V213/z04684L17.exe'
            }]
        },
        {
            type: 'Lexmark',
            item: [{
                modelo: 'MX722adhe',
                versao: '240.229',
                data: '2025.05.16',
                link: 'https://support.lexmark.com/content/support/en_us/support/download.FW5883485271.html'
            }]
        },
    ]

    return (
        <View style={styles.screen}>
            <ScrollView>
                <View>
                    <Header subtitle='Toners'/>
                </View>
                <View style={styles.table}>
                    {toners.map((type, index) => (
                        <View key={index}>
                            <Text style={styles.caption}>{type.type}</Text>
                            <View style={styles.tHead}>
                                <Text style={styles.tH}>MODELO</Text>
                                <Text style={styles.tH}>VERSÃO</Text>
                                <Text style={styles.tH}>DATA</Text>
                                <Text style={styles.tH}>LINK</Text>
                            </View>
                            {type.item.map((item, idx) => (
                                <View key={idx} style={styles.tBody}>
                                    <Text style={styles.tD}>{item.modelo}</Text>
                                    <Text style={styles.tD}>{item.versao}</Text>
                                    <Text style={styles.tD}>{item.data}</Text>
                                    <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                                        <Text style={styles.linkText}>Download</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </ScrollView>
            <Menu/>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        top: 100,
        padding: 5,
        alignItems: 'center',
    },
    table: {
        top: -60,
        padding: 10,
    },
    caption: {
        top: 100,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#ED7D27',
        color: '#f7f7f7',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: '#41423a',
        borderWidth: 1,
    },
    tHead: {
        top: 100,
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#ece2d2',
        borderColor: '#41423a',
        borderWidth: 1,
    },
    tH: {
        color: '#41423a',
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    tBody: {
        top: 100,
        padding: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderBottomColor: '#41423a',
    },
    tD: {
        textAlign: 'center',
        flex: 1
    },
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    linkText: {
        color: 'blue',
        fontWeight: 'bold'
    }
})