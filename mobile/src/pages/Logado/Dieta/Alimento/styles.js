import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

import colors from 'dir-src/assets/colors.js'

const win = Dimensions.get('window');
const ratio = win.width / 541;

export default StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.mainBackgroundColor,
      padding: 20,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
   },
   headerTotal: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',

      // backgroundColor: 'gray'
   },
   inicio: {
      width: '100%',
      marginTop: 15,
      justifyContent: 'flex-start',
      alignItems: 'center',
   },
   imagem: {
      width: 150,
      height: 150,
      resizeMode: "contain"
      // height: '80%',
      // width: win.width,
      // height: 300 * ratio,
      // resizeMode: 'stretch',

   },
   headerFaixa: {
      width: '120%',
   },
   faixa: {
      width: '100%',
      height: 30,
      backgroundColor: colors.mainFaixaColor,

      justifyContent: 'center',
      alignItems: 'center',
   },
   textoFaixa: {
      color: colors.mainFaixaTextColor,
      fontSize: 20,
      fontWeight: 'bold',
      width: '80%',
      textAlign: 'center',
   },
   scrollView: {
      marginTop: 15,
   },
   campoInfoExercicio: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
   },
   textoInfoTitulo: {
      color: colors.mainTitleColor,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16
   },
   textoInfoDescAbaixo: {
      marginRight: 5,
      color: colors.mainTextColor,
      fontSize: 16,
      paddingLeft: 10,
      textAlign: 'justify',
      marginTop: -16,
      marginBottom: 16
   },
   textoInfoDescLado: {
      color: colors.mainTextDestacado,
      fontSize: 18,
      fontWeight: 'bold',
   },

   faixaDetalhes: {
      marginTop: 30,
      //marginBottom: 30,
      width: '120%',
      height: 30,
      backgroundColor: '#676767',
      justifyContent: 'center',
      alignItems: 'center',
   },

   textoFaixaDetalhes: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      width: '80%',
      textAlign: 'center',
      flex: 1,
   },

});
