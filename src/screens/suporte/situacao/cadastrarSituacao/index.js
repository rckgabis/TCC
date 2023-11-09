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
import { cadastrarSituacao } from "../../../../../firebase-config"; // Importe a função de cadastro de situação
import Logo from "../../../components/logo/index";
import styles from "./style";

const CadastrarSituacao = () => {
  const { navigate } = useNavigation();
  

  const goToVisualizarSituacoes = () => {
    navigate("VisualizarSituacoes");
  };

  const [nomeSituacao, setNomeSituacao] = useState(""); // Nome da situação
  const [idSituacao, setIdSituacao] = useState(""); // ID da situação

  const cadastrarSituacaoNoFirebase = async () => {
    const cadastradoComSucesso = await cadastrarSituacao(nomeSituacao, idSituacao);

    if (cadastradoComSucesso) {
      setNomeSituacao("");
      setIdSituacao("");
      alert("Situação cadastrada com sucesso!");
    } else {
      alert("Ocorreu um erro ao cadastrar a situação");
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
          <Text style={styles.description}>Cadastrar Situação</Text>
        </View>

        <TextInput
          placeholder="Digite o nome da situação"
          placeholderTextColor="white"
          style={styles.input}
          value={nomeSituacao}
          onChangeText={(text) => setNomeSituacao(text)}
        />

        <View style={styles.whiteLine} />

        <TextInput
          placeholder="Digite o ID da situação"
          placeholderTextColor="white"
          style={styles.input}
          value={idSituacao}
          onChangeText={(text) => setIdSituacao(text)}
        />

        <View style={styles.whiteLine} />

        <TouchableOpacity
          style={styles.button}
          onPress={cadastrarSituacaoNoFirebase}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToVisualizarSituacoes}>
          <Text style={styles.buttonText} onPress={goToVisualizarSituacoes}>Visualizar</Text>
        </TouchableOpacity>
        <View style={styles.content}></View>

      </View>
    </ImageBackground>
  );
};

export default CadastrarSituacao;
