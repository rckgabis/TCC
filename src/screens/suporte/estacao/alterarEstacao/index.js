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
import { alterarEstacao } from "../../../../../firebase-config"; // Importar a função de alterar estação
import Logo from "../../../components/logo/index";
import styles from "./style";

const AlterarEstacoes = () => {
  const { navigate } = useNavigation();
  const [nomeEstacao, setNomeEstacao] = useState("");
  const [idEstacao, setIdEstacao] = useState(""); // ID da estação a ser alterada

  const goToVisualizarEstacoes = () => {
    navigate("VisualizarEstacoes");
  };

  const alterarEstacaoNoFirebase = async () => {
    const alteradoComSucesso = await alterarEstacao(idEstacao, nomeEstacao);

    if (alteradoComSucesso) {
      setNomeEstacao(""); // Limpa o campo após a alteração
      setIdEstacao(""); // Limpa o ID da estação
      alert("Estação alterada com sucesso!");
    } else {
      alert("Ocorreu um erro ao alterar a estação");
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
          <Text style={styles.description}>Alterar Estações</Text>
        </View>

        {/* Campo de entrada para o ID da estação a ser alterada */}
        <TextInput
          placeholder="Digite o ID da estação"
          placeholderTextColor="white"
          style={styles.input}
          value={idEstacao}
          onChangeText={(text) => setIdEstacao(text)}
        />

        <View style={styles.whiteLine} />

        {/* Campo de entrada para o novo nome da estação */}
        <TextInput
          placeholder="Digite o novo nome da estação"
          placeholderTextColor="white"
          style={styles.input}
          value={nomeEstacao}
          onChangeText={(text) => setNomeEstacao(text)}
        />

        <View style={styles.whiteLine} />

        <TouchableOpacity
          style={styles.button}
          onPress={alterarEstacaoNoFirebase}
        >
          <Text style={styles.buttonText}>Alterar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToVisualizarEstacoes}>
          <Text style={styles.buttonText}>Visualizar</Text>
        </TouchableOpacity>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default AlterarEstacoes;
