import { View, Image, Text } from "react-native";
import { styles } from "./TaskItemStyle.js";
import trash from '../../../assets/trash.png'
import pen from '../../../assets/pen.png'

export default function TaskItem() {
    return (<View style={styles.TaskItemBox}>
        <Text style={styles.TaskItemText}>Lista de Tarefas</Text>
        <View style={styles.CardBoxIcon}>
        <Image style={styles.pen} source={pen} />
        <Image style={styles.trash} source={trash} />
        </View>
    </View>)
}