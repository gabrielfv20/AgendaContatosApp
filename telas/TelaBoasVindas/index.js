import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';


export default function TelaBoasVindas({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.mensagem}>Bem-vindo ao app!</Text>
        <Button
            onPress={() => {
              navigation.navigate('Listagem');
            }}
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
    backgroundColor: '#CBBFBB',
  },
  mensagem: {
    fontSize: 44,
  },
});
