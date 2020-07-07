import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E55F54',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerTotal: {
    width: '100%',
    height: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'gray'
  },
  headerInicio:{

  },
  inicio: {
    width: '100%',
    
    backgroundColor: 'white',

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  video: {
    // width: '100%',
    // height: '80%',
    width: 100, 
    height: 100,
    resizeMode: 'cover'
  },
  headerFaixa:{
    width: '120%',
  },
  faixa: {
    width: '100%',
    height: 30,
    backgroundColor: '#373737',

    justifyContent: 'center',
    alignItems: 'center',
  },
  textoFaixa: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center',
  },
  scrollView:{
    marginTop: 10,
  },
  campoInfoExercicio: {

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textoInfoTitulo: {
    color: '#F2FDFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:16
  },
  textoInfoDescAbaixo: {
    color: '#000',
    fontSize: 16,
    paddingLeft: 10,
    textAlign: 'justify',
    marginTop: -16,
    marginBottom: 16
  },
  textoInfoDescLado: {
    color: '#F9EE92',
    fontSize: 18,
    fontWeight: 'bold',
  },

});
