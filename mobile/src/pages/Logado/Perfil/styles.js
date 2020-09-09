import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E55F54',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fotoPerfil: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  body: {
    width: '100%',
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

    // backgroundColor: '#000'
  },
  fatButton: {
    width: '60%',
    height: 40,

    borderRadius: 6,
    backgroundColor: '#fff',

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

    marginBottom: 16,
  },
  txtFatButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fatButtonLogout: {
    width: '60%',
    height: 40,

    borderRadius: 6,
    backgroundColor: '#D9C83A',

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

    marginBottom: 16,
  },
});
