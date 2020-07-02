import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';

export default function Perfil({navigation}){
    return(
        <View style={styles.container}>
            {/* <Image 
            style={{width: 100, height:100}}
            source={require('../../../assets/faladinho.jpg')} /> */}
            <Text>Perfil</Text>
        </View>
    )
}