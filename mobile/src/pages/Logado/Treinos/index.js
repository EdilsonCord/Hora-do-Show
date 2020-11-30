import React, { useEffect, useState } from 'react';
import {
   View,
   Image,
   FlatList,
   SafeAreaView,
   TouchableOpacity,
} from 'react-native';

import { Container, Title, Content, H1, H2, H3, getTheme, StyleProvider, Icon, Form, Item, Input, Label, Button, Text } from 'native-base';

import material from '../../../../native-base-theme/variables/material'
import styles from './styles';
import GymIcon from '../../../assets/GymIcon.js'

import { useFocusEffect } from '@react-navigation/native';
import { Alert } from 'react-native';


export default function Exercicio({ navigation }) {
   const [dados, setDados] = useState([]);

   //Define your componentDidMount lifecycle hook that will retrieve data.
   //Also have the async keyword to indicate that it is asynchronous.
   async function loadTreinos() {
      //Have a try and catch block for catching errors.
      try {
         //Assign the promise unresolved first then get the data using the json method.
         const pokemonApiCall = await fetch('http://' + global.endereco + '/treino/get');
         const pokemon = await pokemonApiCall.json();
         setDados(pokemon);
      } catch (err) {
         console.log('Error fetching data-----------', err);
      }
   }

   // useEffect(() => {
   //    loadTreinos();
   // }, []);

   useFocusEffect(
      React.useCallback(() => {
         loadTreinos();
         // Do something when the screen is focused
         return () => {
            alert("desfocou");
            // Do something when the screen is unfocused
            // Useful for cleanup functions
         };
      }, [])
   );

   const Teste = () => (
      <Container style={styles.container}>
         <GymIcon fill={material.brandInfo} />

         <Text style={styles.textoCabecalho}>Treinos</Text>

         {/* <Icon type="MaterialCommunityIcons" name="weight-lifter" style={{marginVertical: 15, color: "#ffe42e", fontSize: 75}} /> */}

         <View style={styles.faixa}>
            <Text note style={styles.textoFaixa}>
               Escolha um dos treinos abaixo para alcançar seu objetivo
               </Text>
         </View>

         <FlatList
            data={dados}
            style={styles.listarTreinos}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
               <View>
                  { item.meta === global.user.meta ?
                     <TouchableOpacity style={styles.containerShadow} onPress={() =>
                        navigation.navigate('Exercicios', { treino: item._id, nomeTreino: item.tipo_treino })
                     }>


                        <Image source={{ uri: item.imagem }} style={{ marginLeft: "-13%", marginVertical: -10, width: 100, height: 100, borderRadius: 50, backgroundColor: "#fafafa" }} />

                        <View style={{ marginLeft: 20, width: 225 }} >
                           <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "700" }}>Treino {item.tipo_treino}</Text>
                           <Text note>{item.desc_treino}</Text>
                           <Text style={{ color: material.brandInfo, marginTop: 5, textAlign: 'right' }}>{item.exercicios.length} exercícios no total <Icon style={{ color: material.brandInfo, fontSize: 15 }} name="weight-lifter" type="MaterialCommunityIcons"></Icon></Text>
                        </View>

                     </TouchableOpacity>
                     : null}
               </View>
            )}
         />

      </Container>
   )

   return (

      <StyleProvider style={getTheme(material)}>

         {Teste()}
         {/* {useFocusEffect()} */}



      </StyleProvider>


   );
}
