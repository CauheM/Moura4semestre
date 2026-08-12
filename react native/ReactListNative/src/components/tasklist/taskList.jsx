import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./TaskListStyle.js";
import TaskItem from '../taskItem/taskItem.jsx';
import { useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext.jsx";

export default function TaskList({ }) {

    const { listagemTarefas, getTasks } = useContext(TaskContext)

    useEffect(() => {
        getTasks();
    }, [])

    return (
        <ScrollView style={styles.TaskListContainer} >
            {listagemTarefas.map((tarefa) => {
                return (
                    <TaskItem
                        key={tarefa.id}
                        id={tarefa.id}
                        descricao={tarefa.descricao}
                    />
                )
            })}

        </ScrollView>
    )
}