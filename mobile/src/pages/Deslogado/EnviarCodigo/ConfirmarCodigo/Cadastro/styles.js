import {StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E55F54',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
  },
  header: {

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  logo: {
    width: 164,
    height: 110,
  },
  textoImportante: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  forms: {
    width: '100%',
    flex: 1,
    marginVertical: 16,
    // backgroundColor: 'gray',
    justifyContent: 'center',
  },

  campoSexo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',

    // backgroundColor: 'black',

    marginBottom: 16,
  },
  radioButton:{
    flexDirection: "row",
    alignItems: 'center'
  },
  textoRB:{
    color: '#fff',
    fontSize: 18
  },
  insertText: {
    width: '100%',
    height: 35,
    borderRadius: 6,
    paddingLeft: 10,
    paddingTop: 7,
    paddingBottom: 7,
    fontSize: 18,
    backgroundColor: '#FFF',
    color: '#000',
    alignItems: 'center',
    marginBottom: 16,
  },

  campoDuplo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  insertValuePequeno: {
    width: '40%',
    height: 35,
    borderRadius: 6,
    paddingLeft: 10,
    paddingTop: 7,
    paddingBottom: 7,
    fontSize: 18,
    backgroundColor: '#FFF',
    color: '#000',
    alignItems: 'center',
    marginBottom: 16,
  },
  footer:{
    width: '100%',
    // backgroundColor:'gray',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // marginTop: 16,
  },
  fatButton: {
    width: '100%',
    height: 40,
    borderRadius: 6,

    marginBottom: 16,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  textoFatButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: 'white',
    fontSize: 18,
    textDecorationLine: 'underline',
  },

});
