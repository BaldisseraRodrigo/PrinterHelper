import { router } from 'expo-router';
import { View, Text, Switch} from "react-native";
import { styles } from './styles';

type Props = {
    text: string
    value: boolean
    onValueChange: (value: boolean) => void
}

export function SwitchButton({ text, value, onValueChange }: Props){
    return (
        <View style={styles.switchContainer}>
            <Switch value={value} onValueChange={onValueChange}/><Text style={styles.data}>{text}</Text>
        </View>
    )
}