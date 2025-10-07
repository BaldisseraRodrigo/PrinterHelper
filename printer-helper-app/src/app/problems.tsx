import { BackButton, Button, ButtonOff } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Header from '../components/header'

export default function Problems() {
    
    function kyocera(){
        router.navigate('/kyocera')
    }

    return (
        <View>
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
})