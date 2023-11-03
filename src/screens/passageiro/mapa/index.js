// Importando as dependências necessárias do React e React Native
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Logo from "../../components/logo/index"; // Importe o componente de logo
import styles from "./style";
import ImageZoomComponent from "./zoom";

// Definindo o componente de função HomePassageiro
const Mapa = () => {
  return (
    // Definindo um plano de fundo de imagem usando ImageBackground
    <ImageBackground
      source={require("../../../../assets/background1.png")}
      style={styles.background}
    >
      {/* Container principal do componente */}
      <View style={styles.container}>
        {/* Usando o componente de logo */}
        <Logo />

        {/* Exibindo um texto de descrição */}
        <View style={styles.iconContainer}>
          <Ionicons name="map-outline" size={24} color="white" />
          <Text style={styles.description}>Mapa</Text>
        </View>

        {/* Espaçamento */}
        <View style={styles.space} />

        {/* Campo Linha */}

        {/* Componente de imagem com zoom */}
        <ImageZoomComponent
          imageSource={require("../../../../assets/mapa.jpg")}
        />

        {/* Conteúdo vazio, possivelmente para mais elementos */}
        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

// Exportando o componente HomePassageiro para uso em outros lugares
export default Mapa;
