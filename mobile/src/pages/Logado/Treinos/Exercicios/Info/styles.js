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
  header: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'gray'
  },
  inicio: {
    width: '100%',
    
    backgroundColor: 'white',

    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '80%',

  },
  textoIntroducao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  headerFaixa:{
    marginHorizontal: -10,

  },
  faixa: {
    marginTop: 16,

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
  campoExercicio: {
    marginTop: 16,

    height: 90,

    // backgroundColor: 'white',

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloInfoTreino: {
    color: '#F2FDFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricaoInfoTreino: {
    color: '#F2FDFF',
    fontSize: 16,
    fontWeight: 'normal',
  },
  maisInfoTreino: {
    color: '#F2FDFF',
    fontSize: 14,
    fontWeight: 'normal',
    textDecorationLine: 'underline',
  },

});
