import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E55F54",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    color: "#FFFFFF",
    width: 178,
    height: 56,
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    color: "#FFFFFF",
    width: 282,
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 25,
  },
  insertText: {
    width: "100%",
    height: 35,
    borderRadius: 6,
    paddingLeft: 10 ,
    paddingTop: 7,
    paddingBottom: 7,
    fontSize: 18,
    backgroundColor: "#FFF",
    color: "#000",
    alignItems: "center",
    marginBottom: 16,
  },
  DoubleButtons: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 28,
  },
  link: {
    color: "white",
    fontSize: 18,
    lineHeight: 21,
    textDecorationLine: "underline",
  },
  action: {
    backgroundColor: "#D9C83A",
    borderRadius: 6,
    width: 132,
    height: 29,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  actionText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
