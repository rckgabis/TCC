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

  notificationContainer: {
    padding: 10,
    height: 100,
    width: "80%",
    marginTop: 20,
  },

  relatosText: {
    padding: 10,
    color: "white",
    fontSize: 16,
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
    marginTop: 20,
  },
  searchIcon: {
    marginTop: 20,
    marginLeft: 8,
  },
});

export default styles;
