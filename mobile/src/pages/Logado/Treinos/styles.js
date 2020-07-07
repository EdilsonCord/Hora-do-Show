import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: '#E55F54',
        padding: 20,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },
    headerTotal: {
        width: '100%',
        height: '21%',
        justifyContent: 'space-between',
        alignItems: 'center',

        // backgroundColor: 'gray'
      },
    introducao: {
        width: '100%',
        // backgroundColor: 'white',

        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    textoIntroducao:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    headerFaixa:{
        width: '120%',
      },
    faixa:{
        // marginTop: 10,
        width: '100%',
        height: 60,
        backgroundColor: '#373737',
        // opacity: 0.5,

        justifyContent: 'center',
        alignItems: 'center'
    },
    textoFaixa:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        width: '80%',
        textAlign: "center"
    },
    listarTreinos:{
        width: '100%',
    },
    organizarlistaTreinos:{
        alignItems: 'center',
        // backgroundColor: 'gray',
        marginTop: 20,

    },
    campoTreino:{
        borderRadius: 8,
        width: '100%',
        height: 60,
        backgroundColor: '#F9EE92',
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoCampoTreino:{
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },
    campoDesc:{
        width: '90%',
        backgroundColor: '#373737',
        borderBottomStartRadius: 8,
        borderBottomEndRadius: 8,

    },
    textCampoDesc:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'

    }
    
})