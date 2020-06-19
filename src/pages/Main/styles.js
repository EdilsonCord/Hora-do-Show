import {StyleSheet, StatusBar} from 'react-native';
import {ceil} from 'react-native-reanimated';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E55F54',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },

  input: {
    marginTop: 16,
    width: '100%',
    height: 35,

    borderRadius: 6,
    paddingLeft: 10,
    paddingVertical: 7,

    color: '#000',
    alignItems: 'center',

    backgroundColor: '#ffff',
    fontSize: 18,
  },

  layerLink: {
    marginTop: 10,
    paddingLeft: 10,
    width: '100%',
    alignItems: 'flex-start',
  },

  link: {
    color: '#000',
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  botao: {
    marginTop: 31,
    backgroundColor: '#D9C83A',
    width: '100%',
    height: 40,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  botaoText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

  grupoOu: {
    marginTop: 13,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  horizontalLine:{
    backgroundColor: '#000',
    height: 1.5,
    width: '40%',
  },

  textoOu: {
    fontSize: 18,
  },

  botaoCadastro: {
    marginTop: 16,
    width: '100%',
    height: 40,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  botaoFacebook: {
    width: '100%',
    marginTop: 16,
    paddingVertical: 4,
    paddingHorizontal: 20,
    backgroundColor: '#3B5999',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  botaoGoogle: {
    width: '100%',
    marginTop: 16,
    paddingVertical: 4,
    paddingHorizontal: 5,
    backgroundColor: '#57B3EE',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
