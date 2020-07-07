/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import styles from './styles';

// export default class MainScreen extends Component {
export default function MainScreen({navigation}) {
  const [email, onChangeEmail] = React.useState('');
  const [senha, onChangeSenha] = React.useState('');

  async function handleRegister(e) {
    e.preventDefault();

    fetch('http://10.0.2.2:3333/api/authenticate', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: senha
     })
      }).then(response => response.json())
      .then(response => {
        if("error" in response){
          alert(response.error)         
        }else{
          navigation.navigate('MainSuccessScreen')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logoOficial282x166.png')} />

  
      <TextInput 
      style={styles.input} 
      defaultValue='diego.cstbraga@gmail.comm'
      placeholder="E-mail ou login"
      onChangeText={(text) => onChangeEmail(text)}
      email={email}
      />

      <TextInput
        style={styles.input}
        defaultValue='Senha@1233'
        secureTextEntry={true}
        placeholder="Senha"
        onChangeText={(text) => onChangeSenha(text)}
        senha={senha}
      />

      <View style={styles.layerLink}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SendRecoveryCodeScreen')}>
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={handleRegister}>
        <Text style={styles.botaoText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.grupoOu}>
        <View style={styles.horizontalLine} />

        <Text style={styles.textoOu}>ou</Text>

        <View style={styles.horizontalLine} />
      </View>

      <TouchableOpacity
        style={styles.botaoCadastro}
        onPress={() => navigation.navigate('SendCodeScreen')}>
        <Text style={styles.botaoText}>CADASTRE-SE GRÁTIS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoFacebook}
        onPress={() => {
          Alert.alert('Aviso', 'Recurso atualmente indisponível');
        }}>
        <Image source={require('../../../assets/FacebookIcon.png')} />
        <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
          ENTRAR COM O FACEBOOK
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoGoogle}
        onPress={() => {
          Alert.alert('Aviso', 'Recurso atualmente indisponível');
        }}>
        <Image source={require('../../../assets/GoogleIcon.png')} />
        <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
          ENTRAR COM O GOOGLE
        </Text>
      </TouchableOpacity>
    </View>
  );
}
