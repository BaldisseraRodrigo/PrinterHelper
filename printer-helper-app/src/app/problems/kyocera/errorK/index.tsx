import { Button } from '@/components/button'
import Header from '@/components/header'
import Menu from '@/components/menu/menu'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function Kyocera() {
        
    function errors(){
        router.navigate('./kyocera/errorsK')
    }

    function changePart(){
        router.navigate('./kyocera/changePart')
    }

    return (
        <View style={styles.screen}>
            <View>
                <Header subtitle='ERROS 1000'/>
            </View>

            <View style={styles.container}>
                <Button title='0100-0970' onPress={errors}/>
                <Button title='1000' onPress={changePart}/>
                <Button title='2000' onPress={changePart}/>
                <Button title='3000' onPress={changePart}/>
                <Button title='4000' onPress={changePart}/>
                <Button title='5000' onPress={changePart}/>
                <Button title='6000' onPress={changePart}/>
                <Button title='7000' onPress={changePart}/>
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