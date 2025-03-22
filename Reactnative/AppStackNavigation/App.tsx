// Importa o componente Status Bar do EXpo, que permite customizar a barra de status do dispositvo.
import { StatusBar } from 'expo-status-bar';
//Importa os modelos necessários para navegação no aplicativo.
import { StyleSheet, Text, View } from 'react-native';

// Importa os modelos necessários para navegação no aplicativo
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Importa as telas que serão utilziadas na navegação
import HomeScreen from './screens/HomeScreen';
//import DetailsScreen from './screens/DetailsScreen';

// Definir os tipos das rotas para garantir tipagem segura no typescript
type RootStackParamList = {
  Home: undefined; // A tela home não recebe nenhum parâmetro
  Details: undefined; // A tela details
}

// Criar o stack navigator, que gerencia a navegação entre as telas.
const Stack = createStackNavigator<RootStackParamList>();

// Componentes principal do aplicativo
const App: React.FC = () =>{
  return(
    // O NavigationContainer é o elemento principal que envolve oda a navegação do app
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name = "Home"
        component={HomeScreen}
        options={{title:'HomePage'}}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// Exportar o componente App;
export default App;
