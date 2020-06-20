import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';

import styles from './styles';

export default function ConfirmCodeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={{marginBottom: 10}}
        source={require('../../assets/ShieldCheck.png')}
      />
      <View style={styles.blockyellow}>
        <Text style={styles.textoconfirmar}>
          {' '}
          Insira o código recebido no seu e-mail
        </Text>

        {/* <TextInput  */}
        {/* style={{ height: 40, width:250, borderColor: "black", borderWidth: 1 }} */}
        {/* onChangeText={(text) => onChangeText(text)} */}
        {/* value={value}/> */}

        <TextInput
          style={styles.inputcd1}
          
          placeholder="Código de Confirmação"
        />
      </View>

      <View style={styles.DoubleButtons}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('ConfirmCodSuccessScreen')}>
          <Text style={styles.actionText}>Confirmar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
