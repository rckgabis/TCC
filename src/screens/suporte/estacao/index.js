// Importando as dependências necessárias do React e React Native
import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../home/style'
import Logo from '../../components/logo/index'; // Importe o componente de logo
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


// Definindo o componente de função HomePassageiro
const HomeEstacao = () => {

  const { navigate } = useNavigation(); // Mova esta linha para dentro do corpo da função

  const goToCadastrarEstacao = () => {
    navigate("CadastrarEstacao");
  };

  const goToVisualizarEstacao = () => {
    navigate("VisualizarEstacao");
  };

  const goToAlterarEstacao = () => {
    navigate("AlterarEstacoes");
  };

  const goToExcluirEstacao = () => {
    navigate("ExcluirEstacoes");
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
        <Entypo name="location-pin" size={24} color="white" />
          <Text style={styles.description}>Estação</Text>
        </View>


        <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={goToCadastrarEstacao}
        >  
          <Text style={styles.buttonText}onPress={goToCadastrarEstacao}>Cadastrar</Text>
        </TouchableOpacity>

        {/* Botão Alterar */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={goToAlterarEstacao}
        >  
          <Text style={styles.buttonText} onPress={goToAlterarEstacao}>Alterar</Text>
        </TouchableOpacity>

        {/* Botão Excluir */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={goToExcluirEstacao}
        >  
          <Text style={styles.buttonText} onPress={goToExcluirEstacao}>Excluir</Text>
        </TouchableOpacity>

        {/* Botão Visualizar */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={goToVisualizarEstacao}
        >  
          <Text style={styles.buttonText} onPress={goToVisualizarEstacao}>Visualizar</Text>
        </TouchableOpacity>

        </View>

        {/* Conteúdo vazio, possivelmente para mais elementos */}
        <View style={styles.content}></View>
      </View>

    </ImageBackground>
  );
};

export default HomeEstacao;
