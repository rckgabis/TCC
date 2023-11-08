import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Text, View } from "react-native";


import Logo from "../../components/logo";
import styles from "./style";

const VisualizarRelatoPassageiro = () => {

    return (
      <ImageBackground
        source={require("../../../../assets/background3.png")}
        style={styles.background}
      >
        <View style={styles.container}>
          <Logo />
          <View style={styles.iconContainer}>
          <Ionicons name="warning-outline" size={28} color="white" />
            <Text style={styles.description}>Visualizar Relato Passageiro</Text>
          </View>
          <View style={styles.space} />

      </View>
    </ImageBackground>
  );
};

export default VisualizarRelatoPassageiro;
