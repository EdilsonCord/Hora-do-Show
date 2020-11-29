import React, { useEffect, useState } from 'react';
import { SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function ConfirmCodeSuccessScreen({ navigation, route }) {
   const [email, onChangeEmail] = React.useState(route.params.email);
   const [senha, onChangeSenha] = React.useState(route.params.senha);

   async function handleRegister(e) {
      e.preventDefault();

      fetch('http://' + global.endereco + '/api/authenticate', {
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
               Alert.alert('Erro ao fazer Login!', response.error);
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
      <SafeAreaView style={styles.container}>
         <Image
            style={{ marginBottom: 10 }}
            source={require('dir-src/assets/happy-face128x128.png')}
         />

         <Text style={styles.description}>Conta criada com sucesso!</Text>

         <TouchableOpacity
            style={styles.action}
            onPress={handleRegister}>
            {/* onPress={() => navigation.popToTop()}> */}
            <Text style={styles.actionText}>Confirmar</Text>
         </TouchableOpacity>
      </SafeAreaView>
   );
}
