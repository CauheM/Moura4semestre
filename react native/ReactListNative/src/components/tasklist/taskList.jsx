import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./TaskListStyle.js";
import TaskItem from '../taskItem/taskItem.jsx';

export default function TaskList() {
    return (
        <ScrollView style={styles.TaskListContainer} >
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </ScrollView>
    )
}