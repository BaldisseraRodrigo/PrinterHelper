import { StyleSheet, Text, TextProps, View } from "react-native"

type Props = TextProps & {
    subtitle: string
}

export default function Header({ subtitle }: Props){

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title}>PRINTER HELPER</Text>
            </View>
            <View style={styles.header2}>
                <Text style={styles.title2}>{subtitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        top: 50,
        backgroundColor: '#ED7D27',
        padding: 20,
    },
    title: {
        color:'#f7f7f7',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    header2: {
        top: 50,
        padding: 10,
        backgroundColor: '#ece2d2',
        zIndex: 3,
    },
    title2: {
        color:'#41423a',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

})