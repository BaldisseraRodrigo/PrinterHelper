import { Button } from '@/components/button'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useState } from 'react'
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import modelsData from '../../assets/data/modelos.json'
import Header from '../components/header'

export default function Index() {
    const [search, setSearch] = useState('')
    const [foundModel, setFoundModel] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    function option1() {
        router.navigate('./problems')
    }

    function option2() {
        router.navigate('./forms')
    }

    function option3() {
        router.navigate('./tables')
    }

    function handleSearch() {
        const result = modelsData.find(item => 
            item.modelo.toLowerCase() === search.trim().toLowerCase()
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

        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#ffffffff',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 100,
    },
    searchContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 60,
        marginBottom: 15,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#3b3b3bff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 16,
        fontSize: 16,
    },
    searchButton: {
        backgroundColor: '#ed7d27',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    imageContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 16,
        marginTop: 20,
        width: '100%',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(12, 12, 12, 0.3)',
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