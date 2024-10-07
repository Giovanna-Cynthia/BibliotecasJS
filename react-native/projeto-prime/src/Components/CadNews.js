import React, { useState } from 'react'
import {  Button, Text, StyleSheet, TextInput, View } from 'react-native'

export default function CadNews() {
    const [ nome, setNome] = useState('');
    const [ idade, setIdade ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    

    const handleSubmit = () => {
        //Validação de formulário
        if (!nome || !idade || !telefone || !email || !senha) {
            alert("Por favor, preencha todos os campos.")
            return;
        }

        //Aqui voce pode lidar com o evento dos dados
        console.log("Nome:", nome);
        console.log("Idade:", idade);
        console.log("Telefone:", telefone);
        console.log("Email:", email);
        console.log("Senha:", senha);

        setNome("");
        setEmail("");
        setSenha("");
    }

  return (
    <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder="Digite seu nome" 
        value={nome}
        onChangeText={setNome}
        />
        <TextInput style={styles.input}
        placeholder="Digite sua idade" 
        value={idade}
        onChangeText={setIdade}
        />
        <TextInput
        style={styles.input}
        placeholder="Digite seu telefone"
        value={telefone}
        onChangeText={setTelefone}
        />
        <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        />
        <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        //esconde a senha e aparece o teclado
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
        />
        <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        //esconde a senha e aparece o teclado
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
        />
        <Button title="Enviar" onPress={handleSubmit}/>
        {nome && email && senha && (
            <Text>
                Nome: {nome}, idade: {idade}, telefone: {telefone} email: {email}, senha: {senha}, confirmar: {senha}
                {/* Adicionando uma mascara para senha */}
                senha: {'*'.repeat(senha.length)}
            </Text>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8
    }
})
