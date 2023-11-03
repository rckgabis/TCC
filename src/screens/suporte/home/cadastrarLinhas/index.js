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
import { cadastrarLinha } from "../../../../../firebase-config";
import Logo from "../../../components/logo/index";
import styles from "./style";

const CadastrarLinhas = () => {
  const { navigate } = useNavigation();

  const goToVisualizarLinhas = () => {
    navigate("VisualizarLinhas");
  };

  const [nomeLinha, setNomeLinha] = useState("");
  const [idLinha, setIdLinha] = useState(""); // Novo estado para o ID da linha

  const cadastrarLinhaNoFirebase = async () => {
    const cadastradoComSucesso = await cadastrarLinha(nomeLinha, idLinha); // Passar o ID e o nome para a função

    if (cadastradoComSucesso) {
      setNomeLinha("");
      setIdLinha(""); // Limpar os campos após o cadastro
      alert("Linha cadastrada com sucesso!");
    } else {
      alert("Ocorreu um erro ao cadastrar a linha");
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
          <Text style={styles.description}>Cadastrar Linhas</Text>
        </View>

        {/* Campo de entrada para o ID */}
        <TextInput
          placeholder="Digite o ID da linha"
          placeholderTextColor="white"
          style={styles.input}
          value={idLinha}
          onChangeText={(text) => setIdLinha(text)}
        />
        <View style={styles.whiteLine} />
        {/* Campo de entrada para o nome da linha */}
        <TextInput
          placeholder="Digite o nome da linha"
          placeholderTextColor="white"
          style={styles.input}
          value={nomeLinha}
          onChangeText={(text) => setNomeLinha(text)}
        />

        <View style={styles.whiteLine} />

        <TouchableOpacity
          style={styles.button}
          onPress={cadastrarLinhaNoFirebase}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToVisualizarLinhas}>
          <Text style={styles.buttonText}>Visualizar</Text>
        </TouchableOpacity>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default CadastrarLinhas;
