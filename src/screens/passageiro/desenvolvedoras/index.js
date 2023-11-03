import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import styles from './style';
import Logo from '../../components/logo/index'; // Importe o componente de logo
import { Ionicons } from '@expo/vector-icons';


const Desenvolvedoras = () => {
  return (
    // Definindo um plano de fundo de imagem usando ImageBackground
    <ImageBackground source={require('../../../../assets/background1.png')} style={styles.background}>
      {/* Container principal do componente */}
      <View style={styles.container}>
        {/* Usando o componente de logo */}
        <Logo />

        {/* Exibindo um texto de descrição */}
        <View style={styles.iconContainer}>
            <Ionicons name="people-outline" size={28} color="white" />
          <Text style={styles.description}>Desenvolvedoras</Text>
        </View>
        
         {/* Espaçamento */}
         <View style={styles.space} />

         {/* Botão Deslogar */}

        <View style={styles.fieldContainer}>
          <Text style={styles.selectText}>Ana Caroline Mota Diniz</Text>
        </View>

        {/* Linha branca para separação */}
        <View style={styles.whiteLine} />

        {/* Campo Estação */}
        <View style={styles.fieldContainer}>
          <Text style={styles.selectText}>Gabriela Aguiar Lima</Text>
        </View>

        {/* Linha branca para separação */}
        <View style={styles.whiteLine} />

        {/* Campo Situação */}
        <View style={styles.fieldContainer}>
          <Text style={styles.selectText}>Isabelly Kauane Soares Candido</Text>
        </View>

        {/* Conteúdo vazio, possivelmente para mais elementos */}
        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

// Exportando o componente HomePassageiro para uso em outros lugares
export default Desenvolvedoras;