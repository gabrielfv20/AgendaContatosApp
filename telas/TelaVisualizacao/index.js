import React from "react";
import { StyleSheet, Text, SafeAreaView, Button, View } from "react-native";

import ExcluirContato from "../../componentes/ExcluirContatos";


export default function TelaVisualizacao({ route, navigation}) {
    const { id, nome, nomeCompleto, telefone, email } = route.params;
    const contato = { id, nome, nomeCompleto, telefone, email };
    
    return (
        <SafeAreaView style={styles.painelPrincipal}>
            <Text style={styles.titulo}>{ nome }</Text>
            <Text style={styles.rotulo}>Nome completo:</Text>
            <Text style={styles.campo}>{ nomeCompleto ? nomeCompleto : '--- não informado ---'}</Text>
            <Text style={styles.rotulo}>Telefone:</Text>
            <Text style={styles.campo}>{ telefone }</Text>
            <Text style={styles.rotulo}>e-mail</Text>
            <Text style={styles.campo}>{ email }</Text>
            <View style={styles.painelBotoes}>
                <Button 
                    onPress={() => {
                        navigation.goBack();
                    }}
                    title="Voltar"
                    color="#080357"
                    style={styles.botao}
                />
                <ExcluirContato contato={contato} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    painelPrincipal: {
        paddingHorizontal: 10,
        backgroundColor: '#CBBFBB',
    },
    titulo: {
        fontSize: 32,
    },
    rotulo: {
        color: 'grey',
        paddingTop: 10,
    },
    campo: {
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: 'grey',
        paddingVertical: 10,
        paddingHorizontal: 6,
    },
    painelBotoes: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
});