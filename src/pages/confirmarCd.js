import React, {Component} from 'react';
import {StyleSheet, Text, View, styles} from 'react-native';

export default class App extends Component {
    render(){
        return(
            <View style={styles.container}>
        <Image 
            source = {require('../assets/ShieldCheck.svg')}
            style = {styles.shieldcheck}/> 
            
                {/* <Text>Insira o código recebido no seu e-mail</Text> */}
                {/* <TextInput  */}
                {/* style={{ height: 40, width:250, borderColor: "black", borderWidth: 1 }} */}
                {/* onChangeText={(text) => onChangeText(text)} */}
                {/* value={value}/> */}
                
                <TextInput style =  {styles.inputcd}/>
                
                
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
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",

    },
    shieldcheck: {
      width: 91,
      height: 107,
      
    },
    botaoConfirmar: {
        position: absolute,
        width: 132,
        height: 29,
        left: 194,
        top: 475,

        background: '#D9C83A',

        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
        borderradius: 6,
    },
    botaoConfirmarTexto:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    botaoTextoVoltar: {
        alignItems: 'flex-start',
        textAlign: 'left',
        textDecorationLine: 'underline',
        color: '#FFFFFF'
      },

      botaoVoltar: {
        width: 48,
        height: 21,
        left: 76,
        top: 479,
        alignItems: 'center',
        textAlign: 'center',
      },
      inputcd: {
        marginTop: 10, 
        width: 320, 
        backgroundColor: '#ffff',
        fontSize: 16,
        borderRadius: 6,
        padding: 10,
        height: 40,
      },

    
  });