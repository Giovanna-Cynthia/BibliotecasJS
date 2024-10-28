import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

export default function Fac() {
  const [fac, setfac] = useState([])

  // Funcao para buscar contatos do sevidor
  const cardFac = () => {
    axios
      .get('http://10.0.2.2:3000/fac')
      .then((resposta) => {
        setfac(resposta.data)
      })
      .catch((error) => {
      console.error("Erro ao buscar contatos", error)
      })
  }
  // Use o useEffect para buscar dados
  useEffect(() => {
    cardFac();
  }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Perguntas Frequentes</Text>
        {fac.length > 0 ? (
          fac.map((fac, index) => (
            <View key={index} style={styles.contatoItem}>
              <Text>{fac.pergunta}</Text>
              <Text>{fac.resposta}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noFacs}>Nenhuma pergunta feita até agora.</Text>
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
