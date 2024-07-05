import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listSoldsProd: { flex: 1, paddingBottom: 10 },

  title: {
    padding: 12,
    fontSize: 18,
    fontWeight: "500",
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "rgba(47, 71, 190, 0.591)",
    color: "#fff",
    marginBottom: 5,
  },

  selectBlock: { flex: 1 },

  saleActionBlock: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    minWidth: "100%",
    gap: 10,
    marginVertical: 15,
  },

  saleBlock: {
    minWidth: "45%",
    height: 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(12, 169, 70, 0.9)",
    borderRadius: 8,
    gap: 5,
  },

  cardsBlock: {
    minWidth: "45%",
    height: 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(97, 112, 188, 0.972)",
    borderRadius: 8,
    gap: 5,
  },

  cardsBlockImg: {
    width: "60%",
    minHeight: "60%",
    maxHeight: "60%",
    objectFit: "contain",
  },

  saleBlockImg: {
    width: "70%",
    minHeight: "65%",
    maxHeight: "65%",
    objectFit: "contain",
    transform: [{ rotate: "-20deg" }],
  },

  cardTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    marginTop: 10,
    borderRadius: 10,
  },

  noneData: {
    paddingTop: 200,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "#222",
    height: "100%",
  },
});

export default styles;
