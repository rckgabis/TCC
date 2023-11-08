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
    marginTop: 60,
  },
  description: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
  },

  space: {
    height: 20, // Ajuste a altura do espaçamento conforme necessário
  },

  spaced: {
    height: 10, // Ajuste a altura do espaçamento conforme necessário
  },

  fieldContainer: {
    flexDirection: "row",
    alignItems: "flex-start", // Para alinhar os elementos ao topo do contêiner
    width: "80%",
  },

  whiteLine: {
    height: 1,
    width: "75%",
    backgroundColor: "#fff",
    marginVertical: 24,
  },

  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    marginTop: 10,
    width: 70,
    height: 70,
    marginRight: 12,
  },

  selectText: {
    color: "white",
    fontSize: 16,
    marginTop: 12,
  },

  githubContainer: {
    marginLeft: 10,
  },
});

export default styles;
