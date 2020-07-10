import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconePerfil = <MCIcons name="account" size={25} color="gray" />;

import styles from './styles';

export default function Perfil({navigation}) {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}>
      {/* Standard Avatar with edit button */}
      <Avatar
        style={styles.fotoPerfil}
        source={IconePerfil}
        showEditButton={true}
      />
      <View style={styles.body}>
        <TouchableOpacity style={styles.fatButton}>
          <Text style={styles.txtFatButton}>Minhas informações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fatButton}>
          <Text style={styles.txtFatButton}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fatButtonLogout}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.txtFatButton}>Logout</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
