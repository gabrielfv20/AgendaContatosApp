import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';


function onPress() {
    console.log("clicou");
}

export default function TelaBoasVindas() {
  return (
    <View style={styles.container}>
        <Text style={styles.mensagem}>Bem-vindo ao app!</Text>
        <Button
            onPress={onPress}
            title="Entrar"
            color="#841584"
            accessibilityLabel="Entrar para valer na aplicação"
        />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mensagem: {
    fontSize: 44,
    paddingVertical: 20,
  },
});
