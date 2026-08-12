import { createContext, useState } from "react";
import api from "../services/Services";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [listagemTarefas, setlistagemTarefas] = useState([])

    const getTasks = async () => {
        try {
            const resposta = await api.get("/taskpoint");

            const APIData = await resposta.data
            setlistagemTarefas(APIData);
        } catch (error) {
            console.log("Erro ao buscar tarefas:", error);
        }
    }

    const postTasks = async (e, textoTarefa) => {
        e.preventDefault();

        if (!textoTarefa || textoTarefa.trim().length === 0) {
            alert("Preencha o campo de tarefa corretamente");
            return false;
        }

        const objCadastro = { descricao: textoTarefa }; // importante: usar "descricao" se sua API espera isso

        try {
            const retornoAPI = await api.post("/taskpoint", objCadastro);

            if (retornoAPI.status === 201) {
                const dadosCadastrados = retornoAPI.data;
                setlistagemTarefas([...listagemTarefas, dadosCadastrados]);
                console.log("Tarefa cadastrada:", dadosCadastrados);
            } else {
                alert("Problema inesperado ao salvar tarefa");
            }
        } catch (error) {
            console.log("Erro ao salvar tarefa:", error);
        }
    };

    const deleteTask = async (id) => {
        try {
            const retornoAPI = await api.delete(`taskpoint/${id}`)

            if (retornoAPI.status === 200) {
                await getTasks()
                console.log("Tarefa deletada com sucesso")
            } else {
                alert("Problema inesperado ao deletar tarefa")
            }
        } catch (error) {
            console.log("Erro ao deletar tarefa:", error);
        }

    }

    const putTask = async (id) => {

        const objCadastro = {
            textoTarefa,
        }

        try {
            const retornoAPI = await api.put(`taskpoint/${id}`)

            if (retornoAPI.status == 200) {
                alert("Tarefa editada com sucesso!")
                getTarefas()
                setEditar(false)
            } else {
                alert("Não foi possível editar a tarefa")
            }
        } catch (error) {
            alert("Não foi possível editar a tarefa")
            console.log(error)
        }
    }

    return (

        <TaskContext.Provider value={{ listagemTarefas, getTasks, postTasks, deleteTask }}>
            {children}
        </TaskContext.Provider>

    )


}