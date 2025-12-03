import { Button, ButtonOff } from '@/components/button'
import Header from '@/components/header'
import Menu from '@/components/menu/menu'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function ErrorsK() {

    function e0100(){
        router.navigate('../kyocera/e0100')
    }

    return (
        <View style={styles.screen}>
            <View>
                <Header subtitle='Kyocera/Erros'/>
            </View>
            <View style={styles.container}>
                <Button title='1000' onPress={e0100}/>
                <ButtonOff title='2000'/>
                <ButtonOff title='3000'/>
                <ButtonOff title='4000'/>
                <ButtonOff title='4000'/>
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