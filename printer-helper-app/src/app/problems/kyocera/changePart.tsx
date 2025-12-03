import { Button, ButtonOff } from '@/components/button'
import Header from '@/components/header'
import Menu from '@/components/menu/menu'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function ChangePart() {

    function fuserUnit(){
        router.navigate('../kyocera/fuserUnit')
    }

    return (
        <View style={styles.screen}>
            <View>
                <Header subtitle='Troca de Peças'/>
            </View>
            <View style={styles.container}>
                <Button title='Unidade Fusora' onPress={fuserUnit}/>
                <ButtonOff title='Unidade de Cilindro'/>
                <ButtonOff title='Unidade Reveladora'/>
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