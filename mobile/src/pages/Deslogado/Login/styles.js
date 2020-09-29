import { StyleSheet, StatusBar } from 'react-native';
import { ceil } from 'react-native-reanimated';

export default StyleSheet.create({
   container: {
      minWidth: '100%',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
   },
   linearGradient: {
      width: "100%",
      height: "100%",
      padding: 20,
      paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
   },

   content: {
      justifyContent: 'center'
   },

   btn: {
      marginBottom: 10,
   },

   btnFace: {
      margin: 5,
      backgroundColor: '#3949ab',
   },

   selfCenter: {
      alignSelf: "center"
   },

   txtEntrar: {
      marginVertical: 10,
      alignSelf: "center",
      textTransform: "uppercase",
   },

});
