import { StyleSheet } from "react-native"; // Definindo estilos usando StyleSheet.create

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 8,
  },

  pair: {
    paddingHorizontal: 60,
    marginBottom: 200,
    color: "white",
  },
  description: {
    color: "white",
    fontSize: 18,
    marginLeft: 12,
  },
  iconContainer: {
    marginBottom: 80,
    justifyContent: "center",
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: -20,
  },
  // Estilos para o botão "Avançar"
  button: {
    borderWidth: 1,
    borderColor: '#fff', // Cor da borda
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff', // Cor do texto
  },

  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 20,
  },
  iconStyle: {
    marginRight: 10,
  },
  pickerStyle: {
    flex: 1,
    color: "white",
  },
});

export default styles;