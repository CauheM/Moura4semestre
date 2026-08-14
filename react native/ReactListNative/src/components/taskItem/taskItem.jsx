import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Alert,
    Modal,
    TextInput,
    StyleSheet,
} from "react-native";

import { styles } from "./TaskItemStyle.js";
import { estilosModal } from "./TaskItemStyle.js";

import trash from "../../../assets/trash.png";
import pen from "../../../assets/pen.png";

import { useContext, useState } from "react";
import { TaskContext } from "../../context/TaskContext.jsx";


export default function TaskItem({ id, descricao }) {

    const [modalVisivel, setModalVisivel] = useState(false);
    const [novaDescricao, setNovaDescricao] = useState(descricao);

    const { deleteTask, putTask } = useContext(TaskContext)

    const handleSalvarEdicao = async () => {
        if (!novaDescricao || novaDescricao.trim().length === 0) {
            Alert.alert("Erro", "A descrição não pode estar vazia");
            return;
        }
        await putTask(id, novaDescricao);
        setModalVisivel(false);
    }

    const handleCancelarEdicao = () => {
        setNovaDescricao(descricao);
        setModalVisivel(false);
    }

    return (
        <View style={styles.TaskItemBox}>

            <Text style={styles.TaskItemText}>
                {descricao}
            </Text>

            <View style={styles.CardBoxIcon}>

                <TouchableOpacity style={styles.iconPen}
                    onPress={() => setModalVisivel(true)}
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

            <Modal
                visible={modalVisivel}
                transparent={true}      
                onRequestClose={handleCancelarEdicao}
            >
                <View style={estilosModal.container}>
                    <View style={estilosModal.modalContent}>
                        <Text style={estilosModal.titulo}>Editar Tarefa</Text>
                        
                        <TextInput
                            style={estilosModal.input}
                            placeholder="Digite a nova descrição"
                            value={novaDescricao}
                            onChangeText={setNovaDescricao}
                            multiline
                            numberOfLines={4}
                        />

                        <View style={estilosModal.botoes}>
                            <TouchableOpacity
                                style={[estilosModal.botao, estilosModal.botaoCancelar]}
                                onPress={handleCancelarEdicao}
                            >
                                <Text style={estilosModal.textoBotao}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[estilosModal.botao, estilosModal.botaoSalvar]}
                                onPress={handleSalvarEdicao}
                            >
                                <Text style={estilosModal.textoBotao}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );
}

