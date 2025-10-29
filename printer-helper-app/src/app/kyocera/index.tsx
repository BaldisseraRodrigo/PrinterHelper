import { BackButton, Button, ButtonOff } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Header from '../../components/header'
import Menu from '@/components/menu/menu'

export default function Kyocera() {
        
    function errors(){
        router.navigate('/kyocera/errorsK')
    }

    function changePart(){
        router.navigate('/kyocera/changePart')
    }

    return (
        <View>
            <View>
                <Header subtitle='Kyocera ECOSYS M2040idn'/>
            </View>
            <Menu/>
            <View style={styles.container}>
                <Button title='Erros' onPress={errors}/>
                <Button title='Troca de Peça' onPress={changePart}/>
                <ButtonOff title='Inatividade'/>
                <ButtonOff title='Manchas'/>
                <BackButton/>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        top: 150,
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