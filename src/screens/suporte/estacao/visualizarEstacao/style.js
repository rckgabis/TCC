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

  space: {
    height: 100, // Ajuste a altura do espaçamento conforme necessário
  },

  fieldContainer: {
    flexDirection: "row",
    marginBottom: 20,
    paddingHorizontal: 70,
  },
  selectText: {
    color: "white",
    fontSize: 16,
    marginRight: 10,
    textAlign: "left",
  },

  whiteLine: {
    height: 1,
    width: "100%",
    backgroundColor: "#fff",
    marginVertical: 10,
  },

  situacaoText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'justify',
    padding: 8,
  },
  
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  searchBar: {
    color: "white",
    fontSize: 16,
    marginTop: 40,
  },
  searchIcon: {
    marginTop: 30,
    marginLeft: 10,
  },
  notificationContainer: {
    height: 30,
    width: '80%',
  }
});

export default styles;
