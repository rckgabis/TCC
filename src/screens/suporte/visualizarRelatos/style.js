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


});

export default styles;
