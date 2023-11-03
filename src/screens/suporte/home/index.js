import { Ionicons } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  BackHandler,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../../components/logo/index";
import styles from "./style";

const Linhas = () => {
  const { navigate } = useNavigation();
  const isFocused = useIsFocused();

  const goToVisualizarLinhas = () => {
    navigate("VisualizarLinhas");
  };

  const goToCadastrarLinhas = () => {
    navigate("CadastrarLinhas");
  };

  const goToAlterarLinhas = () => {
    navigate("AlterarLinhas");
  };

  const goToExcluirLinhas = () => {
    navigate("ExcluirLinhas");
  };

  useEffect(() => {
    const onBackPress = () => {
      if (isFocused) {
        return true; // Impede o comportamento padrão de voltar
      }
      return false; // Permite o comportamento padrão de voltar
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress
    );

    return () => {
      backHandler.remove();
    };
  }, [isFocused]);

  return (
    <ImageBackground
      source={require("../../../../assets/background3.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />

        <View style={styles.iconContainer}>
          <Ionicons name="ios-git-branch-outline" size={24} color="white" />
          <Text style={styles.description}>Linhas</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={goToCadastrarLinhas}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={goToAlterarLinhas}>
            <Text style={styles.buttonText}>Alterar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={goToExcluirLinhas}>
            <Text style={styles.buttonText}>Excluir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={goToVisualizarLinhas}
          >
            <Text style={styles.buttonText}>Visualizar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default Linhas;
