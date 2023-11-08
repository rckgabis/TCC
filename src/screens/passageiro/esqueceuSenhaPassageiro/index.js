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

import { handleResetPassword } from "../../../../firebase-config";

import styles from "../loginPassageiro/style";

const EsqueceuSenha = () => {
  const { navigate } = useNavigation();

  const [email, setEmail] = useState('');

  const handleReset = async () => {
    try {
      await handleResetPassword(email);
      Alert.alert("Email enviado", "Verifique sua caixa de entrada para redefinir sua senha.");
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao enviar o email de recuperação de senha.");
      console.error("Erro ao enviar email:", error);
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
            placeholder="Digite o email para recuperar a senha."
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleReset}
        >
          <Text style={styles.buttonText}>Recuperar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.supportButton}
          activeOpacity={0.2}
          onPress={() => {
            navigate("LoginPassageiro");
          }}
        >
          <Text style={styles.supportButtonText}>Voltar para login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default EsqueceuSenha;
