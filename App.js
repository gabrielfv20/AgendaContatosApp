import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaBoasVindas from './telas/TelaBoasVindas';
import TelaListagem from './telas/TelaListagem';
import TelaCadastro from './telas/TelaCadastro';
import TelaVisualizacao from './telas/TelaVisualizacao';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Boasvindas'
      >
        <Stack.Screen
          name="BoasVindas"
          component={TelaBoasVindas}
          options={{ title: 'Boas-Vindas!', headerStyle:{backgroundColor: '#CBBFBB'} }}
        />
        <Stack.Screen name="Listagem" component={TelaListagem} options={{
          headerStyle:{
            backgroundColor: '#CBBFBB',
          },
        }} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} options={{
          headerStyle:{
            backgroundColor: '#CBBFBB',
          },
        }}/>
        <Stack.Screen name="Visualizacao" component={TelaVisualizacao} options={{
          headerStyle:{
            backgroundColor: '#CBBFBB',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
