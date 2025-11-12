import Menu from '@/components/menu/menu'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/header'

export default function Tables() {

    const toners = [
        {
            type: 'Kyocera',
            item: [
                {modelo: 'TK1175', capacidade: '5000 páginas', equipamento: 'ECOSYS M2040idn'},
                {modelo: 'TK3162', capacidade: '5000 páginas', equipamento: 'ECOSYS M3145idn'},
                {modelo: 'TK3182', capacidade: '5000 páginas', equipamento: 'ECOSYS M3655idn'},
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
})