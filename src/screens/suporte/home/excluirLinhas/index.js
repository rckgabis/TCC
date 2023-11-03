import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { excluirLinha } from "../../../../../firebase-config";
import Logo from "../../../components/logo/index";
import styles from "./style";

const ExcluirLinhas = () => {
  const { navigate } = useNavigation();
  const [idLinha, setIdLinha] = useState(""); // ID da linha a ser excluída

  const goToVisualizarLinhas = () => {
    navigate("VisualizarLinhas");
  };

  const excluirLinhaNoFirebase = async () => {
    const excluidoComSucesso = await excluirLinha(idLinha);

    if (excluidoComSucesso) {
      setIdLinha(""); // Limpa o ID da linha
      alert("Linha excluída com sucesso!");
    } else {
      alert("Ocorreu um erro ao excluir a linha");
    }
  };

  return (
    <ImageBackground
      source={require("../../../../../assets/background3.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />

        <View style={styles.iconContainer}>
          <Ionicons name="ios-git-branch-outline" size={24} color="white" />
          <Text style={styles.description}>Excluir Linhas</Text>
        </View>

        {/* Campo de entrada para o ID da linha a ser excluída */}
        <TextInput
          placeholder="Digite o ID da linha a ser excluída"
          placeholderTextColor="white"
          style={styles.input}
          value={idLinha}
          onChangeText={(text) => setIdLinha(text)}
        />

        <View style={styles.whiteLine} />

        <TouchableOpacity
          style={styles.button}
          onPress={excluirLinhaNoFirebase}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToVisualizarLinhas}>
          <Text style={styles.buttonText}>Visualizar</Text>
        </TouchableOpacity>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default ExcluirLinhas;
