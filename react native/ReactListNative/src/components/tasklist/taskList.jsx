import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./TaskListStyle.js";
import TaskItem from '../taskItem/taskItem.jsx';

export default function TaskList( { arrTarefas, setArrTarefas } ) {
    return (
        <ScrollView style={styles.TaskListContainer} >
            <TaskItem 
                arrTarefas={arrTarefas}
                setArrTarefas={setArrTarefas}
            />
        </ScrollView>
    )
}