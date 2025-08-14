import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        color: '#660B05',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,

    },
    list: {
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0'

    },
    item: {
        backgroundColor: 'crimson',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    email: {
        fontSize: 14,
        color: 'yellow'
    }
})