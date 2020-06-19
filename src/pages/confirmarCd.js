import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput, StatusBar} from 'react-native';

export default class App extends Component {
    render(){
        return(
            <View style={styles.container}>
        <Image 
            source = {require('../assets/ShieldCheck.png')}
            style = {styles.shieldcheck}/> 
            <View style={styles.blockyellow}>
                <Text style = {styles.textoconfirmar}> Insira o código recebido no seu e-mail</Text> 
                
                {/* <TextInput  */}
                {/* style={{ height: 40, width:250, borderColor: "black", borderWidth: 1 }} */}
                {/* onChangeText={(text) => onChangeText(text)} */}
                {/* value={value}/> */}
                
                <TextInput style =  {styles.inputcd1}
                keyboardType = 'numeric'
                placeholder = "Código de Confirmação"/>
                
                </View>
                
            <TouchableOpacity style = {styles.botaoConfirmar}
            onPress = { () => {this.clicou()} }>
            <Text style = {styles.botaoConfirmarTexto}> Confirmar </Text> 
            </TouchableOpacity>
            
            <TouchableOpacity style = {styles.botaoVoltar}
            onPress = { () => {this.clicou()} }>
          
            <Text style = {styles.botaoTextoVoltar}> Voltar </Text>
          
            </TouchableOpacity>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E55F54",
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: "center",
      paddingHorizontal: 20,
      paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    
    },
    textoconfirmar: {

        width: 261,
        height: 56,
        marginTop: 44,
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 28,
        textAlign: 'center'

    },
    shieldcheck: {
      
      width: 100,
      height: 120,
      bottom: 90,
      
    },
    blockyellow:{
        width:320,
        height: 230,
        bottom: 70,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#D9C83A',
        borderRadius: 18,
        paddingHorizontal: 20,
        //sombreamento
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    botaoConfirmar: {
        width: 132,
        height: 29,
        left: 90,
        bottom: 40,

        backgroundColor: '#D9C83A',

        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 6,
    },
    botaoConfirmarTexto:{
        fontSize: 18,
        fontWeight: 'bold',
    
    },
    botaoTextoVoltar: {
        alignItems: 'flex-start',
        textAlign: 'left',
        textDecorationLine: 'underline',
        color:'white'
      },

      botaoVoltar: {
        width: 132,
        height: 29,
        left: -50,
        bottom: 60,

        
        
      },
    //   inputcd1: {
      //  width: 40,
      //  height: 50,
      //  left: 20,
      //  top: 136,
       // backgroundColor: '#FFFFFF',
       // borderRadius: 20
     // },
      inputcd1: {
        marginTop: 36, 
        width: '100%',
       // textAlign: 'center', 
        alignItems: 'center',
        backgroundColor: '#ffff',
        fontSize: 16,
        borderRadius: 6,
        padding: 10,
        height: 40,
      },
    



    
  });