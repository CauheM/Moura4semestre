import { createContext, useState } from "react";
import api from "../services/Services";

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [listagemTarefas, setlistagemTarefas] = useState([])

    const getTasks = async () => {
    try {
      const resposta = await api.get("/tarefas");

      setlistagemTarefas(resposta.data);
    } catch (error) {
      console.log("Erro ao buscar tarefas:", error);
    }
    }

    const postTasks = async () => {

    }


    return(

      <TaskContext.Provider value={{ listagemTarefas, getTasks, postTasks }}>
      {children}
     </TaskContext.Provider>

    )


}