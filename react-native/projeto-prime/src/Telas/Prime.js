import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function Prime() {
  return (
    <>
    <View style={estilos.topo}>
    <Text style={estilos.titleTopo}>Detalhes do Sistema</Text>
    </View>

    <View style={estilos.listaDescricao}>
        <Text style={estilos.nomeLista}>Lista de Compras</Text>
    </View>

    <View>
    <Text style={estilos.descricao}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Text>
    <Text style={estilos.preco}>
        R$ 40,00
    </Text>
    </View>
    </>
    
  )
}


const estilos = StyleSheet.create({
    topo: {
        width:"100%",
        height:150,
        backgroundColor: "blue"
    },
    titleTopo: {
        width: "100%",
        textAlign: "center",
        paddingTop: 60,
        fontSize: 30,
        color: "white",
        fontWeight:"bold"
    },
    listaDescricao: {
        paddingTop: 20,
        fontSize: 28,
        marginLeft:20
    },
    nomeLista: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center",
        color: "green"
    }, 
    descricao: {
        paddingTop: 20,
        color: "000088B",
        marginLeft: 20,
        fontSize: 18,
        lineHeight: 26,
        textAlign:"center"
    },
    preco: {
        color: "green",
        fontWeight: "bold",
        fontSize: 26,
        marginTop: 8,
        textAlign: "center",
        marginTop: 20
    },
})

