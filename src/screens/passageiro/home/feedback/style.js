import { StyleSheet } from 'react-native';// Definindo estilos usando StyleSheet.create

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
    content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer:{
    marginTop: '40%',
  },
    text: {
    color: '#fff',
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
  },

  description: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    marginTop: 30,
  },

});

export default styles;