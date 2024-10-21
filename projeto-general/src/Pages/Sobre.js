import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

export default function Sobre() {
  const [contatos, setContatos] = useState([])

  // Funcao para buscar contatos do sevidor
  const listContatos = () => {
    axios
      .get('http://10.0.2.2:3000/contatos')
      .then((resposta) => {
        setContatos(resposta.data)
      })
      .catch((error) => {
      console.error("Erro ao buscar contatos", error)
      })
  }
  // Use o useEffect para buscar dados
  useEffect(() => {
    listContatos();
  }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Lista de Contatos</Text>
        {contatos.length > 0 ? (
          contatos.map((contato, index) => (
            <View key={index} style={styles.contatoItem}>
              <Text>{contato.pergunta}</Text>
              <Text>{contato.resposta}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noContacts}>Nenhum contato disponivel</Text>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contatoItem:{
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  noContacts: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 20
  }
})