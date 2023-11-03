// Importando as dependências necessárias do React e React Native
import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './style';
import Logo from '../../components/logo/index'; // Importe o componente de logo
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


// Definindo o componente de função HomePassageiro
const HomeSituacao = () => {

  const { navigate } = useNavigation();

  const goToCadastrarSituacao = () => {
    navigate("CadastrarSituacao");
  };

  const goToVisualizarSituacao = () => {
    navigate("VisualizarSituacao");
  };

  const goToExcluirSituacao = () => {
    navigate("ExcluirSituacao");
  };

  const goToAlterarSituacao = () => {
    navigate("AlterarSituacao");
  };
  
  return (
    // Definindo um plano de fundo de imagem usando ImageBackground
    <ImageBackground source={require('../../../../assets/background3.png')} style={styles.background}>
      {/* Container principal do componente */}
      <View style={styles.container}>
        {/* Usando o componente de logo */}
        <Logo />

        {/* Exibindo um texto de descrição */}
        <View style={styles.iconContainer}>
        <Ionicons name="alert-circle-outline" size={24} color="white" />
          <Text style={styles.description}>Situação</Text>
        </View>


        <View style={styles.buttonContainer}>
        {/* Botão Cadastrar */}
        <TouchableOpacity style={styles.button}onPress={goToCadastrarSituacao}>
            <Text style={styles.buttonText}onPress={goToCadastrarSituacao}>Cadastrar</Text>
        </TouchableOpacity>

        {/* Botão Alterar */}
        <TouchableOpacity style={styles.button}onPress={goToAlterarSituacao} >
            <Text style={styles.buttonText}onPress={goToAlterarSituacao}>Alterar</Text>
        </TouchableOpacity>

        {/* Botão Excluir */}
        <TouchableOpacity style={styles.button}onPress={goToExcluirSituacao}>
            <Text style={styles.buttonText}onPress={goToExcluirSituacao}>Excluir</Text>
        </TouchableOpacity>

        {/* Botão Visualizar */}
        <TouchableOpacity style={styles.button}onPress={goToVisualizarSituacao }>
            <Text style={styles.buttonText}onPress={goToVisualizarSituacao }>Visualizar</Text>
        </TouchableOpacity>
        </View>

        {/* Conteúdo vazio, possivelmente para mais elementos */}
        <View style={styles.content}></View>
      </View>

    </ImageBackground>
  );
};

// Exportando o componente HomePassageiro para uso em outros lugares
export default HomeSituacao;
