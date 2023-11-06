import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import React, { useEffect, useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import {
  adicionarNaColecaoAvisos,
  adicionarRelato,
  verificarRelatosSemelhantes,
  visualizarEstacoes,
  visualizarLinhas,
  visualizarSituacoes,
} from "../../../../firebase-config";
import Logo from "../../components/logo";

import styles from "./style";

const HomeRelato = () => {
  const { navigate } = useNavigation();

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [linhas, setLinhas] = useState([]);
  const [estacoes, setEstacoes] = useState([]);
  const [situacoes, setSituacoes] = useState([]);

  useEffect(() => {
    const getNotificationPermission = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissões de notificação não concedidas!');
      }
    };

    getNotificationPermission();

    const fetchDataFromFirebase = async () => {
      try {
        const linhasFromFirebase = await visualizarLinhas();
        setLinhas([{ nome: "Linha" }, ...linhasFromFirebase]);
        const estacoesFromFirebase = await visualizarEstacoes();
        setEstacoes([{ nome: "Estação" }, ...estacoesFromFirebase]);
        const situacoesFromFirebase = await visualizarSituacoes();
        setSituacoes([{ nome: "Situação" }, ...situacoesFromFirebase]);

        // Agendamento da notificação após receber os dados do Firebase
        const notificationContent = {
          title: "AVISO",
          body: `Linha: ${selectedOption1} - Estação: ${selectedOption2} - Situação: ${selectedOption3}`,
          data: { data: "conteúdo" },
        };

        const trigger = new Date().getTime() + 5000;

        const result = await Notifications.scheduleNotificationAsync({
          content: notificationContent,
          trigger,
        });

      } catch (error) {
        console.error("Erro ao buscar informações do Firebase:", error);
      }
    };

    fetchDataFromFirebase();
  }, [selectedOption1, selectedOption2, selectedOption3]);

  const handleSend = async () => {
    const count = await verificarRelatosSemelhantes(selectedOption1, selectedOption2, selectedOption3);

    if (count > 1) {
      const localNotification = {
        title: 'Aviso',
        body: `Linha: ${selectedOption1} - Estação: ${selectedOption2} - Situação: ${selectedOption3}`,
        ios: { _displayInForeground: true },
        // Removendo a referência ao canal de notificação
        // android: { channelId: 'notification-channel' },
      };

      await Notifications.presentNotificationAsync(localNotification);
    }

    const relato = {
      linha: selectedOption1,
      estacao: selectedOption2,
      situacao: selectedOption3,
    };

    const relatoAdicionado = await adicionarRelato(relato);

    if (relatoAdicionado) {
      navigate("Feedback");
    } else {
      console.error("Erro ao adicionar o relato no Firebase");
    }
  };

  return (
    <ImageBackground
      source={require("../../../../assets/background1.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />
      </View>

      <View style={styles.iconContainer}>
        <Ionicons name="warning-outline" size={24} color="white" />
        <Text style={styles.description}>Relatar Problema</Text>
      </View>

      <View style={styles.pair}>
        <Picker
          selectedValue={selectedOption1}
          onValueChange={(itemValue) => setSelectedOption1(itemValue)}
          style={{ color: "white", marginBottom: 20 }}
        >
          {linhas.map((linha, index) => (
            <Picker.Item key={index} label={linha.nome} value={linha.nome} />
          ))}
        </Picker>

        <Picker
          selectedValue={selectedOption2}
          onValueChange={(itemValue) => setSelectedOption2(itemValue)}
          style={{ color: "white", marginBottom: 20 }}
        >
          {estacoes.map((estacao, index) => (
            <Picker.Item
              key={index}
              label={estacao.nome}
              value={estacao.nome}
            />
          ))}
        </Picker>

        <Picker
          selectedValue={selectedOption3}
          onValueChange={(itemValue) => setSelectedOption3(itemValue)}
          style={{ color: "white" }}
        >
          {situacoes.map((situacao, index) => (
            <Picker.Item
              key={index}
              label={situacao.nome}
              value={situacao.nome}
            />
          ))}
        </Picker>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeRelato;
