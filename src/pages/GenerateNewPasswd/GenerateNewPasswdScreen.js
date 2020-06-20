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

export default function GenerateNewPasswdScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{marginBottom: 10}}
        source={require('../../assets/ShieldCheck.png')}
      />
      <View style={styles.yellowBox}>
        <Text style={styles.description}>Registre sua nova senha</Text>

        <TextInput
          style={styles.insertText}
          keyboardType="default"
          placeholder="Token atual"
          placeholderTextColor="#404040"
        />
        <TextInput
          style={styles.insertText}
          keyboardType="default"
          placeholder="Senha nova"
          placeholderTextColor="#404040"
        />
        <TextInput
          style={styles.insertText}
          keyboardType="default"
          placeholder="Confirme sua senha"
          placeholderTextColor="#404040"
        />
      </View>

      <View style={styles.DoubleButtons}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('GenerateNewPasswdSuccessScreen')}>
          <Text style={styles.actionText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
