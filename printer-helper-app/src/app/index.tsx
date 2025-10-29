import { Button } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View, Image } from "react-native"
import Header from '../components/header'
import Menu from '../components/menu/menu'

export default function Index() {
    
    function option1() {
        router.navigate('/problems')
    }

    function option2() {
        router.navigate('/forms')
    }

    function option3() {
        router.navigate('./tables')
    }

    return (
            <>
                <Header subtitle="Menu Principal" />
                <View style={styles.container}>
                    <Button title="Problemas" onPress={option1} />
                    <Button title="Formulários" onPress={option2} />
                    <Button title="Tabelas" onPress={option3} />
                </View>

            </>
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
    image: {
        width: 200,
        height: 200, 
        borderRadius: 16, 
    },
    buttonsContainer: {
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})
