import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E55F54",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  }, 
  description: {
    color: "#FFF",
    width: 186,
    height: 56,
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    marginVertical: 70,
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
