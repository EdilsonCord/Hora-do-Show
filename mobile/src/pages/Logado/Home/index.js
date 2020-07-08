import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconeHome = <MCIcons name="home" size={25} color="#fff" />;
import styles from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.textoCabecalho}>Patrocinadores</Text>
        <View style={styles.campoPatrocinios}>
          <View style={styles.patrocinio}>
            <Image
              style={styles.imgpatrocinio}
              source={require('../../../assets/laVidaFit.png')}
            />
          </View>
          <View style={styles.patrocinio}>
            <Image
              style={styles.imgpatrocinio}
              source={require('../../../assets/laVidaFit.png')}
            />
          </View>
        </View>
    </View>
  );
}
