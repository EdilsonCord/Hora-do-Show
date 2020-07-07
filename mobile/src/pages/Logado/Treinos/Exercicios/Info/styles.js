import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E55F54',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  introducao: {
    width: '100%',
    // backgroundColor: 'white',

    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textoIntroducao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
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
  listarExercicios: {
    width: '100%',
  },
  campoExercicio: {
    marginTop: 16,

    height: 90,

    // backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgExercicio: {
    width: 120,
    height: 90,
    borderRadius: 6,
    backgroundColor: 'gray',
  },
  miniInfoExercicio: {
    marginHorizontal: 5,
    // backgroundColor: 'black',
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
  botaoConcluido: {
    height: 30,
    width: 80,
    borderRadius: 6,

    backgroundColor: '#373737',

    justifyContent: 'center',
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
  textoBotao: {
    color: '#F2FDFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
