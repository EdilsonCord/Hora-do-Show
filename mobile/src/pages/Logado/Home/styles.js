import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: '#E55F54',
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textoCabecalho:{
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',   
    },
    campoPatrocinios:{
        width: '100%',
        marginVertical: 16,
        // backgroundColor: 'white'
    },
    patrocinio:{
        marginBottom: 16,
    },
    imgpatrocinio:{
        width: '100%',
        height: undefined,
        aspectRatio: 851/351,
        borderRadius: 6,
        resizeMode: 'contain',
        // backgroundColor: 'gray'
    }
})