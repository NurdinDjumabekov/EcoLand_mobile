import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1 },

  historyParent: {
    minWidth: "100%",
    width: "100%",
    paddingBottom: 0,
    borderTopWidth: 1,
    borderColor: "rgba(47, 71, 190, 0.587)",
    maxHeight: "83%",
  },

  more: { maxHeight: "88%" },

  everyInner: {
    backgroundColor: "rgba(162, 178, 238, 0.102)",
    minWidth: "100%",
    padding: 8,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "rgba(47, 71, 190, 0.287)",
  },

  mainData: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    paddingRight: 10,
  },

  mainDataInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
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
    paddingRight: 5,
    borderRadius: 5,
  },

  sum: {
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 5,
    lineHeight: 17,
    color: "rgba(47, 71, 190, 0.672)",
  },

  title: { fontSize: 16, fontWeight: "400", marginTop: 5 },

  discount: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(227, 16, 51, 0.9)",
    paddingHorizontal: 10,
  },

  totalItemSumm: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(47, 71, 190, 0.991)",
    paddingHorizontal: 10,
  },

  actionBlock: {
    position: "absolute",
    bottom: 40,
    paddingVertical: 10,
    alignSelf: "center",
    borderTopColor: "rgba(47, 71, 190, 0.691)",
    borderTopWidth: 1,
    minWidth: "100%",
  },

  actionBlockInner: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  endSaleBtn: {
    backgroundColor: "rgba(12, 169, 70, 0.9)",
    color: "#fff",
    width: "48%",
    fontSize: 14,
    marginHorizontal: 0,
  },

  addCard: {
    backgroundColor: "rgba(47, 71, 190, 0.691)",
    color: "#fff",
    width: "48%",
    fontSize: 14,
    marginHorizontal: 0,
  },
});

export default styles;
