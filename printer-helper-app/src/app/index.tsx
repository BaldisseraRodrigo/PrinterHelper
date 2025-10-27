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
                <Header subtitle="Printer do Brasil" />

                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLe27u9DF_EFGbrsx9iNuVN-2y6FU7xilbjQ&s"
                            }}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <Button title="Problemas" onPress={option1} />
                        <Button title="Formulários" onPress={option2} />
                        <Button title="Tabelas" onPress={option3} />
                    </View>

                    <Menu />
                </View>
            </>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
        maxHeight: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '60',
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
