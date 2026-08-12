import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./FormTaskStyle.js";
import { useContext, useState } from "react";
import api from "../../services/Services.js";
import { TaskContext } from "../../context/TaskContext.jsx";

export default function FormTask({ onTarefaAdicionada }) {

    const { postTasks } = useContext(TaskContext)
    const [textoTarefa, setTextoTarefa] = useState("")

    const saveTask = async (e) => {
        await postTasks(e, textoTarefa)
        setTextoTarefa("")
    }

    return (
        <View style={styles.FormTaskBox}>
            <TextInput
                style={styles.TaskName}
                placeholder="Digite sua tarefa..."
                value={textoTarefa}
                onChangeText={setTextoTarefa}
            />
            <TouchableOpacity style={styles.TaskButton} onPress={saveTask}>
                <Text style={styles.ButtonText}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}