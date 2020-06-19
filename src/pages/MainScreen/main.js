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
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logoOficial282x166.png')} />

      <TextInput style={styles.input} placeholder="E-mail ou login" />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
      />

      <View style={styles.layerLink}>
        <TouchableOpacity>
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          Alert.alert('Aviso', 'Recurso atualmente indisponível');
        }}>
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
        <Image source={require('../../assets/FacebookIcon.png')} />
        <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
          ENTRAR COM O FACEBOOK
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoGoogle}
        onPress={() => {
          Alert.alert('Aviso', 'Recurso atualmente indisponível');
        }}>
        <Image source={require('../../assets/GoogleIcon.png')} />
        <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
          ENTRAR COM O GOOGLE
        </Text>
      </TouchableOpacity>
    </View>
  );
}
