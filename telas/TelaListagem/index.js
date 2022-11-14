import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, StatusBar, Button, View, Alert } from 'react-native';

import meusContatos from '../../dados';

const Item = ({ title }) => (
    <View style={styles.itemContainer}>
    <TouchableOpacity onPress={(() => {
            console.log('clicou no contato chamado ', title.nome)
    })} style={[styles.item]}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {
        Alert.alert('Confirmação', 'Tem certeza que deseja excluir este contato?')
    }}>
        <Text>X</Text>
    </TouchableOpacity>
    </View>
    
);

function Cabecalho() {
    return (
        <>
            <Text>Meus contatos</Text>    
        </>
    );
}

function Rodape() {
    return (
        <>
            <Text>Esses são todos os contatos</Text>    
            <Button
                onPress={() => {
                    console.log('abrir tela de cadastro')
                }}
                title="Cadastrar"
                color="#841584"
                accessibilityLabel="Cadastrar um novo contato"
            />
        </>
    );
}

function ListaVazia() {
    return (
        <>
            <Text>Não temos contatos cadastrados</Text>    
        </>
    );
}

export default function TelaListagem() {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';
        
        return (
            <Item 
                title={item.nome}
                onPress={() => setSelectedId(item.nome)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }} 
            />
            );
        };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={meusContatos}
        renderItem={renderItem}
        keyExtractor={contato => contato.nome}
        ListHeaderComponent={Cabecalho}
        ListFooterComponent={Rodape}
        ListEmptyComponent={ListaVazia}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '80%',
      },
      title: {
        fontSize: 32,
      },
      itemContainer: {
        flexDirection: 'row',
      }
});
