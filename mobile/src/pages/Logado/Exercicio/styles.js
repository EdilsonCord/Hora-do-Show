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
    faixa:{
        marginTop: 25,
        width: '120%',
        height: '10%',
        backgroundColor: '#373737',

        justifyContent: 'center',
        alignItems: 'center'
    },
    textoFaixa:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    listarTreinos:{
        marginTop: 40,
        width: '100%',
    },
    campoTreino:{
        borderRadius: 8,
        marginVertical: 10,
        
        height: 60,
        backgroundColor: '#F9EE92',

        justifyContent: 'center',
        alignItems: 'center'
    },
    textoCampoTreino:{
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    }
    
})