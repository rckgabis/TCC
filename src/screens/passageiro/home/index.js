import { Entypo, Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import React, { useEffect, useState } from "react";
import {
  BackHandler,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  adicionarNaColecaoNotificacoes,
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
  const [estacoesPorLinha, setEstacoesPorLinha] = useState([]); 

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true; // Impede o comportamento padrão de voltar
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => {
        backHandler.remove();
      };
    }, [])
  );

  useEffect(() => {
    const getNotificationPermission = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Permissões de notificação não concedidas!");
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
      } catch (error) {
        console.error("Erro ao buscar informações do Firebase:", error);
      }
    };

    fetchDataFromFirebase();
  }, []);

  useEffect(() => {
    if (selectedOption1 !== "Linha") {
      const estacoesFiltradas = estacoes.filter(
        (estacao) => estacao.nomeLinha === selectedOption1
      );
      setEstacoesPorLinha(estacoesFiltradas);
    }
  }, [selectedOption1, estacoes]);

  const handleSend = async () => {
    const count = await verificarRelatosSemelhantes(
      selectedOption1,
      selectedOption2,
      selectedOption3
    );

    const relato = {
      linha: selectedOption1,
      estacao: selectedOption2,
      situacao: selectedOption3,
    };

    if (!selectedOption1 || !selectedOption2 || !selectedOption3) {
      console.error("Por favor, selecione Linha, Estação e Situação antes de enviar.");
      return;
    }

    if (count > 1) {
      const handleNotification = () => {
        Notifications.setNotificationHandler({
          handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: true,
            shouldSetBadge: false,
          }),
        });
      };

      handleNotification();

      const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Aviso",
          body: `Linha: ${selectedOption1} - Estação: ${selectedOption2} - Situação: ${selectedOption3}`,
          ios: { _displayInForeground: true },
        },
        trigger: null,
      });

      if (notificationId !== null) {
        const notificacaoAdicionado = await adicionarNaColecaoNotificacoes({
          linha: selectedOption1,
          estacao: selectedOption2,
          situacao: selectedOption3,
        });

        if (notificacaoAdicionado) {
          navigate("Feedback");
        } else {
          console.error("Erro ao adicionar aviso na coleção notificação");
        }
      } else {
        console.error("Erro ao enviar notificação");
      }
    }

    const relatoAdicionado = await adicionarRelato(relato);

    if (relatoAdicionado) {
      navigate("Feedback");
    } else {
      console.error("Erro ao adicionar o relato na coleção Relatos");
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
      <View style={styles.pickerContainer}>
        <Ionicons
          name="ios-git-branch-outline"
          size={24}
          color="white"
          style={styles.iconStyle}
        />
        <Picker
          selectedValue={selectedOption1}
          onValueChange={(itemValue) => setSelectedOption1(itemValue)}
          style={styles.pickerStyle}
          dropdownIconColor="white"
        >
          {linhas.map((linha, index) => (
            <Picker.Item key={index} label={linha.nome} value={linha.nome} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
  <Entypo
    name="location-pin"
    size={26}
    color="white"
    style={styles.iconStyle}
  />
  <Picker
    selectedValue={selectedOption2}
    onValueChange={(itemValue) => setSelectedOption2(itemValue)}
    style={styles.pickerStyle}
    dropdownIconColor="white"
  >
    {/* Item vazio como placeholder */}
    <Picker.Item label="Estação" value="" />

    {/* Opções das estações filtradas pela linha */}
    {estacoesPorLinha.map((estacao, index) => (
      <Picker.Item
        key={index}
        label={estacao.nome}
        value={estacao.nome}
      />
    ))}
  </Picker>
</View>

        <View style={styles.pickerContainer}>
          <Ionicons
            name="alert-circle-outline"
            size={24}
            color="white"
            style={styles.iconStyle}
          />
          <Picker
            selectedValue={selectedOption3}
            onValueChange={(itemValue) => setSelectedOption3(itemValue)}
            style={styles.pickerStyle}
            dropdownIconColor="white"
          >
            {situacoes.map((situacao, index) => (
              <Picker.Item
                key={index}
                label={situacao.nome}
                value={situacao.nome}
              />
            ))}
          </Picker>
        </View>

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
