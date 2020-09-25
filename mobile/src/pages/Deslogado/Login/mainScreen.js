/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { Container, Content, H1, H2, H3, getTheme, StyleProvider, Icon, Form, Item, Input, Label, Button, Text } from 'native-base';

import styles from './styles';
import LinearGradient from 'react-native-linear-gradient' // import LinearGradient

import material from '../../../../native-base-theme/variables/material'

// export default class MainScreen extends Component {
export default function MainScreen({navigation}) {
  const [email, onChangeEmail] = React.useState('');
  const [senha, onChangeSenha] = React.useState('');

  //BACK END
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
        password: senha,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if ('error' in response) {
          alert(response.error);
        } else {
          global.user = response.user;
          navigation.navigate('MainSuccessScreen');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (

  //Style Provider garante que seus filhos recebam o tema que estamos utilizando (cores etc)
  <StyleProvider style={getTheme(material)}>
    <Container style={styles.container}>
    <Image style={styles.selfCenter} source={require('../../../assets/logoOficial282x166.png')} />

      <Form>
          <Item stackedLabel>
              <Label>Username</Label>
              <Input  onChangeText={(text) => onChangeEmail(text)}
                      email={email} 
                      defaultValue="pepespim08@gmail.comm"/>
          </Item>

          <Item stackedLabel>
              <Label>Password</Label>
              <Input  defaultValue="Amendoim05@a"
                      onChangeText={(text) => onChangeSenha(text)}
                      senha={senha}
                      secureTextEntry={true}/>
          </Item>

      </Form>


      <Button transparent light onPress={() => navigation.navigate('SendRecoveryCodeScreen')}>     
            <Text>Esqueci minha senha</Text>
      </Button>

      <Button style={{alignSelf:"center", marginBottom: 10}}  primary onPress={handleRegister}>
            <Text>Entrar</Text>
      </Button>

      <Button style={{marginBottom: 10}} bordered block full primary onPress={() => navigation.navigate('SendCodeScreen')}>
            <Icon type="Zocial" name='email' />
            <Text>Cadastra-se com email</Text>
      </Button>

      <Text style={styles.txtEntrar}> Entrar com: </Text>

      <Button style={styles.btn} iconLeft bordered  full  info 
      
          onPress={() => {
          Alert.alert('Aviso', 'Recurso atualmente indisponível');
          // navigation.navigate('CadastrarInformacoesTeste');
        }}>

            <Icon type="FontAwesome" name='facebook' />
            <Text >FACEBOOK</Text>
      </Button>


      <Button style={styles.btn} iconLeft  bordered full  danger 
      
          onPress={() => {
          Alert.alert('Aviso', 'Recurso atualmente indisponível');
          // navigation.navigate('CadastrarInformacoesTeste');
        }}>

            <Icon type="FontAwesome" name='google' />
            <Text>google</Text>
      </Button>

    </Container>
    
   </StyleProvider>
  );
}
