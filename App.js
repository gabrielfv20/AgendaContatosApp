import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaBoasVindas from './telas/TelaBoasVindas';
import TelaListagem from './telas/TelaListagem';
import TelaCadastro from './telas/TelaCadastro';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BoasVindas"
          component={TelaBoasVindas}
          options={{ title: 'Boas-Vindas!' }}
        />
        <Stack.Screen name="Listagem" component={TelaListagem} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
