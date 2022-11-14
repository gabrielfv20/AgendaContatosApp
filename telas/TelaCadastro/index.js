import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button, View } from 'react-native';


export default function TelaCadastro() {
  const [text, onChangeText] = useState(null);
  const [number, onChangeNumber] = useState(null);

  return (
    <SafeAreaView>
      <Text style={styles.titulo}>Nome contato</Text>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="informe o nome"
        value={text}
      />
      <Text>Telefone:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="informe o telefone"
        keyboardType="numeric"
      />

      <Text>e-mail:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="informe o email"
        keyboardType="e-mail"
      />


      <View style={styles.painelBotoes}>
        <Button
          onPress={() => {
            console.log('salvar o contato')
          }}
          title="Salvar"
          color="#841584"
          style={styles.botao}
        />

        <Button
          onPress={() => {
            console.log('cancelar o cadastro')
          }}
          title="Cancelar"
          color="#841584"
          style={styles.botao}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titulo: {
    fontSize: 32,
  },
  painelBotoes: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
  },
  botao: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 11,
  }
});
