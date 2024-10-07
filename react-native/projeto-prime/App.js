import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import Prime from './src/Telas/Prime';
import Texto from './src/Components/Texto';
import Contador from './src/Components/Contador';
import CadNews from './src/Components/CadNews';

export default function App() {
  return (
    <ScrollView>
      <Prime/>
      <Texto/>
      <CadNews/>
      <Contador/>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

