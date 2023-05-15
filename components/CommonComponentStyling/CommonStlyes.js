import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fefefe",
  },
  horizontalContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    width: "25%",
    height: "auto",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 6,
    padding: 20,
    margin: 16,
  },
  fontFocusStyle1: {
    color: "#007bff", 
    textDecorationLine: "underline"
  },
  titleFont: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333"
  },
  horizonalDivider: {
    height: 1,
    backgroundColor: "#cccccc",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  primaryButton: {
    backgroundColor: "#007bff",
    borderRadius: 4,
    paddingVertical: 12,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
});

export default styles;
