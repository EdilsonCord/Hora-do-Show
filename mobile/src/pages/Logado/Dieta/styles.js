import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
    container: {
        flex:1,
        padding: 20,
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: "center",
    },
    containerRefeicoes: {
        backgroundColor: "#273645", 
        paddingTop: 20, 
        paddingHorizontal: 20, 
        marginBottom: 20, 
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
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
        width: '35%',
        height: '60%',
        borderRadius: 20,
        backgroundColor: '#d9534f',

        justifyContent: 'center',
        alignItems: 'center'
    },
    textoFaixa:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    listarIndiceRefeicoes:{
        marginTop: 20,
        width: '100%',

    },
    campoIndiceRefeicoes:{
        marginHorizontal: 10,
        //height: '7%',

        justifyContent: 'flex-start',
        alignItems: 'center',

        
        
    },
    textoIndiceRefeicoes:{
        color: '#fafafa',
        fontSize: 18,
        fontWeight: 'bold',
    },

    item: {
      
      backgroundColor: "white",
       
      marginVertical: 7,
      fontSize: 10,
      height: 30
      },
      titulo: {
        
        fontSize: 20,
        alignItems: 'center', 
        flexDirection: 'column',
        
      },

      headersl: {
        marginTop: 40,
     
        backgroundColor: '#F9EE92',

        justifyContent: 'center',
        alignItems: 'center'
      },
      
      
})