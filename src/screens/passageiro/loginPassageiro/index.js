import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import {
  auth,
  signInWithEmailAndPassword,
} from "../../../../firebase-config.js";

import styles from "../loginPassageiro/style";

const LoginPassageiro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { navigate } = useNavigation();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("HomeRelato");
    } catch (error) {
      // Lide com os erros aqui, exibindo uma mensagem de erro usando Alert.alert
      console.error(error);

      Alert.alert(
        "Erro",
        "Falha no login. Verifique suas credenciais.",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <ImageBackground
      source={require("../../../../assets/background5.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require("../../../../assets/logo1.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o email"
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite a senha"
            onChangeText={setPassword}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.supportButton}
          activeOpacity={0.2}
          onPress={() => {
            navigate("LoginSuporte");
          }}
        >
          <Text style={styles.supportButtonText}>Entrar como suporte</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginPassageiro;
