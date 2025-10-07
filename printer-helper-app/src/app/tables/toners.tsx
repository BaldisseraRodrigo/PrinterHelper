import { BackButton } from '@/components/button'
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
        <ScrollView>
            <View>
                <Header subtitle='Toners'/>
            </View>
            <View>
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
            <View style={styles.container}>
                <BackButton/>
            </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    container: {
        top: 100,
        padding: 5,
        alignItems: 'center',
    },
    caption: {
        top: 100,
        padding: 5,
        alignItems: 'center',
        backgroundColor: '#41423a',
        color: '#f7f7f7',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    tHead: {
        top: 100,
        padding: 5,
        flexDirection: 'row',
        backgroundColor: '#ed7d27',
    },
    tH: {
        color: '#f7f7f7',
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    tBody: {
        top: 100,
        padding: 5,
        flexDirection: 'row',
        borderBottomWidth: 1,
    },
    tD: {
        textAlign: 'center',
        flex: 1
    },
})