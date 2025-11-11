import { Button } from '@/components/button'
import { router } from 'expo-router'
import { StyleSheet, View, TextInput, ScrollView, Modal, Text, TouchableOpacity } from "react-native"
import Header from '../components/header'
import Menu from '../components/menu/menu'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons' 
import modelsData from '../../assets/data/modelos.json';

export default function Index() {
    const [search, setSearch] = useState('')
    const [foundModel, setFoundModel] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

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
        setFoundModel(result || null)
        setModalVisible(true)
    }

    return (
        <View style={styles.page}>
            <Header subtitle="Printer do Brasil" />


            <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Busque por modelo"
                        value={search}
                        onChangeText={setSearch}
                        placeholderTextColor="#afafafff"
                        onSubmitEditing={handleSearch}
                    />
                    <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                        <Ionicons name="search" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.imageContainer}>
                    <Button title="Problemas" onPress={option1} />
                    <Button title="Formulários" onPress={option2} />
                    <Button title="Tabelas" onPress={option3} />
                </View>
            </ScrollView>

            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalBox}>
                        {foundModel ? (
                            <>
                                <Text style={styles.modalTitle}>{foundModel.modelo}</Text>
                                <Text>Toner: {foundModel.toner}</Text>
                                <Text>Firmware: {foundModel.firmware}</Text>
                            </>
                        ) : (
                            <Text style={styles.modalTitle}>Modelo não encontrado</Text>
                        )}
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={{ color: '#fff' }}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Menu />
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
    modalBox: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 15,
        backgroundColor: '#ed7d27',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },
})
