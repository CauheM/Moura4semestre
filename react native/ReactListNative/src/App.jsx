import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import FormTask from './components/formtask/formTask.jsx';
import TaskList from './components/tasklist/taskList.jsx';

import api from './services/Services.js';
import { styles } from './Style.js';
import { TaskProvider } from './context/TaskContext.jsx';

export default function App() {

  const [arrTarefas, setArrTarefas] = useState([]);

  async function getTarefas() {
      try {
      const resposta = await api.get("/tarefas");

      setArrTarefas(resposta.data);
    } catch (error) {
      console.log("Erro ao buscar tarefas:", error);
    }
  }

  useEffect(() => {
    getTarefas();
  }, []);


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        
        <TaskProvider>
        <View style={styles.container}>
          <Header />
          <FormTask
            onTarefaAdicionada ={getTarefas} />
          <TaskList
            arrTarefas={arrTarefas}
            setArrTarefas={setArrTarefas} />
          <Footer />
          <StatusBar style="auto" />
        </View>
        </TaskProvider>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

