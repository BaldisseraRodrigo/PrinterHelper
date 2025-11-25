import { Button, ButtonOff } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Header from '../../components/header'
import Menu from '../../components/menu/menu'

export default function Tables() {
    return (
        <View style={styles.screen}>
            <View>
                <Header subtitle='Tabelas'/>
            </View>
            <View style={styles.container}>
                <Button title='Firmwares' onPress={()=>router.push('/tables/firmwares')}/>
                <Button title='Toners'onPress={()=>router.push('/tables/toners')}/>
                <ButtonOff title='Peças'/>
                <ButtonOff title='Equipamentos'/>
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