import { router } from 'expo-router';
import { View, Text, Switch, TextProps } from "react-native";
import { styles } from './styles';

type Props = {
    text: string
}

export function SwitchButton({ text }: Props){
    return (
        <View style={styles.switchContainer}>
            <Switch/><Text style={styles.data}>{text}</Text>
        </View>
    )
}