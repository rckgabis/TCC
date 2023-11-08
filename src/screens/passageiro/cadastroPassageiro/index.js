import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Animated,
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createUserWithEmailAndPassword } from "../../../../firebase-config.js";
import styles from "../loginPassageiro/style";

const CadastroPassageiro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailIconSize] = useState(new Animated.Value(200));
  const [passwordIconSize] = useState(new Animated.Value(200));
  const [confirmPasswordIconSize] = useState(new Animated.Value(200));

  const { navigate } = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        animateIcon(emailIconSize, 110);
        animateIcon(passwordIconSize, 110);
        animateIcon(confirmPasswordIconSize, 110);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        animateIcon(emailIconSize, 200);
        animateIcon(passwordIconSize, 200);
        animateIcon(confirmPasswordIconSize, 200);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [emailIconSize, passwordIconSize, confirmPasswordIconSize]);

  const animateIcon = (icon, size) => {
    Animated.timing(icon, {
      toValue: size,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleCadastro = async () => {
    try {
      if (!emailIsValid(email)) {
        Alert.alert("Erro", "Insira um email válido");
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert("Erro", "As senhas não coincidem. Tente novamente");
        return;
      }

      if (password.length < 8) {
        Alert.alert("Erro", "A senha deve ter no mínimo 8 caracteres");
        return;
      }

      await createUserWithEmailAndPassword(email, password);
      Alert.alert("Sucesso", "Conta cadastrada com sucesso");
      navigate("LoginPassageiro");
    } catch (error) {
      console.error(error);

      if (error.code === "auth/email-already-in-use") {
        Alert.alert(
          "Erro",
          "Este email já está cadastrado. Tente fazer login."
        );
      } else {
        Alert.alert("Erro", "Falha ao cadastrar. Verifique suas credenciais.");
      }
    }
  };

  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <ImageBackground
      source={require("../../../../assets/background10.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Animated.Image
          source={require("../../../../assets/logo1.png")}
          style={[styles.logo, { width: emailIconSize, height: emailIconSize }]}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite um email existente"
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Crie uma senha com mais de 8 caracteres"
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Confirmar Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite a senha novamente"
            onChangeText={setConfirmPassword}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleCadastro}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.supportButton}
          activeOpacity={0.2}
          onPress={() => {
            navigate("LoginPassageiro");
          }}
        >
          <Text style={styles.supportButtonText}>Voltar para Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default CadastroPassageiro;
