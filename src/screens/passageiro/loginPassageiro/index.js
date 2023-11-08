import React, { useState, useEffect } from 'react';
import { Image, Animated, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, signInWithEmailAndPassword } from '../../../../firebase-config.js';
import styles from '../loginPassageiro/style';

const LoginPassageiro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailIconSize] = useState(new Animated.Value(200));
  const [passwordIconSize] = useState(new Animated.Value(200));
  const { navigate } = useNavigation();

  const handleEmailFocus = () => {
    Animated.timing(emailIconSize, {
      toValue: 150,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleEmailBlur = () => {
    Animated.timing(emailIconSize, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handlePasswordFocus = () => {
    Animated.timing(passwordIconSize, {
      toValue: 150,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handlePasswordBlur = () => {
    Animated.timing(passwordIconSize, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      Animated.timing(emailIconSize, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }).start();

      Animated.timing(passwordIconSize, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      Animated.timing(emailIconSize, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false,
      }).start();

      Animated.timing(passwordIconSize, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false,
      }).start();
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [emailIconSize, passwordIconSize]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('HomeRelato');
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Erro',
        'Falha no login. Verifique suas credenciais.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <ImageBackground
      source={require('../../../../assets/background8.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Animated.Image
          source={require('../../../../assets/logo1.png')}
          style={[styles.logo, { width: emailIconSize, height: emailIconSize }]}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o email"
            onChangeText={setEmail}
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite a senha"
            onChangeText={setPassword}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.senhaButton}
        activeOpacity={0.2}
        onPress={() => {
          navigate('EsqueceuSenha');
        }}
      >
        <Text style={styles.senhaButtonText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.supportButton}
          activeOpacity={0.2}
          onPress={() => {
            navigate('CadastroPassageiro');
          }}
        >
          <Text style={styles.supportButtonText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.supportButton}
          activeOpacity={0.2}
          onPress={() => {
            navigate('LoginSuporte');
          }}
        >
          <Text style={styles.supportButtonText}>Entrar como suporte</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginPassageiro;
