import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    TaskItemBox: {
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#31364D',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        padding: '0 15px'
    },
    TaskItemText: {
        fontSize: 24,
        color: '#fff',
    },
    CardBoxIcon: {
        flexDirection: 'row',
        gap: 20,
    },
    pen: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderColor: 'rgb(8, 25, 215)',
        borderStyle: 'solid',

    },
    trash: {
        width: 40,
        height: 45,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#e33100',
        borderStyle: 'solid',

    },
})