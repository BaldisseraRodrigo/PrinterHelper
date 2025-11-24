import { BackButton } from '@/components/button'
import Header from '@/components/header'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function FuserUnit() {

    return (
        <View>
            <ScrollView style={styles.container2}>
            <View>
                <Header subtitle='Troca da Unidade Fusora'/>
            </View>

                <View style={styles.row}>
                    <Text style={styles.data}>I. DESLIGUE o equipamento e RETIRE o cabo de força.</Text>
                    <View style={styles.container3}>
                        <Image source={require("../../../../assets/images/001_m2040.png")} />
                    </View>

                    <Text style={styles.data}>II. ABRA a tampa traseira e com uma chave de fenda fina, RETIRE os acabamentos laterais.</Text>
                    <View style={styles.container3}>
                        <Image source={require("../../../../assets/images/002_traseira.png")} />
                    </View>
                    <Text style={styles.data}>III. Com a chave de fenda, PRESSIONE a drobradiça direita da tampa traseira para soltar.</Text>
                    <View style={styles.container3}>
                        <Image source={require("../../../../assets/images/003_dobra.png")} />
                    </View>
                    <Text style={styles.data}>IV. RETIRE os outros acabamentos.</Text>
                    <View style={styles.container3}>
                        <Image source={require("../../../../assets/images/004_tampa_tras.png")} />
                        <Image source={require("../../../../assets/images/005_acabamento.png")} />
                    </View>
                    <Text style={styles.data}>V. DESCONECTE os cabos de sinal e força da unidade fusora.</Text>
                    <View style={styles.container3}>
                        <Image source={require("../../../../assets/images/006_cabos.png")} />
                    </View>
                    <Text style={styles.data}>VI. SOLTE os quatro parafusos com uma chave philips e REMOVA a unidade fusora</Text>
                    <View style={styles.container3}>
                        <Image source={require("../../../../assets/images/007_parafusos.png")} />
                    </View>
                    <Text style={styles.data}>VII. REMOVA a unidade fusora.</Text>
                    <View style={styles.container3}>
                        <Image source={require("../../../../assets/images/008_remover.png")} />
                    </View>
                    <Text style={styles.data}>VIII. MONTE a nova unidade fusora, e APERTE ao menos 2 parafusos para testar antes de montar os acabamentos.</Text>
                    <View style={styles.container3}>
                        <Image source={require("../../../../assets/images/009_montar.png")} />
                    </View>
                    <Text style={styles.data}>IX. CONECTE os cabos da unidade de fusão no equipamento, LIGUE o equipamento e IMPRIMA uma página de teste.</Text>
                    <View style={styles.container3}>
                        <Image source={require("../../../../assets/images/010_conectar.png")} />
                    </View>
                    <Text style={styles.data}>X. Para finalizar, MONTE as placas de acabamento e a tampa traseira no equipamento novamente.</Text>
                </View>
                <View style={styles.container}>
                    <BackButton/>
                </View>
            </ScrollView>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 50,
        justifyContent: 'center',
        gap: 16,
        alignItems: 'center',
    },
    container2: {
        top: 0,
    },
    head: {
        top: 20,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#ece2d2',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#41423a',
        fontWeight: 'bold',
    },
    row: {
        top: 100,
        padding: 10,
        justifyContent: 'center',
    },
    data: {
        fontSize: 20,
        color: '#41423a',
    },
    container3: {
        alignItems: 'center',
    }

})