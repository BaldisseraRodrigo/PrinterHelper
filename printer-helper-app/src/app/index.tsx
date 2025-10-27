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
        <View style={styles.container}>
            <Header subtitle="Printer do Brasil" />

            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLe27u9DF_EFGbrsx9iNuVN-2y6FU7xilbjQ&s"
                    }}
                    style={styles.image}
                    resizeMode="contain" 
                />
            </View>

            <Menu />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200, 
        borderRadius: 16, 
    },
})
