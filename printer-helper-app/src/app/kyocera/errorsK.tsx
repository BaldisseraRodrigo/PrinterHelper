import { BackButton, Button, ButtonOff } from '@/components/button'
import Header from '@/components/header'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Menu from '@/components/menu/menu'

export default function ErrorsK() {

    function e0100(){
        router.navigate('./e0100')
    }

    return (
        <View>
            <View>
                <Header subtitle='Kyocera/Erros'/>
            </View>
            
            <Menu/>
            
            <View style={styles.container}>
                <Button title='1000' onPress={e0100}/>
                <ButtonOff title='2000'/>
                <ButtonOff title='3000'/>
                <ButtonOff title='4000'/>
                <ButtonOff title='4000'/>
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