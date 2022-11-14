import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView,
    FlatList, StatusBar, Button, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';    

import ExcluirContato from '../../componentes/ExcluirContatos';
import { listarContatos, selecionarContato } from '../../services/ContatoService';


function Contato ({ contato }) {
    const navigation = useNavigation();

    return (
        <View style={styles.contatoContainer}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Visualizacao', { ...contato});
                selecionarContato({ id: contato.id });
            }} style={[styles.contato]}>
                <Text style={styles.titulo}>{ contato?.nome }</Text>
            </TouchableOpacity>
        <ExcluirContato contato={contato}/>
        </View>
    )
    
};

function Cabecalho() {
    return (
        <View style={styles.painel}>
            <Text style={styles.titulo}>Meus contatos</Text>    
        </View>
    );
}

function Rodape() {
    const navigation = useNavigation();

    return (
        <View style={styles.painel}>  
            <Button
                onPress={() => {
                    navigation.navigate('Cadastro', { contato: null });
                }}
                title="Cadastrar"
                color="#080357"
                accessibilityLabel="Cadastrar um novo contato"
            />
        </View>
    );
}

function ListaVazia() {
    return (
        <View style={styles.painel}>
            <Text>Não tem nenhum contato cadastrado.</Text>    
            <Text>Faça o cadastro utilizando o botão "Cadastrar"</Text>
        </View>
    );
}

export default function TelaListagem() {
    const [selectedId, setSelectedId] = useState(null);

    const renderContato = ({ item: contato }) => {
        const backgroundColor = contato?.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = contato?.id === selectedId ? 'white' : 'black';
        
        return (
            <Contato 
                contato={contato}
                onPress={() => setSelectedId(contato.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }} 
            />
        );
    };
        const meusContatos = listarContatos();

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={meusContatos}
                    renderItem={renderContato}
                    keyExtractor={contato => contato.id}
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
        backgroundColor: '#CBBFBB',
      },
      contato: {
        backgroundColor: '#477998',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '80%',
      },
      titulo: {
        fontSize: 20,
      },
      contatoContainer: {
        flexDirection: 'row',
      },
      painel: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
});
