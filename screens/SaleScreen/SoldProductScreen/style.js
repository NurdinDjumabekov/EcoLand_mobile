import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  soldBlock: { flex: 1, paddingBottom: 100 },

  container: {
    backgroundColor: "rgba(162, 178, 238, 0.102)",
    minWidth: "100%",
    padding: 8,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "rgba(47, 71, 190, 0.287)",
  },

  parentBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  titleNum: {
    fontSize: 19,
    fontWeight: "700",
    color: "rgba(47, 71, 190, 0.672)",
    borderColor: "rgba(47, 71, 190, 0.672)",
    borderWidth: 1,
    backgroundColor: "#d4dfee",
    padding: 3,
    paddingLeft: 7,
    paddingRight: 0,
    borderRadius: 5,
  },

  titleDate: {
    fontSize: 14,
    fontWeight: "500",
    borderRadius: 5,
    lineHeight: 16,
    color: "rgba(47, 71, 190, 0.672)",
  },

  title: {
    fontSize: 15,
    fontWeight: "500",
    borderRadius: 5,
    lineHeight: 17,
    color: "#222",
    marginTop: 10,
  },

  price: { fontSize: 15, fontWeight: "400" },

  totalPrice: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(12, 169, 70, 0.9)",
  },

  mainData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5,
  },

  flatList: { width: "100%", paddingTop: 8 },

  /////// actions

  actionBlock: {
    position: "absolute",
    bottom: 40,
    padding: 10,
    alignSelf: "center",
    borderTopColor: "rgba(47, 71, 190, 0.691)",
    borderTopWidth: 1,
  },

  actionBlockInner: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  result: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    color: "rgba(47, 71, 190, 0.691)",
    color: "rgba(12, 169, 70, 0.9)",
  },

  resultDiscount: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    color: "red",
    marginTop: 5,
  },

  resultAll: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 20,
    color: "rgba(47, 71, 190, 0.691)",
    marginTop: 7,
    marginBottom: 5,
    textDecorationLine: "underline",
  },

  endSaleBtn: {
    backgroundColor: "rgba(12, 169, 70, 0.9)",
    color: "#fff",
    width: "48%",
    fontSize: 15,
    marginHorizontal: 0,
  },

  addCard: {
    backgroundColor: "rgba(47, 71, 190, 0.691)",
    color: "#fff",
    width: "48%",
    fontSize: 16,
    marginHorizontal: 0,
  },

  //////////////////// krestik
  krest: {
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  line: {
    position: "absolute",
    width: "100%",
    height: 2,
    backgroundColor: "red",
  },

  deg: { transform: [{ rotate: "45deg" }] },
  degMinus: { transform: [{ rotate: "-45deg" }] },

  noneData: {
    paddingTop: 250,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "#222",
    height: "100%",
  },
});

export default styles;
