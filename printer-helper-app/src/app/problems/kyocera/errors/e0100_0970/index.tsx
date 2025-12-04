import { Button } from '@/components/button'
import Header from '@/components/header'
import Menu from '@/components/menu/menu'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function e0100_0970() {

    return (
        <View style={styles.screen}>
            <View>
                <Header subtitle='ERROS 0100-0970'/>
            </View>
            <View style={styles.container}>
                <Button title='0100' onPress={() => router.push('./e0100_0970/e0100')}/>
                <Button title='0120' onPress={() => router.push('./e0100_0970/e0120')}/>
                <Button title='0130' onPress={() => router.push('./e0100_0970/e0130')}/>
                <Button title='0140' onPress={() => router.push('./e0100_0970/e0140')}/>
                <Button title='0150' onPress={() => router.push('./e0100_0970/e0150')}/>
                <Button title='0160' onPress={() => router.push('./e0100_0970/e0160')}/>
                <Button title='0170' onPress={() => router.push('./e0100_0970/e0170')}/>
                <Button title='0190' onPress={() => router.push('./e0100_0970/e0190')}/>
                <Button title='0500' onPress={() => router.push('./e0100_0970/e0500')}/>
                <Button title='0510' onPress={() => router.push('./e0100_0970/e0510')}/>
                <Button title='0530' onPress={() => router.push('./e0100_0970/e0530')}/>
                <Button title='0540' onPress={() => router.push('./e0100_0970/e0540')}/>
                <Button title='0800' onPress={() => router.push('./e0100_0970/e0800')}/>
                <Button title='0840' onPress={() => router.push('./e0100_0970/e0840')}/>
                <Button title='0970' onPress={() => router.push('./e0100_0970/e0970')}/>
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