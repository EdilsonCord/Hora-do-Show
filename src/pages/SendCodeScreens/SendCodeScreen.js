import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function SendCodeScreen(props) {

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{marginBottom: 25}}
        source={require("../../assets/Aviao.png")}
      />

      <Text style={styles.title}>CÓDIGO DE CONFIRMAÇÃO</Text>

      <Text style={styles.description}>
        Insira seu e-mail na caixa de seleção abaixo. Enviaremos um código para
        que você possa prosseguir com o cadastro!
      </Text>

      <TextInput
        style={styles.insertText}
        keyboardType="email-address"
        placeholder="E-mail"
        placeholderTextColor="#404040"
      />

      <View style={styles.DoubleButtons}>
        <TouchableOpacity>
          <Text style={styles.link}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action}>
          <Text style={styles.actionText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      <Image source={require("../../assets/logoOficial.png")} />
    </SafeAreaView>
  );
}
