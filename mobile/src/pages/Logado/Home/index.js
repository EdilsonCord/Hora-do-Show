import React, { useEffect, useState } from 'react';

import { View, Image, ScrollView } from 'react-native';
import Tabbar from '../../../assets/Tabbar/Tabbar';
import {
   Container,
   Header,
   Content,
   H1,
   H2,
   H3,
   getTheme,
   StyleProvider,
   Left,
   Right,
   Card,
   CardItem,
   Body,
   Icon,
   Form,
   Item,
   Input,
   Label,
   Button,
   Text,
} from 'native-base';

import material from '../../../../native-base-theme/variables/material';
import styles from './styles';

export default function Home({ navigation }) {

   ////
   /// GAMBIARRA N MEXER
   ///

   const [Alimentos, setAlimentos] = useState([]);


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
   }

   useEffect(() => {
      loadAlimentos(global.user.meta);
   }, []);

   ////
   /// FIM DA GAMBIARRA
   //

   return (
      <StyleProvider style={getTheme(material)}>
         <Container style={styles.container}>
            <Image
               style={{
                  tintColor: material.brandSuccess,
                  width: 100,
                  height: 100,
                  marginBottom: 10,
               }}
               source={require('../../../assets/marketing.png')}
            />

            <Text style={styles.textoCabecalho}>PATROCINADORES</Text>
            <Content showsVerticalScrollIndicator={false}>
               <Body>
                  <Card style={{ marginBottom: 25 }}>
                     <CardItem cardBody>
                        <Image
                           style={styles.image}
                           source={require('../../../assets/laVidaFit.png')}
                        />
                     </CardItem>
                     {/* <CardItem cardBody>
								<Body style={{ alignContent: 'center' }}>
									<Button rounded full success>
										<Text>Visitar Site</Text>
									</Button>
								</Body>
							</CardItem> */}
                  </Card>

                  <Card style={{ marginBottom: 25 }}>
                     <CardItem cardBody>
                        <Image
                           style={styles.image}
                           source={require('../../../assets/laVidaFit.png')}
                        />
                     </CardItem>
                     {/* <CardItem cardBody>
                        <Body style={{ alignContent: 'center' }}>
                           <Button rounded full success>
                              <Text>Visitar Site</Text>
                           </Button>
                        </Body>
                     </CardItem> */}
                  </Card>

                  <Card>
                     <CardItem cardBody>
                        <Image
                           style={styles.image}
                           source={require('../../../assets/laVidaFit.png')}
                        />
                     </CardItem>
                     {/* <CardItem cardBody>
                        <Body style={{ alignContent: 'center' }}>
                           <Button rounded full success>
                              <Text>Visitar Site</Text>
                           </Button>
                        </Body>
                     </CardItem> */}
                  </Card>
               </Body>
            </Content>
         </Container>
      </StyleProvider>
   );
}
