import { StyleSheet } from "react-native"; // Definindo estilos usando StyleSheet.create

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 80,
  },
  description: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },

  input: {
    borderBottomWidth: 2,
    borderColor: "transparent", // Define a cor da borda como transparente
    marginBottom: 2,
    marginTop: 50, // Espaçamento superior
    paddingVertical: 2, // Espaçamento vertical interno
    paddingHorizontal: 8, // Espaçamento horizontal interno
    color: "white", // Cor do texto
    fontSize: 16, // Tamanho da fonte
    textAlign: "left",
    overflow: "hidden", // Impede que o texto vaze fora da borda
    width: 250, // Defina um valor adequado para o width
  },

  whiteLine: {
    height: 1,
    width: "70%",
    backgroundColor: "#fff",
    marginVertical: 12,
  },

  buttonContainer: {
    // Button container styles
    paddingHorizontal: 20,
  },
  // Estilos para o botão "Avançar"
  button: {
    borderWidth: 1,
    borderColor: "#fff", // Cor da borda
    paddingVertical: 4,
    paddingHorizontal: 90,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff", // Cor do texto
  },
});

export default styles;
