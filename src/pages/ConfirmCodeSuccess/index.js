import React, {Component} from 'react';
import {SafeAreaView, Image, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function ConfirmCodeSuccessScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{marginBottom: 10}}
        source={require('../../assets/happy-face128x128.png')}
      />

      <Text style={styles.description}>Conta criada com sucesso!</Text>

      <TouchableOpacity
        style={styles.action}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.actionText}>Confirmar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
