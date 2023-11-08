import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View, ScrollView, TextInput } from "react-native";
import Logo from "../../components/logo";
import styles from "./style";
import { visualizarRelatoPassageiro } from "../../../../firebase-config";

const VisualizarRelatoPassageiro = () => {
  const [relatos, setRelatos] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchRelatos = async () => {
      try {
        const relatosRecuperados = await visualizarRelatoPassageiro(); 
        setRelatos(relatosRecuperados);
      } catch (error) {
        console.error("Erro ao obter relatos:", error);
      }
    };

    fetchRelatos();
  }, []);

  const filteredRelatos = relatos.filter(relato =>
    relato.linha.toLowerCase().includes(searchText.toLowerCase()) ||
    relato.estacao.toLowerCase().includes(searchText.toLowerCase()) ||
    relato.situacao.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground
      source={require("../../../../assets/background3.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />
        <View style={styles.iconContainer}>
          <Ionicons name="warning-outline" size={24} color="white" />
          <Text style={styles.description}>Visualizar Relatos dos Passageiros</Text>
        </View>
        <View style={styles.space} />

        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Pesquisar por linha, estação ou situação"
            placeholderTextColor="white"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <Ionicons name="search" size={24} color="white" style={styles.searchIcon} />
        </View>

        <ScrollView style={styles.notificationContainer}>
          {filteredRelatos.map((relato, index) => (
            <View key={index} style={styles.notificacaoItem}>
              <Text style={styles.relatosText}>
                Linha: {relato.linha}, Estação: {relato.estacao}, Situação: {relato.situacao}
              </Text>
            </View>
          ))}
        </ScrollView>
        
        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default VisualizarRelatoPassageiro;
