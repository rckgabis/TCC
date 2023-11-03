import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  buttonContainer: {
    justifyContent: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: "row", // Alinhe os elementos horizontalmente
    alignItems: "center", // Alinhe verticalmente ao centro
    borderWidth: 1,
    borderColor: "#DFDFDF",
    backgroundColor: "#7C5CCE",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center", // Alinhe o texto "Entrar com o" verticalmente ao centro
  },
  buttonText: {
    fontFamily: "Roboto",
    color: "#fff",
    fontSize: 14,
  },
  googleText: {
    fontFamily: "Roboto",
    color: "#fff",
    fontSize: 14,
    marginRight: 5, // Adicione margem à direita do texto "Google"
  },
  supportButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  supportButtonText: {
    color: "#757575",
    fontFamily: "Roboto",
    fontSize: 12,
    textAlign: "center",
  },
  inputContainer: {
    // Input fields container styles
    marginBottom: 4,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    // Individual input wrapper styles
    marginBottom: 10,
  },
  inputLabel: {
    // Input label styles
    fontSize: 12,
    color: '#7C5CCE',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    // Input field styles
    borderWidth: 1,
    borderColor: '#DFDFDF',
    backgroundColor: 'white',
    borderRadius: 2,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#757575',
  },
});

export default styles;
