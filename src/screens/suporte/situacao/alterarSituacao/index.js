import React, { useState } from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alterarSituacao } from '../../../../../firebase-config'; // Importar a função de alterar situação
import Logo from '../../../components/logo/index';
import styles from './style';

const AlterarSituacao = () => {
  const { navigate } = useNavigation();
  const [nomeSituacao, setNomeSituacao] = useState('');
  const [idSituacao, setIdSituacao] = useState(''); // ID da situação a ser alterada

  const goToVisualizarSituacoes = () => {
    navigate('VisualizarSituacoes');
  };

  const alterarSituacaoNoFirebase = async () => {
    const alteradoComSucesso = await alterarSituacao(idSituacao, nomeSituacao);

    if (alteradoComSucesso) {
      setNomeSituacao(''); // Limpa o campo após a alteração
      setIdSituacao(''); // Limpa o ID da situação
      alert('Situação alterada com sucesso!');
    } else {
      alert('Ocorreu um erro ao alterar a situação');
    }
  };

  return (
    <ImageBackground
      source={require('../../../../../assets/background3.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Logo />

        <View style={styles.iconContainer}>
        <Ionicons name="alert-circle-outline" size={24} color="white" />
          <Text style={styles.description}>Alterar Situação</Text>
        </View>

        {/* Campo de entrada para o ID da situação a ser alterada */}
        <TextInput
          placeholder="Digite o ID da situação"
          placeholderTextColor="white"
          style={styles.input}
          value={idSituacao}
          onChangeText={(text) => setIdSituacao(text)}
        />

        <View style={styles.whiteLine} />

        {/* Campo de entrada para o novo nome da situação */}
        <TextInput
          placeholder="Digite o novo nome da situação"
          placeholderTextColor="white"
          style={styles.input}
          value={nomeSituacao}
          onChangeText={(text) => setNomeSituacao(text)}
        />

        <View style={styles.whiteLine} />

        <TouchableOpacity style={styles.button} onPress={alterarSituacaoNoFirebase}>
          <Text style={styles.buttonText}>Alterar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToVisualizarSituacoes}>
          <Text style={styles.buttonText}>Visualizar</Text>
        </TouchableOpacity>

        <View style={styles.content}></View>
      </View>
    </ImageBackground>
  );
};

export default AlterarSituacao;
