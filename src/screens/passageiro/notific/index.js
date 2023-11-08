// Importando as dependências necessárias do React e React Native
import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { visualizarNotificacoes } from "../../../../firebase-config";
import Logo from "../../components/logo/index";
import styles from "./style";

// Definindo o componente de função Notificacao
const Notificacao = () => {
  const [notificacoes, setNotificacoes] = React.useState([]);

  React.useEffect(() => {
    // Quando o componente é montado, busca as notificações
    visualizarNotificacoes().then((notificacao) => {
      setNotificacoes(notificacao);
    });
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

      
        <ScrollView style={styles.notificationContainer}>
          {notificacoes.map((notificacao, index) => (
            <View key={index} style={styles.notificacaoItem}>
              <Text style={{ color: 'white', fontSize: 16, paddingVertical: 10, fontWeight: 'bold' }}>AVISO:</Text>
              <Text style={{ color: 'white', fontSize: 16 }}>Linha: {notificacao.linha}</Text>
              <Text style={{ color: 'white', fontSize: 16 }}>Estação: {notificacao.estacao}</Text>
              <Text style={{ color: 'white', fontSize: 16 }}>Situação: {notificacao.situacao}</Text>
              {/* Adicione estilos conforme necessário */}
            </View>
          ))}
        </ScrollView>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default Notificacao;
