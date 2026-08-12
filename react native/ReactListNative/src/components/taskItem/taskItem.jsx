import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Alert,
    Modal,
    TextInput
} from "react-native";

import { useState } from "react";
import { styles } from "./TaskItemStyle.js";
import api from "../../services/Services.js";

import trash from "../../../assets/trash.png";
import pen from "../../../assets/pen.png";

export default function TaskItem({ arrTarefas, setArrTarefas }) {

    const [modalEditar, setModalEditar] = useState(false);
    const [tarefaEditando, setTarefaEditando] = useState(null);
    const [novoTexto, setNovoTexto] = useState("");

    function abrirEditar(tarefa) {
        setTarefaEditando(tarefa);
        setNovoTexto(tarefa.taskValue);
        setModalEditar(true);
    }

    async function editar() {

        if (novoTexto.trim().length === 0) {
            Alert.alert(
                "Erro!",
                "Digite uma tarefa."
            );
            return;
        }

        const objCadastro = {
            taskValue: novoTexto.trim()
        };

        try {
            const retornoAPI = await api.put(
                `/tarefas/${tarefaEditando.id}`,
                objCadastro
            );

            if (retornoAPI.status === 200) {

                setArrTarefas((tarefas) =>
                    tarefas.map((tarefa) =>
                        tarefa.id === tarefaEditando.id
                            ? {
                                ...tarefa,
                                taskValue: novoTexto.trim()
                            }
                            : tarefa
                    )
                );

                setModalEditar(false);
                setTarefaEditando(null);
                setNovoTexto("");

                Alert.alert(
                    "Sucesso",
                    "Tarefa editada com sucesso!"
                );
            }

        } catch (error) {
            console.log(error);

            Alert.alert(
                "Erro",
                "Não foi possível editar a tarefa"
            );
        }
    }

    function deletar(id) {
        Alert.alert(
            "Apagar tarefa",
            "Deseja realmente apagar a tarefa?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Apagar",
                    style: "destructive",
                    onPress: async () => {

                        try {
                            const retornoAPI =
                                await api.delete(`/tarefas/${id}`);

                            if (retornoAPI.status === 200) {

                                setArrTarefas((tarefas) =>
                                    tarefas.filter(
                                        (tarefa) =>
                                            tarefa.id !== id
                                    )
                                );

                                Alert.alert(
                                    "Sucesso",
                                    "Tarefa deletada com sucesso"
                                );
                            }

                        } catch (error) {
                            console.log(error);

                            Alert.alert(
                                "Erro",
                                "Não foi possível deletar a tarefa"
                            );
                        }
                    },
                },
            ]
        );
    }

    return (
        <View>

            {arrTarefas.map((tarefa) => (
                <View
                    style={styles.TaskItemBox}
                    key={tarefa.id}
                >

                    <Text style={styles.TaskItemText}>
                        {tarefa.taskValue}
                    </Text>

                    <View style={styles.CardBoxIcon}>

                        <TouchableOpacity style={styles.iconPen}
                            onPress={() => abrirEditar(tarefa)}
                        >
                            <Image
                                style={styles.iconimg}
                                source={pen}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconTrash}
                            onPress={() => deletar(tarefa.id)}
                        >
                            <Image
                                style={styles.iconimg}
                                source={trash}
                            />
                        </TouchableOpacity>

                    </View>

                </View>
            ))}

            <Modal
                visible={modalEditar}
                transparent={true}
                animationType="fade"
                onRequestClose={() =>
                    setModalEditar(false)
                }
            >

                <View style={styles.ModalContainer}>

                    <View style={styles.ModalBox}>

                        <Text style={styles.ModalTitle}>
                            Editar tarefa
                        </Text>

                        <TextInput
                            style={styles.ModalInput}
                            value={novoTexto}
                            onChangeText={setNovoTexto}
                            placeholder="Digite a nova tarefa"
                            autoFocus
                        />

                        <View style={styles.ModalButtons}>

                            <TouchableOpacity style={[styles.ModalButtonsArea, styles.Cancelar]}
                                onPress={() =>
                                    setModalEditar(false)
                                }
                            >
                                <Text style={styles.ModalButtonsText}>
                                    Cancelar
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.ModalButtonsArea, styles.Salvar]}
                                onPress={editar}
                            >
                                <Text style={styles.ModalButtonsText}>
                                    Salvar
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </Modal>

        </View>
    );
}
