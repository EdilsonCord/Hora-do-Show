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

export default function SendCodeScreen({navigation}) {

  const [ value, onChangeText ] = React.useState('');


  async function handleRegister(e) {
    e.preventDefault();

    fetch('http://10.0.2.2:3333/api/forgot_password',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
      body:  JSON.stringify({
        email: value,
     })
      }).then((response) => response.json())
      .then(response => {
        if("error" in response){
          alert(response.error)         
        }else{
          console.log(response)
          navigation.navigate('GenerateNewPasswdScreen', {email: value})
        }
      }).catch(err => {
        console.log(err)
        navigation.navigate('GenerateNewPasswdScreen', {email: value})
      });
 

}

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{marginBottom: 25}}
        source={require('../../assets/Aviao.png')}
      />

      <Text style={styles.title}>CADASTRAR NOVA SENHA</Text>

      <Text style={styles.description}>
        Insira seu e-mail na caixa de seleção abaixo. Enviaremos um código para
        que você possa recadrastrar sua senha!
      </Text>

      <TextInput
        style={styles.insertText}
        keyboardType="email-address"
        placeholder="E-mail"
        placeholderTextColor="#404040"

        textContentType='emailAddress'
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
