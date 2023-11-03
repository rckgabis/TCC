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

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
  },
  description: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },

  space: {
    height: 120, // Ajuste a altura do espaçamento conforme necessário
  },

  fieldContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  selectText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 8,
    textAlign: 'left',
  },
  
  whiteLine: {
    height: 1,
    width: '70%',
    backgroundColor: '#fff',
    marginVertical: 10,
  },


});

export default styles;