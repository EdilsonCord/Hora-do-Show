import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function ConfirmCodeScreen({navigation, route}) {


  const [ email, onChangeEmail] = React.useState(route.params.email);
  const [ senha, onChangeSenha] = React.useState('');
  const [ senha2, onChangeSenha2] = React.useState('');
  const [ token, onChangeToken] = React.useState('');

  async function handleRegister(e) {
    e.preventDefault();

    console.log("senha1: " + senha)
    console.log("senha2 " + senha2)
    if(!(senha === senha2)){
      alert("Senhas não coincidem!");
      return
    }

    fetch('http://10.0.2.2:3333/api/register',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
         'Content-Type': 'application/json',
      },
      body:  JSON.stringify({
        email: email,
        passwordRegister: token,
        password: senha
     })
      }).then((response) => response.json())
      .then(response => {
        if("error" in response){
          alert(response.error)         
        }else{
          console.log(response)
          navigation.navigate('CadastrarInformacoes', {email: email, senha : senha})
        }
      }).catch(err => {
        console.log(err)
        navigation.navigate('CadastrarInformacoes', {email: email, senha : senha})
      });

}


  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{marginBottom: 10}}
        source={require('../../../../assets/ShieldCheck.png')}
      />
      <View style={styles.yellowBox}>
        <Text style={styles.description}>Cadastre sua senha</Text>

        <TextInput
          style={styles.insertText}
          keyboardType="default"
          placeholder="Senha recebida pelo email"
          secureTextEntry={true}
          placeholderTextColor="#404040"

          onChangeText={(text) => onChangeToken(text)}
          token={token}
        />
        <TextInput
          style={styles.insertText}
          keyboardType="default"
          placeholder="Senha nova"
          secureTextEntry={true}
          placeholderTextColor="#404040"

          onChangeText={(text) => onChangeSenha(text)}
          senha={senha}
        />
        <TextInput
          style={styles.insertText}
          keyboardType="default"
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          placeholderTextColor="#404040"

          onChangeText={(text) => onChangeSenha2(text)}
          senha2={senha2}
        />
      </View>

      <View style={styles.DoubleButtons}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={handleRegister}>
          <Text style={styles.actionText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
