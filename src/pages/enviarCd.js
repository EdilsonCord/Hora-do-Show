import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [ value, onChangeText, placeholder ] = React.useState("Email");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Insira seu email abaixo</Text>
      <TextInput
        style={{ height: 40, width:250, borderColor: "black", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Button title="Enviar" onPress={() => console.log(value)}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E55F54",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  aviao: {
    width: 114,
    height: 114,
  },
});