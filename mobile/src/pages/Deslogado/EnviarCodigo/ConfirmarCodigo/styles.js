import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },

  yellowBox:{
      width: 320,
      height: 230,
      backgroundColor: '#fafafa',
      borderRadius: 18,
      paddingHorizontal: 20,
      paddingVertical: 24,
      alignItems: "center",
      marginVertical: 40
  },

  DoubleButtons: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 28,
  },
  description: {
    color: "#212121",
    width: 282,
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 25,
  },
});
