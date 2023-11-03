import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { cadastrarEstacao } from "../../../../../firebase-config";
import Logo from "../../../components/logo/index";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const CadastrarEstacao = () => {
  const { navigate } = useNavigation();

  const goToVisualizarLinhas = () => {
    navigate("VisualizarEstacao");
  };

  const [nomeLinha, setNomeLinha] = useState("");
  const [idEstacao, setIdEstacao] = useState("");

  const cadastrarEstacaoNoFirebase = async () => {
    const cadastradoComSucesso = await cadastrarEstacao(nomeLinha, idEstacao);

    if (cadastradoComSucesso) {
      setNomeLinha("");
      setIdEstacao("");
      alert("Estação cadastrada com sucesso!");
    } else {
      alert("Ocorreu um erro ao cadastrar a estação");
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
        <Entypo name="location-pin" size={24} color="white" />
          <Text style={styles.description}>Cadastrar Estação</Text>
        </View>

        <TextInput
          placeholder="Digite o nome da linha"
          placeholderTextColor="white"
          style={styles.input}
          value={nomeLinha}
          onChangeText={(text) => setNomeLinha(text)}
        />

        <View style={styles.whiteLine} />

        <TextInput
          placeholder="Digite o ID da estação"
          placeholderTextColor="white"
          style={styles.input}
          value={idEstacao}
          onChangeText={(text) => setIdEstacao(text)}
        />

        <View style={styles.whiteLine} />

        <TouchableOpacity style={styles.button} onPress={cadastrarEstacaoNoFirebase}>
          <Text style={styles.buttonText}onPress={cadastrarEstacaoNoFirebase}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToVisualizarLinhas}>
          <Text style={styles.buttonText}>Visualizar</Text>
        </TouchableOpacity>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default CadastrarEstacao;
