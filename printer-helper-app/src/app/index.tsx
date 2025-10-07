import { Button } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View } from "react-native"
import Header from '../components/header'

export default function Index(){
    
    function option1(){
        router.navigate('/problems')
    }

    function option2(){
        router.navigate('/forms')
    }

    function option3(){
        router.navigate('./tables')
    }

    return (
        <View>
            <View>
                <Header subtitle='Menu Principal'/>
            </View>
            
            <View style={styles.container}>
                <Button title='Soluções de Problemas' onPress={option1}/>
                <Button title='Formulários'onPress={option2}/>
                <Button title='Tabelas' onPress={option3}/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        top: 250,
        padding: 30,
        justifyContent: 'center',
        gap: 16,
        alignItems: 'center',
    },
})