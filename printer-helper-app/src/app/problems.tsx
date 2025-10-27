import { BackButton, Button, ButtonOff } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Header from '../components/header'
import Menu from '../components/menu/menu'

export default function Problems() {
    
    function kyocera(){
        router.navigate('/kyocera')
    }

    return (
        <View style={styles.screen}>
            <View>
                <Header subtitle='Soluções de Problemas'/>
            </View>
            <View style={styles.container}>
                <Button title='Kyocera' onPress={kyocera}/>
                <ButtonOff title='Ricoh'/>
                <ButtonOff title='Lexmark'/>
                <ButtonOff title='Brother'/>
                <BackButton/>
            </View>
            <Menu/>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        top: 250,
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