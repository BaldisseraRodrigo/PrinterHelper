import { BackButton, Button, ButtonOff } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Header from '../components/header'
import Menu from '../components/menu/menu'

export default function Forms() {
    return (
        <View style={styles.screen}>
            <View>
                <Header subtitle='Formulários'/>
            </View>
            <View style={styles.container}>
                <Button title='Formulário de Preparação' onPress={() => router.push('./forms/formPrep')}/>
                <Button title='Formulário de Instalação' onPress={() => router.push('/formularioInstalacao')}/>
                <ButtonOff title='Formulário de Retirada'/>
                <ButtonOff title='Formulário de Manutenção'/>
                <ButtonOff title='Formulário de Desmanche'/>
            </View>
            <Menu/>
        </View>
    )
}

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    container: {
        marginTop: 80,
        paddingHorizontal: 30,
        justifyContent: 'center',
        gap: 16,
        alignItems: 'center',
    },
})
