import {StyleSheet, StatusBar} from 'react-native';

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
  textoconfirmar: {
    width: 261,
    height: 56,
    marginTop: 44,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
    textAlign: 'center',
  },
  blockyellow: {
    width: 320,
    height: 230,
    marginVertical: 40,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#D9C83A',
    borderRadius: 18,
    paddingHorizontal: 20,
    //sombreamento
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  DoubleButtons: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 28,
  },
  link: {
    color: 'white',
    fontSize: 18,
    lineHeight: 21,
    textDecorationLine: 'underline',
  },
  action: {
    backgroundColor: '#D9C83A',
    borderRadius: 6,
    width: 132,
    height: 29,
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
  actionText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  //   inputcd1: {
  //  width: 40,
  //  height: 50,
  //  left: 20,
  //  top: 136,
  // backgroundColor: '#FFFFFF',
  // borderRadius: 20
  // },
  inputcd1: {
    marginTop: 36,
    width: '100%',
    // textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    fontSize: 16,
    borderRadius: 6,
    padding: 10,
    height: 40,
  },
});
