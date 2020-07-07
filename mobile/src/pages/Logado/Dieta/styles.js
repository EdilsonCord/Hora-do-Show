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
        backgroundColor: '#F9EE92',

        justifyContent: 'center',
        alignItems: 'center'
    },
    textoFaixa:{
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    listarIndiceRefeicoes:{
        marginTop: 20,
        width: '100%',

    },
    campoIndiceRefeicoes:{
        marginHorizontal: 10,
        height: '7%',

        justifyContent: 'flex-start',
        alignItems: 'center',

        backgroundColor:'white'
        
    },
    textoIndiceRefeicoes:{
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    }
    
})