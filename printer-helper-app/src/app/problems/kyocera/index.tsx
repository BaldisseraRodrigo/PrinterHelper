import { Button, ButtonOff } from '@/components/button'
import Header from '@/components/header'
import Menu from '@/components/menu/menu'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function Kyocera() {
        
    function errors(){
        router.navigate('./errorsK')
    }

    function changePart(){
        router.navigate('./changePart')
    }

    return (
        <View style={styles.screen}>
            <View>
                <Header subtitle='Kyocera ECOSYS M2040idn'/>
            </View>

            <View style={styles.container}>
                <Button title='Erros' onPress={errors}/>
                <Button title='Troca de Peça' onPress={changePart}/>
                <ButtonOff title='Inatividade'/>
                <ButtonOff title='Manchas'/>
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