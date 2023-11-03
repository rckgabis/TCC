// Importando as dependências necessárias do React e React Native
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { signOutFirebase } from "../../../../firebase-config";
import Logo from "../../components/logo/index"; // Importe o componente de logo
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

// Definindo o componente de função HomePassageiro
const Configuracoes = () => {

  const { navigate } = useNavigation();

  const goToDesenvolvedoras = () => {
    navigate("Desenvolvedoras");
  };

  const handleLogout = async () => {
    try {
      await signOutFirebase(); // Chame a função de logout do Firebase corretamente
      navigate("LoginPassageiro");
    } catch (error) {
      console.log("Erro ao fazer logout:", error);
    }
  };

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
          <EvilIcons name="gear" size={32} color="white" />
          <Text style={styles.description}>Configurações</Text>
        </View>

        {/* Espaçamento */}
        <View style={styles.space} />

        {/* Botão Deslogar */}
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <View style={styles.fieldContainer}>
            <EvilIcons name="external-link" size={30} color="white" />
            <Text style={styles.selectText}>Deslogar</Text>
          </View>
        </TouchableOpacity>

        {/* Linha branca para separação */}
        <View style={styles.whiteLine} />

        {/* Campo Situação */}
        <TouchableOpacity style={styles.button} onPress={goToDesenvolvedoras}>
          <View style={styles.fieldContainer}>
            <Ionicons name="people-outline" size={28} color="white" />
            <Text style={styles.selectText}>Desenvolvedoras</Text>
          </View>
        </TouchableOpacity>

        {/* Conteúdo vazio, possivelmente para mais elementos */}
        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default Configuracoes;
