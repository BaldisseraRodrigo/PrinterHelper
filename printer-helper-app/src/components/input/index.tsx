import { router } from 'expo-router';
import { Text, View, TextInput } from "react-native";
import { styles } from './styles';

type Props = {
    titleForm: string
}

export function InputNumber({ titleForm }: Props){
    return (
        <View>
            <Text>{titleForm}</Text>
            <TextInput style={styles.inputTxt} keyboardType="numeric"/>
        </View>
    )
}

export function InputData({ titleForm }: Props){
    return (
        <View>
            <Text>{titleForm}</Text>
            <TextInput style={styles.inputTxt}/>
        </View>
    )
}

export function InputText({ titleForm }: Props){
    return (
        <View>
            <Text>{titleForm}</Text>
            <TextInput style={styles.inputTxt}/>
        </View>
    )
}