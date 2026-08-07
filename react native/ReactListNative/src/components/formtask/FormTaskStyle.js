import { StyleSheet } from "react-native";
import { Button } from "react-native-web";

export const styles = StyleSheet.create({
    FormTaskBox: {
        width: '100%',
        height: '200px',
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TaskName: {
        width: '100%',
        backgroundColor: '#fff',
        height: 50,
        fontSize: 18,
        borderRadius: 5,
        paddingLeft: 10,
    },
    TaskButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#60a771',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#60a771',
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 15,
        padding: 10,
    },
    ButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
})