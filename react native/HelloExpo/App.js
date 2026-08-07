import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './components/header/header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <Header />
      <Text style={styles.text1}>Meu vô</Text>
      <Text style={styles.text2}>W</Text>
      <StatusBar style="auto" />
    </View>   
      </SafeAreaView>
    </SafeAreaProvider>
  
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  height: '100%',
  width: '100%',
  borderColor: '#ff0000',
  borderWidth: 5,
  borderStyle: 'dotted',
  },

  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },

  text1: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },

    text2: {
    color: '#0011ff',
    fontSize: 20,
    fontWeight: 'bold',
  },
     
});
