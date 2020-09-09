import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    color: "#fafafa",
    width: 178,
    height: 56,
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    color: "#fafafa",
    width: 282,
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 25,
  },
  DoubleButtons: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 28,
  },
});
