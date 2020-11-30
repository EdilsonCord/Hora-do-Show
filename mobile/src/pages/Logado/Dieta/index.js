import React, { useEffect, useState } from 'react';
import {
   View,
   Image,
   FlatList,
   SafeAreaView,
   TouchableOpacity,
   SectionList,
} from 'react-native';

import { Container, Header, Content, H1, H2, H3, getTheme, StyleProvider, Left, Right, Card, List, ListItem, CardItem, Body, Icon, Form, Item, Input, Label, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import material from '../../../../native-base-theme/variables/material'
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

import DietIcon from '../../../assets/DietIcon.js';

import { useFocusEffect } from '@react-navigation/native';

export default function Dieta({ navigation }) {

   const [Alimentos, setAlimentos] = useState({
      "meta": "Crescer",
      "alimentosCafe": [
        {

        },
      ],
      "alimentosLancheM": [
        {

        } ],
      "alimentosAlmoco": [
        {

        }
      ],
      "alimentosLancheT": [
        {

        },
      ],
      "alimentosJanta": [
        {

        },
      ],
      "_id": "5fc2e937961ea50017afee2a",
      "nome_Dieta": "Crescer",
      "descricao_Dieta": "Dieta para crescer",
      "__v": 0
    });

   const [calorias, setCalorias] = useState({
      cafe: 0,
      lancheM: 0,
      almoco: 0,
      lancheT: 0,
      janta: 0
   })


   async function loadAlimentos(meta) {
      //Have a try and catch block for catching errors.
      try {
         //Assign the promise unresolved first then get the data using the json method.
         const pokemonApiCall = await fetch('http://' + global.endereco + '/dieta/get/nome/' + meta);
         const pokemon = await pokemonApiCall.json();
         setAlimentos(pokemon);
         global.Alimentos = pokemon;
         console.log(pokemon)
      } catch (err) {
         console.log('Error fetching data-----------', err);
      }

      if(global.Alimentos.alimentosCafe.length > 0 ){

      var kcalCafe = 0;
      for (var x = 0; x < global.Alimentos.alimentosCafe.length; x++) {
         kcalCafe = kcalCafe + parseInt(global.Alimentos.alimentosCafe[x].kcal_Alimento)
      }

      var kcalLancheM = 0;
      for (var x = 0; x < global.Alimentos.alimentosLancheM.length; x++) {
         kcalLancheM = kcalLancheM + parseInt(global.Alimentos.alimentosLancheM[x].kcal_Alimento)
      }

      var kcalAlmoco = 0;
      for (var x = 0; x < global.Alimentos.alimentosAlmoco.length; x++) {
         kcalAlmoco = kcalAlmoco + parseInt(global.Alimentos.alimentosAlmoco[x].kcal_Alimento)
      }

      var kcalLancheT = 0;
      for (var x = 0; x < global.Alimentos.alimentosLancheT.length; x++) {
         kcalLancheT = kcalLancheT + parseInt(global.Alimentos.alimentosLancheT[x].kcal_Alimento)
      }

      var kcalJanta = 0;
      for (var x = 0; x < global.Alimentos.alimentosJanta.length; x++) {
         kcalJanta = kcalJanta + parseInt(global.Alimentos.alimentosJanta[x].kcal_Alimento)
      }

      setCalorias({
         cafe: kcalCafe,
         lancheM: kcalLancheM,
         almoco: kcalAlmoco,
         lancheT: kcalLancheT,
         janta: kcalJanta
      })
   }

   }

   const f1 = [
      {
         id: '1',
         titulo: 'Café da Manhã',
         alimentos: Alimentos.alimentosCafe,
         kcal: calorias.cafe
      },
      {
         id: '2',
         titulo: 'Lanche da Manhã',
         alimentos: Alimentos.alimentosLancheM,
         kcal: calorias.lancheM
      },
      {
         id: '3',
         titulo: 'Almoço',
         alimentos: Alimentos.alimentosAlmoco,
         kcal: calorias.almoco
      },
      {
         id: '4',
         titulo: 'Lanche da Tarde',
         alimentos: Alimentos.alimentosLancheT,
         kcal: calorias.lancheT
      },
      {
         id: '5',
         titulo: 'Janta',
         alimentos: Alimentos.alimentosJanta,
         kcal: calorias.janta
      },
   ];


   useFocusEffect(
      React.useCallback(() => {
         loadAlimentos(global.user.meta);

         // Do something when the screen is focused
         return () => {
            // Do something when the screen is unfocused
            // Useful for cleanup functions
         };
      }, [])
   );



   function CalcularCaloria(item) {
      var caloriaTotal = 0;

      console.log("Ué: ", item.length)
      for (var x = 0; x < item.length; x++) {
         console.log("Ué: ", caloriaTotal)
         caloriaTotal = caloriaTotal + parseInt(item[x].kcal_Alimento)
      }
      return caloriaTotal
   }

   const Teste = () => (
      <Container style={styles.container}>

         <View style={{ justifyContent: "space-between", padding: 15, flexDirection: 'row', height: "15%", width: "100%" }}>

            <View>
               <Text note>Refeições de</Text>
               <Text style={{ fontSize: 24 }}>Hoje</Text>
            </View>

            {/* <DietIcon fill={material.brandDanger} width="75"/> */}


            <Button rounded block danger>
               <Text style={styles.textoFaixa}>
                  Dia 1
            </Text>
            </Button>
         </View>


         <FlatList
            data={f1}
            style={styles.listarIndiceRefeicoes}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
               <View style={styles.containerRefeicoes}>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                     <Text style={styles.textoIndiceRefeicoes}>{item.titulo}</Text>
                     <Text note>{item.kcal} kcal</Text>
                  </View>

                  <FlatList
                     data={item.alimentos}
                     horizontal={true}
                     style={styles.listarIndiceRefeicoes}
                     showsHorizontalScrollIndicator={false}
                     renderItem={({ item }) => (<TouchableOpacity style={styles.containerShadow} onPress={() =>
                        navigation.navigate('Alimento', { alimento: item })
                     }>
                        <Card transparent style={{ height: 150 }}>
                           <Body >
                              <Image
                                 style={{ width: 100, height: 100, resizeMode: "contain", marginBottom: 15 }}
                                 source={{ uri: item.imagem }} />
                              <Text note>{item.nome_Alimento}</Text>
                           </Body>
                        </Card>
                     </TouchableOpacity>

                     )}
                  />
               </View>

            )}
         />

      </Container>
   )

   return (
      Alimentos === undefined ? null :
         <StyleProvider style={getTheme(material)}>
            {Teste()}

         </StyleProvider>

   );
}
