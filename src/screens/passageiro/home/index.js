import { Picker } from "@react-native-picker/picker";
import React, { useState, useEffect } from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { visualizarLinhas, visualizarEstacoes, visualizarSituacoes } from "../../../../firebase-config"; 
import Logo from "../../components/logo";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";

const HomeRelato = () => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [linhas, setLinhas] = useState([]);
  const [estacoes, setEstacoes] = useState([]);
  const [situacoes, setSituacoes] = useState([]);

  useEffect(() => {
    const fetchLinhas = async () => {
      try {
        const linhasFromFirebase = await visualizarLinhas();
        setLinhas([{ nome: 'Linha' }, ...linhasFromFirebase]); // Adiciona um item placeholder no início do array
      } catch (error) {
        console.error("Erro ao buscar as linhas do Firebase:", error);
      }
    };

    const fetchEstacoes = async () => {
      try {
        const estacoesFromFirebase = await visualizarEstacoes();
        setEstacoes([{ nome: 'Estação' }, ...estacoesFromFirebase]); // Adiciona um item placeholder no início do array
      } catch (error) {
        console.error("Erro ao buscar as estações do Firebase:", error);
      }
    };

    const fetchSituacoes = async () => {
      try {
        const situacoesFromFirebase = await visualizarSituacoes();
        setSituacoes([{ nome: 'Situação' }, ...situacoesFromFirebase]); // Adiciona um item placeholder no início do array
      } catch (error) {
        console.error("Erro ao buscar as situações do Firebase:", error);
      }
    };

    fetchLinhas();
    fetchEstacoes();
    fetchSituacoes();
  }, []);

  return (
    <ImageBackground
      source={require("../../../../assets/background1.png")}
      style={styles.background}
    >
        <View style={styles.container}>
        {/* Usando o componente de logo */}
        <Logo />
        </View>

        <View style={styles.iconContainer}>
          <Ionicons name="warning-outline" size={24} color="white" />
          <Text style={styles.description}>Relatar Problema</Text>
        </View>

      <View style={styles.pair}>
        {/* Primeiro Picker */}
        <Picker
          selectedValue={selectedOption1}
          onValueChange={(itemValue) => setSelectedOption1(itemValue)}
          style={{ color: 'white', marginBottom: 20 }}
        >
          {linhas.map((linha, index) => (
            <Picker.Item key={index} label={linha.nome} value={linha.nome} />
          ))}
        </Picker>

        {/* Segundo Picker */}
        <Picker
          selectedValue={selectedOption2}
          onValueChange={(itemValue) => setSelectedOption2(itemValue)}
          style={{ color: 'white', marginBottom: 20 }}
        >
          {estacoes.map((estacao, index) => (
            <Picker.Item key={index} label={estacao.nome} value={estacao.nome} />
          ))}
        </Picker>

        {/* Terceiro Picker */}
        <Picker
          selectedValue={selectedOption3}
          onValueChange={(itemValue) => setSelectedOption3(itemValue)}
          style={{ color: 'white' }}
        >
          {situacoes.map((situacao, index) => (
            <Picker.Item key={index} label={situacao.nome} value={situacao.nome} />
          ))}
        </Picker>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
};


export default HomeRelato;








