import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Texto() {
    const [texto, setTexto] = useState('Texto do novo componente')

    useEffect(() => {
        setTexto("Outro texto");
    }, []);

  return (
    <Text style={estilos.texto}>{texto}</Text>
    
  )
}

const estilos = StyleSheet.create({
    texto: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 8,
        textAlign: "center"
    }
});