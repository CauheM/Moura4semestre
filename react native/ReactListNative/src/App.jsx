import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import FormTask from './components/formtask/formTask.jsx';
import TaskList from './components/tasklist/taskList.jsx';

import { styles } from './Style.js';
import { TaskProvider } from './context/TaskContext.jsx';

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>

        <TaskProvider>

          <View style={styles.container}>
            <Header />
            <FormTask />
            <TaskList />
            <Footer />
            <StatusBar style="auto" />
          </View>

        </TaskProvider>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

