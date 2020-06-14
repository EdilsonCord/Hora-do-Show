/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View, Text, Image, TextInput,  StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default class Main extends Component {
  render() {
    return (
     
      <View style={styles.container}>
        <Image 
            source = {require('../assets/logooficial.png')}
            style = {styles.logo}
        /> 
        
        <TextInput style =  {styles.input}
          placeholder = "E-mail ou login"
          />
        <TextInput style = {styles.input}
         secureTextEntry = {true}
          placeholder = "Senha"
        
          />

        <TouchableOpacity style = {styles.botaoEsqueci}
          onPress = { () => {this.clicou()} }>
          
          <Text style = {styles.botaoTextoEsqueci}> Esqueci minha senha </Text>
          
          </TouchableOpacity>
        <TouchableOpacity style = {styles.botao}
         onPress = { () => {this.clicou()} }>
        <Text style = {styles.botaoText}> Entrar </Text> 

        </TouchableOpacity>
        
        <Text style = {styles.textoOu}>────────────── ou ────────────── </Text>
        
        <TouchableOpacity style = {styles.botaoCadastro}
         onPress = { () => {this.clicou()} }>
        <Text style = {styles.botaoCadastroTexto}> CADASTRE-SE GRÁTIS </Text> 
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.botaoFacebook}
         onPress = { () => {this.clicou()} }>
        <Image source = {require ('../assets/Facebook.png')} 
        />
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.botaoGoogle}
         onPress = { () => {this.clicou()} }>
        <Image source = {require ('../assets/Google.png')} 
        />
        </TouchableOpacity>
      </View>
      
    );
  }
}

    const styles = StyleSheet.create( {
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E55F54',
      },

      logo: {
        width: 300,
        height: 200,
        
      },

      input: {
        marginTop: 10, 
        width: 320, 
        backgroundColor: '#ffff',
        fontSize: 16,
        borderRadius: 6,
        padding: 10,
        height: 40,
      },

      botao: {
        marginTop: 50,
        backgroundColor: '#D9C83A',
        width: 320,
        height: 40,
        borderRadius: 6, 
        alignItems: 'center',
        justifyContent: 'center',

      },
      
      botaoText: {
        fontSize: 16,
        fontWeight: 'bold',

      },

      botaoTextoEsqueci: {
        alignItems: 'flex-start',
        textAlign: 'left',
        textDecorationLine: 'underline'
      },

      botaoEsqueci: {
        marginTop: 3,
        width: 300,
        alignItems: 'flex-start',
        textAlign: 'left',
      },

      textoOu: {
        marginTop: 20,
        fontSize: 16,
      },


      botaoFacebook: {
        marginTop: 10,

      },


      botaoCadastro: {
        marginTop: 20,
        width: 320,
        height: 35, 
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3, 
        
      },

      botaoCadastroTexto: {
          fontSize: 16, 
          fontWeight: 'bold',
      },


    }
    );
  

