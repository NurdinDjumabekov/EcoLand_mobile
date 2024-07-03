import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  paretnBlock: {
    width: "100%",
    padding: 10,
    backgroundColor: "#6054a4",
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 10,
  },

  loginBtn: {
    backgroundColor: "#97c874",
    position: "absolute",
    bottom: 30,
    left: 10,
    right: 10,
    minWidth: "90%",
    color: "#fff",
    marginTop: 0,
  },

  logoBlock: { minWidth: "100%", display: "flex", alignItems: "center" },

  logo: {
    width: 300,
    height: 100,
    marginBottom: 10,
  },

  textInput: {
    paddingHorizontal: 2,
    fontSize: 20,
    textAlign: "left",
    fontWeight: "600",
    color: "#fff",
  },

  input: {
    minWidth: "100%",
    height: 50,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 15,
    alignSelf: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    fontSize: 18,
    elevation: 2,
  },
});

export default styles;
