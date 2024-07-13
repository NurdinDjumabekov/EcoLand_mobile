import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: { flex: 1 },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    minWidth: "100%",
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 8,
    paddingTop: 5,
  },

  total: { borderTopColor: "#222", borderTopWidth: 1, paddingTop: 8 },

  totalItemCount: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(47, 71, 190, 0.991)",
    paddingVertical: 5,
    marginHorizontal: 10,
  },

  actionBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  sendReturnProd: {
    backgroundColor: "rgba(12, 169, 70, 0.9)",
    color: "#fff",
    width: "96%",
    alignSelf: "center",
    fontSize: 17,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});

export default styles;
