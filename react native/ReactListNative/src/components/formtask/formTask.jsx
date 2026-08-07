import { View, Text, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { styles } from "./FormTaskStyle.js";
import { useState } from "react";

export default function FormTask() {
    const [TaskValue, setTaskValue] = useState("");

    const saveTask = () => {
        console.log(TaskValue);
        Alert.alert("Tarefa adicionada com sucesso!", `${TaskValue} cadastrado com sucesso!`);
    }

    return (
    <View style={styles.FormTaskBox}> 
        <TextInput style={styles.TaskName} value={TaskValue} 
        onChangeText={(textoDigitado) => {
            setTaskValue(textoDigitado);
        }} placeholder="Adiciona uma Tarefa" />
        <TouchableOpacity style={styles.TaskButton} onPress={saveTask}>
            <Text style={styles.ButtonText}>Adicionar</Text>
        </TouchableOpacity> 
.    </View>
    )
}