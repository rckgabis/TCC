import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, Text, View, TextInput } from "react-native";
import { visualizarLinhas } from "../../../../../firebase-config";

import Logo from "../../../components/logo/index";
import styles from "./style";


const VisualizarLinhas = () => {
  const [linhas, setLinhas] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchLinhas = async () => {
      try {
        const linhasData = await visualizarLinhas();
        setLinhas(linhasData);
      } catch (error) {
        console.error("Erro ao obter linhas:", error);
      }
    };
    fetchLinhas();
  }, []);

  const filteredLinhas = linhas.filter(linha => {
    return linha.id.toString().includes(searchText) || linha.nome.toLowerCase().includes(searchText.toLowerCase());
  });

  // Ordenar as linhas com base no ID em ordem crescente
  filteredLinhas.sort((a, b) => a.id - b.id);

  return (
    <ImageBackground
      source={require("../../../../../assets/background3.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />

        <View style={styles.iconContainer}>
          <Ionicons name="ios-git-branch-outline" size={24} color="white" />
          <Text style={styles.description}>Visualizar Linhas</Text>
        </View>

        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Pesquisar por ID ou nome da linha"
            placeholderTextColor="white"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          {/* Ícone do lado direito da barra de pesquisa */}
          <Entypo name="magnifying-glass" size={24} color="white" style={styles.searchIcon} />
        </View>

        <View style={styles.space} />

        <ScrollView style={styles.notificationContainer}>
          {filteredLinhas.map((linha) => (
            <Text key={linha.id} style={styles.situacaoText}>
              ID: {String(linha.id)} - Nome da Linha: {linha.nome}
            </Text>
          ))}
        </ScrollView>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default VisualizarLinhas;
