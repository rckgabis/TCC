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
    justifyContent: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
    backgroundColor: '#7C5CCE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: '#fff',
    fontSize: 14,
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
