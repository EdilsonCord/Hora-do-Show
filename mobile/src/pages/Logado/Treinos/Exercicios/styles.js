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
  headerTotal: {
    width: '100%',
    height: '25%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16

    // backgroundColor: 'gray'
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
    marginBottom: 5,
  },
  headerFaixa: {
    width: '120%',
  },
  faixa: {
    // marginTop: 10,
    width: '100%',
    height: 30,
    backgroundColor: '#F9EE92',
    // opacity: 0.5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  textoFaixa: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listarExercicios: {
    width: '100%',
  },
  campoExercicio: {
    marginBottom: 16,

    height: 120,

    padding: 5,
    // backgroundColor: '#E55F54',
    // borderRadius: 6,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  campoExercicioConcluido: {
    marginBottom: 16,

    height: 120,

    padding: 5,
    backgroundColor: '#187835',
    borderRadius: 6,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgExercicio: {
    width: 120,
    height: '100%',
    // resizeMode: 'center',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#373737'
  },
  miniInfoExercicio: {
    height: '100%',
    width: 145,
    paddingVertical: 5,

    // backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'flex-start'

  },
  tituloInfoTreino: {
    color: '#F2FDFF',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
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
    borderRadius: 6,

    paddingHorizontal: 10,

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
