import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, Text, View, TextInput } from "react-native";
import { visualizarSituacoes } from "../../../../../firebase-config";

import Logo from "../../../components/logo/index";
import styles from "./style";

const VisualizarSituacao = () => {
  const [situacoes, setSituacoes] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchSituacoes = async () => {
      try {
        const situacoesData = await visualizarSituacoes();
        setSituacoes(situacoesData);
      } catch (error) {
        console.error("Erro ao obter situações:", error);
      }
    };
    fetchSituacoes();
  }, []);

  const filteredSituacoes = situacoes.filter(situacao => {
    return situacao.id.toString().includes(searchText) || situacao.nome.toLowerCase().includes(searchText.toLowerCase());
  });

  const sortedSituacoes = filteredSituacoes.slice().sort((a, b) => a.id - b.id);

  return (
    <ImageBackground
      source={require("../../../../../assets/background3.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />

        <View style={styles.iconContainer}>
          <Ionicons name="alert-circle-outline" size={24} color="white" />
          <Text style={styles.description}>Visualizar Situações</Text>
        </View>

        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Pesquisar por ID ou nome da situação"
            placeholderTextColor="white"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <Ionicons name="search" size={24} color="white" style={styles.searchIcon} />
        </View>

        <View style={styles.space} />

        <ScrollView style={styles.notificationContainer}>
          {sortedSituacoes.map((situacao) => (
            <Text key={situacao.id} style={styles.situacaoText}>
              ID: {String(situacao.id)} - Situação: {situacao.nome}
            </Text>
          ))}
        </ScrollView>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default VisualizarSituacao;
