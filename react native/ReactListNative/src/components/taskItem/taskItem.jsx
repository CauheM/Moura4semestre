import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Alert,
} from "react-native";

import { styles } from "./TaskItemStyle.js";

import trash from "../../../assets/trash.png";
import pen from "../../../assets/pen.png";

import { useContext, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext.jsx";


export default function TaskItem({ id, descricao }) {


    const { deleteTask } = useContext(TaskContext)

    return (
        <View style={styles.TaskItemBox}>

            <Text style={styles.TaskItemText}>
                {descricao}
            </Text>

            <View style={styles.CardBoxIcon}>

                <TouchableOpacity style={styles.iconPen}
                    onPress={() => { }}
                >
                    <Image
                        style={styles.iconimg}
                        source={pen}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconTrash}
                    onPress={() => {
                        Alert.alert(
                            "Excluir tarefa",
                            "Tem certeza que deseja excluir esta tarefa?",
                            [
                                { text: "Cancelar", style: "cancel" },
                                { text: "Excluir", onPress: () => deleteTask(id) }
                            ]
                        );
                    }}
                >
                    <Image
                        style={styles.iconimg}
                        source={trash}
                    />
                </TouchableOpacity>

            </View>

        </View>
    );
}
