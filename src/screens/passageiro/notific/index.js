// Importando as dependências necessárias do React e React Native
import { EvilIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { visualizarNotificacoes } from "../../../../firebase-config";
import Logo from "../../components/logo/index";
import styles from "./style";

// Definindo o componente de função HomePassageiro
const Notificacao = () => {
  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(() => {
    // Ao montar o componente, busca as notificações
    const fetchData = async () => {
      const notificacoesData = await visualizarNotificacoes();
      setNotificacoes(notificacoesData);
    };
    fetchData();
  }, []);

  return (
    <ImageBackground
      source={require("../../../../assets/background1.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />

        <View style={styles.iconContainer}>
          <EvilIcons name="bell" size={32} color="white" />
          <Text style={styles.description}>Visualizar Notificações</Text>
        </View>

        <View style={styles.space} />

        {/* Usando o ScrollView para as notificações */}
        <ScrollView style={styles.notificationContainer}>
          {notificacoes.map((notificacao) => (
            <View key={notificacao.id} style={styles.fieldContainer}>
              <Text style={styles.selectText}>
                {notificacao.titulo} - {notificacao.mensagem} -{" "}
                {notificacao.data
                  ? notificacao.data.toDate().toLocaleDateString()
                  : "Data não disponível"}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Conteúdo vazio, possivelmente para mais elementos */}
        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

// Exportando o componente HomePassageiro para uso em outros lugares
export default Notificacao;
