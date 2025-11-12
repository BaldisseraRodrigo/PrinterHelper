import { Button, ButtonOff } from '@/components/button'
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
                <View style={styles.family}>
                    <ButtonOff title='ECOSYS'/>
                    <ButtonOff title='TaskAlfa'/>
                </View>
                
                <ButtonOff title='Ricoh'/>
                <ButtonOff title='Lexmark'/>
                <ButtonOff title='Brother'/>
            </View>

            <Menu/>

        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        top: 200,
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
    family: {
        flexDirection: 'row',
        width: 150,
        justifyContent: 'center',
        columnGap: 10,
    },
})