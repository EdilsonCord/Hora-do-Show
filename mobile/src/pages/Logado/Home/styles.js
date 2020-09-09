import {StyleSheet} from 'react-native';
import material from '../../../../native-base-theme/variables/material'

export default StyleSheet.create ({
    container: {
        flex:1,
        padding: 20,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textoCabecalho:{
        fontSize: 24,
        color: material.brandSuccess,  
        marginBottom: 15,
        fontWeight: "700",
        textAlign: "center"
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
    },
    image: {

        width: '100%',
        height: undefined,
        aspectRatio: 851/351,
        resizeMode: 'contain'
    }
})