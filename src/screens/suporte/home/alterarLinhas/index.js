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
import { alterarLinha } from "../../../../../firebase-config";
import Logo from "../../../components/logo/index";
import styles from "./style";

const AlterarLinhas = () => {
  const { navigate } = useNavigation();
  const [nomeLinha, setNomeLinha] = useState("");
  const [idLinha, setIdLinha] = useState(""); // ID da linha a ser alterada

  const goToVisualizarLinhas = () => {
    navigate("VisualizarLinhas");
  };

  const alterarLinhaNoFirebase = async () => {
    if (idLinha && nomeLinha) {
      // Verifica se ambos o ID e o nome da linha estão preenchidos
      const alteradoComSucesso = await alterarLinha(idLinha, nomeLinha);

      if (alteradoComSucesso) {
        setNomeLinha(""); // Limpa o campo após a alteração
        setIdLinha(""); // Limpa o ID da linha
        alert("Linha alterada com sucesso!");
      } else {
        alert("Ocorreu um erro ao alterar a linha");
      }
    } else {
      alert(
        "Por favor, preencha o ID e o novo nome da linha para efetuar a alteração."
      );
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
          <Text style={styles.description}>Alterar Linhas</Text>
        </View>

        {/* Campo de entrada para o ID da linha a ser alterada */}
        <TextInput
          placeholder="Digite o ID da linha"
          placeholderTextColor="white"
          style={styles.input}
          value={idLinha}
          onChangeText={(text) => setIdLinha(text)}
        />

        <View style={styles.whiteLine} />

        {/* Campo de entrada para o novo nome da linha */}
        <TextInput
          placeholder="Digite o novo nome da linha"
          placeholderTextColor="white"
          style={styles.input}
          value={nomeLinha}
          onChangeText={(text) => setNomeLinha(text)}
        />

        <View style={styles.whiteLine} />

        <TouchableOpacity
          style={styles.button}
          onPress={alterarLinhaNoFirebase}
        >
          <Text style={styles.buttonText}>Alterar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToVisualizarLinhas}>
          <Text style={styles.buttonText}>Visualizar</Text>
        </TouchableOpacity>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default AlterarLinhas;
