import { Button, ButtonOff } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Header from '../../components/header'
import Menu from '../../components/menu/menu'

export default function Forms() {
    return (
        <View style={styles.screen}>
            <View>
                <Header subtitle='Formulários'/>
            </View>
            <View style={styles.container}>
                <Button title='Formulário de Preparação' onPress={()=>router.push('/forms/formPrep')}/>
                <Button title='Formulário de Instalação' onPress={()=>router.push('/forms/formInst')}/>
                <Button title='Formulário de Retirada' onPress={()=>router.push('/forms/formReti')}/>
                <ButtonOff title='Formulário de Manutenção'/>
                <ButtonOff title='Formulário de Desmanche'/>
            </View>
            <Menu/>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        padding: 30,
        justifyContent: 'center',
        gap: 16,
        alignItems: 'center',
    },
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
})
