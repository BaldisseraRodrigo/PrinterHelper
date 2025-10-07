import { BackButton, Button, ButtonOff } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import Header from '../../components/header'

export default function Tables() {
    return (
        <View>
            <View>
                <Header subtitle='Tabelas'/>
            </View>
            <View style={styles.container}>
                <Button title='Firmwares' onPress={()=>router.push('/tables/firmwares')}/>
                <Button title='Toners'onPress={()=>router.push('/tables/toners')}/>
                <ButtonOff title='Peças'/>
                <ButtonOff title='Equipamentos'/>
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