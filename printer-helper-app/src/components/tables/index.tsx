import { Text, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string
}

export function Table({ title, ...rest }: Props){
    return (
        <Text>Modelo</Text>
    )
}