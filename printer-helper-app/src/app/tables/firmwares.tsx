import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/header'

export default function Firmwares() {

    const toners = [
        {
            type: 'Kyocera',
            item: [

                //ECOSYS
                {modelo: 'P2040dn/dw', versao: 'V.2.12', data: '2024.04.23', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/P2040dnP2040dw__Firmware_v_2_12_zip.download.zip'},

                {modelo: 'P3060/3055/3050/3045dn', versao: 'V.09/23', data: '2023.08.30', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/P3060dnP3055dnP3050dnP3045dn_Firmware_v_0923_zip.download.zip'},

                {modelo: 'M2135dn/M2040dnL', versao: 'V.2.13', data: '2024.07.12', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/M2135dnM2040dnL_Firmware_v_2_13_zip.download.zip'},

                {modelo: 'M2640idw', versao: 'V.2.13', data: '2024.07.12', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/M2640idw__Firmware_v_2_13_zip.download.zip'},

                {modelo: 'M3040idn', versao: 'V.05/22', data: '2022.04.27', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/ECOSYS_M3040idn_Firmware__Pack__v_0522_zip.download.zip'},

                {modelo: 'M3145idn', versao: 'V.07/24', data: '2024.03.26', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/M3145idn__Firmware_v_0724_zip.download.zip'},

                {modelo: 'M3560/M3550/M3540idn', versao: 'V.05/22', data: '2022.04.27', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/ECOSYS_M3560idnM3550idnM3540idn_Firmware_Pack_v_0522_zip.download.zip'},

                {modelo: 'M3660/M3655/M3645idn', versao: 'V.07/24', data: '2024.03.26', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/M3660idn_M3655idn_M3645idn_Firmware_v_0724_zip.download.zip'},

                {modelo: 'M5526cdw/cdn', versao: 'V.2.14', data: '2024.06.20', link: 'https://www.kyoceradocumentsolutions.com.br/pt/support/downloads.name-L2JyL3B0L21mcC9FQ09TWVNNNTUyNkNEVw==.html#tab=firmware'},

                {modelo: 'M6235/6230cidn', versao: 'V.06/24', data: '2024.03.26', link: 'https://www.kyoceradocumentsolutions.com.br/pt/support/downloads.name-L2JyL3B0L21mcC9FQ09TWVNNNjIzNUNJRE4=.html#tab=firmware'},

                //TASKALFA
                {modelo: '306ci', versao: 'V.5.05', data: '2023.07.04', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/306ci_Firmware_Pack_v_5_05_zip.download.zip'},

                {modelo: '307ci', versao: 'V.1.05', data: '2023.08.29', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/307ci_Firmware_v_1_05_zip.download.zip'},

                {modelo: '308ci', versao: 'V.4.00', data: '2025.06', link: 'https://www.kyoceradocumentsolutions.com.br/pt/support/downloads.name-L2JyL3B0L21mcC9UQVNLQUxGQTMwOENJ.html#tab=firmware'},
               
                {modelo: '358ci', versao: 'V.3.00', data: '2025.06', link: 'https://www.kyoceradocumentsolutions.com.br/pt/support/downloads.name-L2JyL3B0L21mcC9UQVNLQUxGQTM1OENJ.html#tab=firmware'},

                {modelo: '406/356ci', versao: 'V.5.06', data: '2023.11.24', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/406ci356ci_Firmware_Pack_v_5_06_zip.download.zip'},

                {modelo: '3252/2552ci', versao: 'V.4.15', data: '2025.03', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/3252ci2552ci_Pack_Firmware_v_4_15_zip.download.zip'},

                {modelo: '3253/2553ci', versao: 'V.2.19', data: '2025.03', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/3253ci2553ci_Firmware_v_2_19_zip.download.zip'},

                {modelo: '2554/3554ci', versao: 'V.4.03', data: '2025.10', link: 'https://www.kyoceradocumentsolutions.com.br/pt/support/downloads.name-L2JyL3B0L21mcC9UQVNLQUxGQTI1NTRDSQ==.html#tab=firmware'},

                {modelo: '6002/5002/4002i', versao: 'V.4.15', data: '2025.03', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/6002i5002i4002i_Pack_Firmware_v_4_15_zip.download.zip'},

                {modelo: '6052/5052/4052/3552ci', versao: 'V.4.15', data: '2025.03', link: 'https://mykyocera.kyoceradocumentsolutions.com.br/content/download-center-americas/br/firmwares/6052ci5052ci4052ci3552ci_Pack_v_4_15_zip.download.zip'},                
            ]
        },
        {
            type: 'Ricoh',
            item: [
                {modelo: 'P311', versao: 'V.2.17', data: '2025.10.10', link: 'https://support.ricoh.com/bb/pub_e/dr_ut_e/0001333/0001333484/V217/z05471L17.exe'},
            
                {modelo: 'SP 3710DN', versao: 'V.1.29', data: '2025.11.18', link: 'https://support.ricoh.com/bb/pub_e/dr_ut_e/0001309/0001309545/V129/z05810L15.exe'},
                
                {modelo: 'M 320F', versao: 'V.2.17', data: '2025.10.10', link: 'https://support.ricoh.com/bb/pub_e/dr_ut_e/0001333/0001333454/V217/z05472L17.exe'},

                {modelo: 'SP 3710SF/330FN', versao: 'V.1.29', data: '2025.11.21', link: 'https://support.ricoh.com/bb/pub_e/dr_ut_e/0001309/0001309498/V129/z05840L15.exe'},               
            ]
        },
        {
            type: 'Lexmark',
            item: [{
                modelo: 'MX722adhe',
                versao: '250.038',
                data: '2025.10.28',
                link: 'https://support.lexmark.com/content/support/pt_br/support/download.FW5883495552.html'
            }]
        },
        {
            type: 'Brother',
            item: [{
                modelo: 'HLL5212DW',
                versao: '1.26',
                data: '2025.10.09',
                link: 'https://support.brother.com/g/b/downloadhowto.aspx?c=br&lang=pt&prod=hll5212dw_us&os=10068&dlid=dlf107191_000&flang=47&type3=375'
            }]
        },
    ]

    return (
        <View style={styles.containerMain}>
            <Header subtitle='Toners'/>
            <SafeAreaView style={styles.safeContainer}>
                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={true}>
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
            </SafeAreaView>
        </View>
    )
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
    table: {
        marginTop: -100,
        padding: 10,
        marginBottom: 100
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
        flex: 1,
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