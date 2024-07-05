import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  addCard: { padding: 10, flex: 1 },

  inputBlock: { marginTop: 20 },

  inputTitle: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    color: "#000",
    marginBottom: 8,
  },

  inputFio: {
    paddingHorizontal: 10,
    height: 50,
    width: "100%",
    borderColor: "rgb(217 223 232)",
    borderRadius: 4,
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
  },

  numQrCode: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  inputFioQR: {
    paddingHorizontal: 10,
    height: 50,
    width: "100%",
    borderColor: "rgb(217 223 232)",
    borderRadius: 4,
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
  },

  btnOpenQR: {
    height: 50,
    width: 65,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
  },

  btnImgQR: {
    width: "100%",
    height: "100%",
  },

  addCardBtn: {
    backgroundColor: "rgba(12, 169, 70, 0.9)",
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
    position: "absolute",
    bottom: 30,
    minWidth: "98%",
    alignSelf: "center",
  },

  green: { color: "green", fontWeight: "500" },

  blue: { color: "rgba(97, 112, 188, 0.972)", fontWeight: "500" },
});

export default styles;
