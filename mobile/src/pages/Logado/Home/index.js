import React from 'react';
import {View, Text, Image} from 'react-native';

import MCIcons from 'react-native-vector-icons/Feather';
import MCIcons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const IconeHome = <MCIcons name="home" size={25} color="#fff" />;
const IconeHome2 = <MCIcons2 name="home" size={25} color="#fff" />;
const IconeHome3 = <FontAwesome5 name={'home'} size={25} color="#fff" />;

import styles from './styles';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{IconeHome}</Text>
      <Text>{IconeHome2}</Text>
      <Text>{IconeHome3}</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={{width: 50, height: 50}}
      />
    </View>
  );
}
