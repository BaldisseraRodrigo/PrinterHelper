import { BackButton, Button, ButtonOff } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Header from '../components/header'

export default function Forms() {
    return (
        <View>
            <View>
                <Header subtitle='Formulários'/>
            </View>
            <View style={styles.container}>
                <Button title='Formulário de Preparação' onPress={() => router.push('./forms/formPrep')}/>
                <Button title='Formulário de Instalação' onPress={() => router.push('/formularioInstalacao')}/>
                <ButtonOff title='Formulário de Retirada'/>
                <ButtonOff title='Formulário de Manutenção'/>
                <ButtonOff title='Formulário de Desmanche'/>
                <BackButton/>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        top: 200,
        padding: 30,
        justifyContent: 'center',
        gap: 16,
        alignItems: 'center',
    },
})