import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
    container: {
        flex:1,
        padding: 20,
        flexDirection: 'column',
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

    textoCabecalho:{
        fontSize: 24,
        color: '#62B1F6',  
        textTransform: "uppercase",
        marginBottom: 15,
        fontWeight: "700",
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
    containerShadow: {
        flex: 1, flexDirection: 'row',
        marginLeft: "12%",
        backgroundColor: "#273645", 
        marginBottom: 15, 
        paddingTop: 20,
        paddingBottom: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    campoDesc:{
        width: '90%',
        backgroundColor: '#373737',
        borderBottomStartRadius: 8,
        borderBottomEndRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,

    },
    textoFaixa:{
        margin: 10,
        textAlign: "center",
        fontWeight: "700"

    },
    textCampoDesc:{
        fontWeight: 'bold',
        textAlign: 'center'

    }
    
})