// Importando as dependências necessárias do React e React Native
import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from '../feedback/style';
import Logo from '../../../components/logo/index'; // Importe o componente de logo
import { FontAwesome } from '@expo/vector-icons';

// Definindo o componente de função HomePassageiro
const Feedback = () => {
  return (
    // Definindo um plano de fundo de imagem usando ImageBackground
    <ImageBackground source={require('../../../../../assets/background1.png')} style={styles.background}>
      {/* Container principal do componente */}
      <View style={styles.container}>
        {/* Usando o componente de logo */}
        <Logo />

          <View style={styles.iconContainer}>
          <FontAwesome name="thumbs-o-up" size={90} color="white" />
          </View>
          <Text style={styles.text}>Sucesso!!</Text>

          <Text style={styles.description}>Seu relato foi enviado, analisaremos sua denúncia e em breve retornaremos.</Text>
        
        
        {/* Conteúdo vazio, possivelmente para mais elementos */}
        <View style={styles.content}></View>
      </View>

    </ImageBackground>
  );
};

// Exportando o componente HomePassageiro para uso em outros lugares
export default Feedback;
