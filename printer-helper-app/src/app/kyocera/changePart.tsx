import { BackButton, Button, ButtonOff } from '@/components/button'
import Header from '@/components/header'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function ChangePart() {

    function fuserUnit(){
        router.navigate('/kyocera/fuserUnit')
    }

    return (
        <View>
            <View>
                <Header subtitle='Troca de Peças'/>
            </View>
            <View style={styles.container}>
                <Button title='Unidade Fusora' onPress={fuserUnit}/>
                <ButtonOff title='Unidade de Cilindro'/>
                <ButtonOff title='Unidade Reveladora'/>
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