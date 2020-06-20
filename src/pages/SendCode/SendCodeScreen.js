import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import api from "../../services/api" ;
import axios from "axios";
const instance = axios.create();

export default function SendCodeScreen({navigation}) {


  const [ value, onChangeText ] = React.useState('');


  async function handleRegister(e) {
    e.preventDefault();

    fetch('http://10.0.2.2:3333/api/pre_register',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
      body:  JSON.stringify({
        email: value,
     })
      }).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      });

    navigation.navigate('ConfirmCodeScreen')

}

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{marginBottom: 25}}
        source={require('../../assets/Aviao.png')}
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
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />

      <View style={styles.DoubleButtons}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={handleRegister}>
          <Text style={styles.actionText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('../../assets/logooficial.png')} />
    </SafeAreaView>
  );
}
