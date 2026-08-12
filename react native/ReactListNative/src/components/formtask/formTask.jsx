import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./FormTaskStyle.js";
import { useState } from "react";
import api from "../../services/Services.js";

export default function FormTask({ onTarefaAdicionada }) {
    const [taskValue, setTaskValue] = useState("");


    function limpaFormulario() {
        setTaskValue("")
    }

    async function cadastrarTarefa(e) {

        if (taskValue.trim().length === 0) {
            Alert.alert(
                "Erro!",
                "Digite uma tarefa para cadastrar!"
            );
            return;
        }

        const objCadastro = {
            taskValue,
        }

        try {
            const retornoAPI = await api.post("/tarefas", objCadastro);

            console.log(retornoAPI);
            if (retornoAPI.status === 201) {
                setTaskValue("");
                await onTarefaAdicionada();
            }

        } catch (error) {
            Alert.alert("Erro!", "Erro ao cadastrar tarefa!");
        }

    }

    return (
        <View style={styles.FormTaskBox}>
            <TextInput style={styles.TaskName} value={taskValue}
                onChangeText={(textoDigitado) => {
                    setTaskValue(textoDigitado);
                }} placeholder="Adiciona uma Tarefa" />
            <TouchableOpacity style={styles.TaskButton} onPress={cadastrarTarefa}>
                <Text style={styles.ButtonText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}