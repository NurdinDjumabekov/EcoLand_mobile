import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

  selectBlock: { height: "87%" },

  soputkaBlock: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    minWidth: "100%",
  },

  soputka: {
    fontSize: 18,
    color: "#fff",
    minWidth: "95%",
    paddingTop: 13,
    paddingBottom: 13,
    borderRadius: 8,
    fontWeight: 600,
    backgroundColor: "rgba(97 ,100, 239,0.7)",
    marginTop: 15,
    marginBottom: 15,
  },
});

export default styles;
