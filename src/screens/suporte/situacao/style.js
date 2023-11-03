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

  buttonContainer: {
    // Button container styles
    paddingHorizontal: 20,
    marginTop: 70,
  },
  // Estilos para o botão "Avançar"
  button: {
    borderWidth: 1,
    borderColor: "#fff", // Cor da borda
    paddingVertical: 4,
    paddingHorizontal: 90,
    marginTop: 24,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff", // Cor do texto
  },
});

export default styles;
