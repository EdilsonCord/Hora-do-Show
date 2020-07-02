import React, { Component } from "react";
import { View, Image, Text, TextInput } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import styles from './styles';

export default function Cadastro({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../../../assets/logooficial.png")}
          resizeMode="contain"
          style={styles.logo}
        ></Image>
        
        <Text style={styles.text}>CADASTRO</Text>
      </View>

      <TextInput placeholder="E-mail" 
      style={styles.eMail}> 
      </TextInput>

      <TextInput placeholder="Senha" 
      style={styles.senha}>
      </TextInput>

      <TextInput
        placeholder="Confirmar Senha"
        style={styles.confirmsenha}>
        </TextInput>

      <View style={styles.sexoRow}>
        <Text style={styles.sexo}>Sexo</Text>
        <Svg viewBox="0 0 23.67 23.93" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={12}
            cy={12}
            rx={12}
            ry={12}
          ></Ellipse>
        </Svg>
        <Text style={styles.masc1}>Masc</Text>
        <Svg viewBox="0 0 23.67 23.93" style={styles.ellipse1}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={12}
            cy={12}
            rx={12}
            ry={12}
          ></Ellipse>
        </Svg>
        <Text style={styles.fem}>Fem</Text>
      </View>
      <TextInput placeholder="Nome" style={styles.nome}></TextInput>
      <TextInput placeholder="Sobrenome" style={styles.sobrenome}></TextInput>
      <View style={styles.textInput5Row}>
        <TextInput
          placeholder="Altura (cm)"
          style={styles.altura}
        ></TextInput>
        <TextInput
          placeholder="Peso (kg)"
          style={styles.peso}
        ></TextInput>
      </View>
      <View style={styles.textInput8Row}>
        <TextInput
          placeholder="Data de Nasc"
          style={styles.datanasc}
        ></TextInput>
        <View style={styles.textInput7Stack}>
          <TextInput placeholder="Meta" style={styles.meta}></TextInput>
          {/* <Image
            source={require("../../../assets/seta.png")}
            resizeMode="contain"
            style={styles.seta}
          ></Image> */}
        </View>
      </View>
      <View style={styles.rect}>
        <Text style={styles.finalizarCadastro}>FINALIZAR CADASTRO</Text>
      </View>
      <Text style={styles.voltar}>Voltar</Text>
    </View>
  );
}

