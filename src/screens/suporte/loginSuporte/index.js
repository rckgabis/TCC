import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Animated,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  auth,
  signInWithEmailAndPassword,
} from "../../../../firebase-config.js";
import styles from "../loginSuporte/style";

const adminEmail = "onrailstcc@gmail.com";

const LoginSuporte = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [iconSize] = useState(new Animated.Value(200)); // Defina o tamanho inicial do ícone

  const { navigate } = useNavigation();

  const handleFocus = () => {
    // Animação para diminuir o tamanho do ícone quando o campo de entrada está focado
    Animated.timing(iconSize, {
      toValue: 150, // Tamanho menor desejado
      duration: 200, // Duração da animação em milissegundos
      useNativeDriver: false, // Não use o driver nativo para animações de tamanho
    }).start();
  };

  const handleBlur = () => {
    // Animação para voltar ao tamanho normal quando o campo de entrada perde o foco
    Animated.timing(iconSize, {
      toValue: 200, // Tamanho normal
      duration: 200, // Duração da animação em milissegundos
      useNativeDriver: false,
      // Não use o driver nativo para animações de tamanho
    }).start();
  };

  const handleLogin = async () => {
    try {
      if (email.toLowerCase() !== adminEmail.toLowerCase()) {
        // Verifica se o email não é o email de admin
        Alert.alert(
          "Erro",
          "Apenas administradores podem fazer login.",
          [
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            },
          ],
          { cancelable: false }
        );
        return; // Não realiza o login se não for o email do admin
      }

      // Realiza o login se for o email do admin
      await signInWithEmailAndPassword(auth, email, password);
      navigate("Linhas");
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
      source={require("../../../../assets/background2.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Animated.Image
          source={require("../../../../assets/logo1.png")}
          style={[styles.logo, { width: iconSize, height: iconSize }]}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o email"
            onChangeText={setEmail}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite a senha"
            onChangeText={setPassword}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
            navigate("LoginPassageiro");
          }}
        >
          <Text style={styles.supportButtonText}>
            Voltar ao login de passageiro
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginSuporte;
