import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../components/logo/index";
import styles from "../configuracoes/style";
import { signOutFirebase } from "../../../../firebase-config";

const ConfiguracoesSuporte = () => {
  const { navigate } = useNavigation();

  const goToDesenvolvedoras = () => {
    navigate("DesenvolvedorasSuporte");
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
    <ImageBackground
      source={require("../../../../assets/background3.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />
        <View style={styles.iconContainer}>
          <EvilIcons name="gear" size={32} color="white" />
          <Text style={styles.description}>Configurações</Text>
        </View>

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

        <TouchableOpacity style={styles.button} onPress={goToDesenvolvedoras}>
          <View style={styles.fieldContainer}>
            <Ionicons name="people-outline" size={28} color="white" />
            <Text style={styles.selectText}>Desenvolvedoras</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default ConfiguracoesSuporte;
