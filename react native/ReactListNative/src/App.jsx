import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/header.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.text}>O meu vô prime</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Arial',
    color: '#ff0000',
    fontWeight: 'bold',
  },
});
