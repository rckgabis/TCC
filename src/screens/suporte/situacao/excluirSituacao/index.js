import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { excluirSituacao } from "../../../../../firebase-config"; // Importar a função de exclusão de situação
import Logo from "../../../components/logo/index";
import styles from "./style";

const ExcluirSituacao = () => {
  const { navigate } = useNavigation();
  const [idSituacao, setIdSituacao] = useState(""); // ID da situação a ser excluída

  const goToVisualizarSituacoes = () => {
    navigate("VisualizarSituacoes");
  };

  const excluirSituacaoNoFirebase = async () => {
    const excluidoComSucesso = await excluirSituacao(idSituacao);

    if (excluidoComSucesso) {
      setIdSituacao(""); // Limpa o ID da situação
      alert("Situação excluída com sucesso!");
    } else {
      alert("Ocorreu um erro ao excluir a situação");
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
        <Ionicons name="alert-circle-outline" size={24} color="white" />
          <Text style={styles.description}>Excluir Situação</Text>
        </View>

        {/* Campo de entrada para o ID da situação a ser excluída */}
        <TextInput
          placeholder="Digite o ID da situação"
          placeholderTextColor="white"
          style={styles.input}
          value={idSituacao}
          onChangeText={(text) => setIdSituacao(text)}
        />

        <View style={styles.whiteLine} />

        <TouchableOpacity style={styles.button} onPress={excluirSituacaoNoFirebase}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToVisualizarSituacoes}>
          <Text style={styles.buttonText}>Visualizar</Text>
        </TouchableOpacity>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default ExcluirSituacao;
