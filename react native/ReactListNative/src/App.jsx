import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import FormTask from './components/formtask/formTask.jsx';
import TaskList from './components/tasklist/taskList.jsx';
import TaskItem from './components/taskItem/taskItem.jsx';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Style.js';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <Header/>
          <FormTask/>
          <TaskList/>
          <Footer/>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

