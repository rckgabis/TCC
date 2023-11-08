import React, { useState, useEffect } from 'react';
import {
  Alert,
  Animated,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import {
  auth,
  signInWithEmailAndPassword,
} from '../../../../firebase-config.js';
import styles from '../loginSuporte/style';
import { useNavigation } from '@react-navigation/native';

const LoginSuporte = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [iconSize] = useState(new Animated.Value(200));

  const { navigate } = useNavigation();

  const handleFocus = () => {
    Animated.timing(iconSize, {
      toValue: 150,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(iconSize, {
      toValue: 200,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      handleFocus();
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      handleBlur();
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('Linhas');
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
      source={require('../../../../assets/background2.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Animated.Image
          source={require('../../../../assets/logo1.png')}
          style={[styles.logo, { width: iconSize, height: iconSize }]}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o email"
            onChangeText={setEmail}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite a senha"
            onChangeText={setPassword}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
      </View>

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
            navigate('LoginPassageiro');
          }}
        >
          <Text style={styles.supportButtonText}>
            Voltar ao login de passageiro
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginSuporte;
