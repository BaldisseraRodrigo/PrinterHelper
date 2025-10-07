import { BackButton } from '@/components/button'
import Header from '@/components/header'
import { StyleSheet, Text, View } from 'react-native'

export default function E0100() {

    return (
        <View>
            <View>
                <Header subtitle='Código de Erro 0100'/>
            </View>
            <View style={styles.head}>
                <Text style={styles.title}>Causa</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.data}>É um problema com o dispositivo de memória de backup.</Text>
            </View>
            <View style={styles.head}>
                <Text style={styles.title}>Solução</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.data}>1.Reinicie a impressora.
                    2.Certifique-se de que todos os cabos e conexões internas estejam firmes e sem danos.
                    3.Atualize o firmware.
                    4.Se as etapas anteriores não resolverem o problema, pode ser necessário substituir a placa principal.</Text>
            </View>
            <View style={styles.container}>
                <BackButton/>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        top: 100,
        padding: 30,
        justifyContent: 'center',
        gap: 16,
        alignItems: 'center',
    },
    head: {
        top: 100,
        marginTop: 10,
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
})