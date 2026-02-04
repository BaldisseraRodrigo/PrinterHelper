import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/header';

export default function Tables() {

    const toners = [
        {
            type: 'Kyocera',
            item: [
                {modelo: 'TK-1162', capacidade: '7.200 páginas', equipamento: 'ECOSYS P2040idn'},
                {modelo: 'TK-1175', capacidade: '12.000 páginas', equipamento: 'ECOSYS M2040idn'},
                {modelo: 'TK-3102', capacidade: '12.500 páginas', equipamento: 'ECOSYS M3040idn'},
                {modelo: 'TK-3122', capacidade: '21.000 páginas', equipamento: 'ECOSYS M3550idn'},
                {modelo: 'TK-3162', capacidade: '12.500 páginas', equipamento: 'ECOSYS P3145/P3040/M3145idn'},
                {modelo: 'TK-3182', capacidade: '21.000 páginas', equipamento: 'ECOSYS P3055/P3155/M3655idn'},
                {modelo: 'TK-5197Y', capacidade: '7.000 páginas', equipamento: 'TASKALFA 306ci'},
                {modelo: 'TK-5197C', capacidade: '7.000 páginas', equipamento: 'TASKALFA 306ci'},
                {modelo: 'TK-5197M', capacidade: '7.000 páginas', equipamento: 'TASKALFA 306ci'},
                {modelo: 'TK-5197K', capacidade: '15.000 páginas', equipamento: 'TASKALFA 306ci'},
                {modelo: 'TK-5207Y', capacidade: '12.000 páginas', equipamento: 'TASKALFA 356/358ci'},
                {modelo: 'TK-5207C', capacidade: '12.000 páginas', equipamento: 'TASKALFA 356/358ci'},
                {modelo: 'TK-5207M', capacidade: '12.000 páginas', equipamento: 'TASKALFA 356/358ci'},
                {modelo: 'TK-5207K', capacidade: '18.000 páginas', equipamento: 'TASKALFA 356/358ci'},
                {modelo: 'TK-5217Y', capacidade: '15.000 páginas', equipamento: 'TASKALFA 406ci'},
                {modelo: 'TK-5217C', capacidade: '15.000 páginas', equipamento: 'TASKALFA 406ci'},
                {modelo: 'TK-5217M', capacidade: '15.000 páginas', equipamento: 'TASKALFA 406ci'},
                {modelo: 'TK-5217K', capacidade: '20.000 páginas', equipamento: 'TASKALFA 406ci'},
                {modelo: 'TK-8337Y', capacidade: '15.000 páginas', equipamento: 'TASKALFA 3253ci'},
                {modelo: 'TK-8337C', capacidade: '15.000 páginas', equipamento: 'TASKALFA 3253ci'},
                {modelo: 'TK-8337M', capacidade: '15.000 páginas', equipamento: 'TASKALFA 3253ci'},
                {modelo: 'TK-8337K', capacidade: '25.000 páginas', equipamento: 'TASKALFA 3253ci'},
                {modelo: 'TK-8347Y', capacidade: '12.000 páginas', equipamento: 'TASKALFA 2552/2553ci'},
                {modelo: 'TK-8347C', capacidade: '12.000 páginas', equipamento: 'TASKALFA 2552/2553ci'},
                {modelo: 'TK-8347M', capacidade: '12.000 páginas', equipamento: 'TASKALFA 2552/2553ci'},
                {modelo: 'TK-8347K', capacidade: '20.000 páginas', equipamento: 'TASKALFA 2552/2553ci'},
            ]
        },
        {
            type: 'Ricoh',
            item: [{
                modelo: 'SP3710',
                capacidade: '5000 páginas',
                equipamento: 'P311, M320F'
            }]
        },
        {
            type: 'Lexmark',
            item: [{
                modelo: 'Lexmark',
                capacidade: '5000 páginas',
                equipamento: 'Lexmark'
            }]
        },
        {
            type: 'Brother',
            item: [{
                modelo: 'Brother',
                capacidade: '5000 páginas',
                equipamento: 'Brother'
            }]
        },
    ]

    return (
        <View style={styles.containerMain}>
            <Header subtitle="FORMULÁRIO DE INSTALAÇÃO" />
            <SafeAreaView style={styles.safeContainer}>
            <ScrollView>
                <View style={styles.table}>
                    {toners.map((type, index) => (
                        <View key={index}>
                            <Text style={styles.caption}>{type.type}</Text>
                            <View style={styles.tHead}>
                                <Text style={styles.tH}>MODELO</Text>
                                <Text style={styles.tH}>CAPACIDADE</Text>
                                <Text style={styles.tH}>EQUIPAMENTO</Text>
                            </View>
                            {type.item.map((item, idx) => (
                                <View key={idx} style={styles.tBody}>
                                    <Text style={styles.tD}>{item.modelo}</Text>
                                    <Text style={styles.tD}>{item.capacidade}</Text>
                                    <Text style={styles.tD}>{item.equipamento}</Text>
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
})