import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, Text, View, TextInput } from "react-native";
import { visualizarEstacoes } from "../../../../../firebase-config";

import Logo from "../../../components/logo/index";
import styles from "./style";

const VisualizarEstacoes = () => {
  const [estacoes, setEstacoes] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchEstacoes = async () => {
      try {
        const estacoesData = await visualizarEstacoes();
        setEstacoes(estacoesData);
      } catch (error) {
        console.error("Erro ao obter estações:", error);
      }
    };
    fetchEstacoes();
  }, []);

  const filteredEstacoes = estacoes.filter(estacao => {
    return estacao.id.toString().includes(searchText) || estacao.nome.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <ImageBackground
      source={require("../../../../../assets/background3.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />

        <View style={styles.iconContainer}>
          <Entypo name="location-pin" size={24} color="white" />
          <Text style={styles.description}>Visualizar Estações</Text>
        </View>

        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Pesquisar por ID ou nome da estação"
            placeholderTextColor="white"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <Entypo name="magnifying-glass" size={24} color="white" style={styles.searchIcon} />
        </View>

        <View style={styles.space} />

        <ScrollView style={styles.notificationContainer}>
          {filteredEstacoes.map((estacao) => (
            <Text key={estacao.id} style={styles.situacaoText}>
              ID: {String(estacao.id)} - Nome da Estação: {estacao.nome}
            </Text>
          ))}
        </ScrollView>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default VisualizarEstacoes;
