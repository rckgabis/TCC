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
    marginHorizontal: 20,
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

  space: {
    height: 120, // Ajuste a altura do espaçamento conforme necessário
  },

  fieldContainer: {
    flexDirection: "row",
    marginBottom: 4,
  },
  selectText: {
    color: "white",
    fontSize: 16,
    marginRight: 5,
    textAlign: "left",
  },

  whiteLine: {
    height: 1,
    width: "70%",
    backgroundColor: "#fff",
    marginVertical: 10,
  },
});

export default styles;
