import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { excluirEstacao } from "../../../../../firebase-config"; // Importar a função de exclusão de estação
import Logo from "../../../components/logo/index";
import styles from "./style";

const ExcluirEstacoes = () => {
  const { navigate } = useNavigation();
  const [idEstacao, setIdEstacao] = useState(""); // ID da estação a ser excluída

  const goToVisualizarEstacoes = () => {
    navigate("VisualizarEstacoes");
  };

  const excluirEstacaoNoFirebase = async () => {
    const excluidoComSucesso = await excluirEstacao(idEstacao);

    if (excluidoComSucesso) {
      setIdEstacao(""); // Limpa o ID da estação
      alert("Estação excluída com sucesso!");
    } else {
      alert("Ocorreu um erro ao excluir a estação");
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
          <Text style={styles.description}>Excluir Estações</Text>
        </View>

        {/* Campo de entrada para o ID da estação a ser excluída */}
        <TextInput
          placeholder="Digite o ID da estação"
          placeholderTextColor="white"
          style={styles.input}
          value={idEstacao}
          onChangeText={(text) => setIdEstacao(text)}
        />

        <View style={styles.whiteLine} />

        <TouchableOpacity
          style={styles.button}
          onPress={excluirEstacaoNoFirebase}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToVisualizarEstacoes}>
          <Text style={styles.buttonText}onPress={goToVisualizarEstacoes}>Visualizar</Text>
        </TouchableOpacity>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default ExcluirEstacoes;
