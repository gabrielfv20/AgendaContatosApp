import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput,
   Button, View, Alert } from 'react-native';

import { inserirContato } from '../../services/ContatoService';  


export default function TelaCadastro({ navigation }) {
  const [nome, onChangeNome] = useState("");
  const [nomeCompleto, onChangeNomeCompleto] = useState(null);
  const [telefone, onChangeTelefone] = useState(null);
  const [email, onChangeEmail] = useState(null);

  return (
    <SafeAreaView style={styles.painel}>
      <Text style={styles.titulo}>Nome contato</Text>

      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNome}
        placeholder="informe o nome"
        value={nome}
      />

      <Text>Nome Completo</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNomeCompleto}
        placeholder="informe o nome completo"
        value={nomeCompleto}
      />

      <Text>Telefone</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTelefone}
        value={telefone}
        placeholder="informe o telefone"
        keyboardType="tel"
      />

      <Text>e-mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="informe o e-mail"
        keyboardType="email"
      />


      <View style={styles.painelBotoes}>
        <Button
          onPress={() => {
            const novoContato = {
              nome: nome,
              nomeCompleto: nomeCompleto,
              telefone: telefone,
              email: email,
            };
            if(nome.length === 0 ) {
              Alert.alert("Erro", "O nome do contato é uma informação obrigatória!");
              return;
            }
            inserirContato({ novoContato });
            navigation.navigate('Listagem');
          }}
          title="Salvar"
          color="#080357"
          style={styles.botao}
        />

        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title="Cancelar"
          color="#080357"
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  painel: {
    paddingHorizontal: 8,
    backgroundColor: '#CBBFBB',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titulo: {
    fontSize: 22,
    marginTop: 6,
    marginBottom: 10,
  },
  painelBotoes: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
  },
});
