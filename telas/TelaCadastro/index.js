import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';


export default function TelaCadastro() {
  return (
    <View style={estilo.container}>
        <Text >Tela de cadastro</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
