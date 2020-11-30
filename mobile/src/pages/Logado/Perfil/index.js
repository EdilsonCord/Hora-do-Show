import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Modal, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

import {
   Container, CardItem,
   StyleProvider,
   getTheme
} from 'native-base';

import material from '../../../../native-base-theme/variables/material';
import styles from './styles';
import colors from 'dir-src/assets/colors.js';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const iconSize = 30;

const IconAlvo = <MCIcon name="target" size={iconSize} color={colors.red} />
const IconeBalanca = <MCIcon name="scale-bathroom" size={iconSize} color={colors.blue} />;
const IconeCalculadora = <MCIcon name="calculator-variant" size={iconSize} color={colors.green} />;
const HappyFace = <EntypoIcon name="emoji-happy" size={iconSize} color={colors.green} />;
const PokerFace = <EntypoIcon name="emoji-neutral" size={iconSize} color={colors.orange} />;
const SadFace = <EntypoIcon name="emoji-sad" size={iconSize} color={colors.red} />;

export default function SeuPerfil({ navigation }) {

   const [peso, setPeso] = useState(global.user.peso);
   const [meta, setMeta] = useState(global.user.meta);
   const [name, setName] = useState(global.user.name + ' ' + global.user.surname);

   const CalculaIMC = () => {
      const imc = parseFloat(global.user.peso) / Math.pow(global.user.altura * 0.01, 2);
      // const imc = 40;
      var retornaIMC;
      var retornaIcone;

      if (imc > 40) {
         retornaIMC = 'Obesidade Grave';
         retornaIcone = SadFace
      } else if (imc > 30) {
         retornaIMC = 'Obesidade';
         retornaIcone = SadFace;
      } else if (imc > 25) {
         retornaIMC = 'Sobrepeso';
         retornaIcone = PokerFace;
      } else if (imc > 18.5) {
         retornaIMC = 'Normal';
         retornaIcone = HappyFace;
      } else if (imc < 18.5) {
         retornaIMC = 'Magreza';
         retornaIcone = PokerFace;
      }

      return <View style={{ flexDirection: 'row', flexGrow: 1, justifyContent: 'space-between' }}>
         <Text style={styles.textInfo}>Seu IMC: {retornaIMC} </Text>
         <Text style={styles.icon}>{retornaIcone}</Text>

      </View>

   }

   const defineAvatar = () => {
      var retornaAvatar;

      if (global.user.sexo == 'Masculino') {
         retornaAvatar = 'https://i.imgur.com/kzABjUH.png'
         // retornaAvatar = 'https://avatars3.githubusercontent.com/u/50476075?s=460&u=11aba3fef6d20adac7264b36c503396700ac6182&v=4'
      } else {
         retornaAvatar = 'https://i.imgur.com/91M3k0c.png'
         // retornaAvatar = 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
      }

      return retornaAvatar
   }

   return (

      <StyleProvider style={getTheme(material)}>
         <Container style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>


               <View style={styles.scrollViewHeader}>
                  <Avatar
                     rounded
                     source={{
                        uri:
                           defineAvatar()
                        // 	'https://avatars3.githubusercontent.com/u/50476075?s=460&u=11aba3fef6d20adac7264b36c503396700ac6182&v=4'
                     }}
                     size={150}
                     onPress={() => { }}
                     showAccessory
                     accessory={{ style: { backgroundColor: '#000', borderRadius: 50 } }}
                     avatarStyle={styles.fotoPerfil}
                  />
                  <Text style={styles.textWhite}>
                     {name}
                  </Text>

               </View>

               <View style={styles.scrollViewBody}>
                  <Text style={{
                     fontSize: 24,
                     color: "#F2FDFF",
                     fontWeight: "bold",
                     marginLeft: 6,
                     marginBottom: 6
                  }}>Suas informações</Text>

                  <View style={styles.infos}>
                     <View style={{
                        flexDirection: "row",
                        alignItems: 'center',

                        borderBottomWidth: 1,
                        borderColor: colors.mainInfoBorderColor,

                        paddingBottom: 13,
                        paddingHorizontal: 13,

                        flexDirection: "row",

                     }}>
                        <Text style={styles.icon}>{IconeBalanca}</Text>
                        <Text style={styles.textInfo}>Seu Peso: {peso} Kg</Text>

                     </View>

                     <View style={styles.camposInfos}>
                        <Text style={styles.icon}>{IconAlvo}</Text>
                        <Text style={styles.textInfo}>Seu objetivo: {meta}</Text>

                     </View>

                     <View style={styles.camposInfos}>
                        <Text style={styles.icon}>{IconeCalculadora}</Text>

                        {/* <View style={{ backgroundColor: 'green', flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
									<Text style={styles.textInfo}>Seu IMC: <CalculaIMC /> </Text>
									<Text style={styles.icon}>{HappyFace}</Text>

								</View> */}
                        {/* <CalculaIMC /> */}
                        {CalculaIMC()}

                     </View>

                  </View>

                  <TouchableOpacity style={styles.fatButton}
                     onPress={() => navigation.navigate('EditPerfil')}>
                     <Text style={styles.txtFatButton}>Alterar dados</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                     style={styles.fatButtonLogout}
                     onPress={() => navigation.popToTop()}>
                     <Text style={styles.txtFatButton}>Fazer logout</Text>
                  </TouchableOpacity>
               </View >

            </ScrollView>
         </Container>
      </StyleProvider >
   );
}
