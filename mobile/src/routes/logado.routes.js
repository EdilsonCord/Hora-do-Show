import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../pages/Logado/Home';
import exercicio from '../pages/Logado/Exercicio';
import dieta from '../pages/Logado/Dieta';
import perfil from '../pages/Logado/Perfil';

const size = 25;

const IconeFeather = <Feather name="fe" size={size} color="#000" />;
const IconeHome = <MCIcons name="home" size={size} color="#000" />;
const IconeExercicio = <MCIcons name="dumbbell" size={size} color="#000" />;
// const IconeExercicio = <MCIcons name="run" size={size} color="#000" />;
const IconeDieta = <MCIcons name="food-apple" size={size} color="#000" />;
const IconePerfil = <MCIcons name="account" size={size} color="#000" />;

const Tab = createBottomTabNavigator();
// const Tab = createBottomTabNavigator();

export default function logadoRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{

      }}
      tabBarOptions={{
        showLabel: false,
        inactiveBackgroundColor:'#696969',
        activeBackgroundColor: '#8b7b8b',
        tabStyle:{
          
        }

      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => IconeHome,
        }}
      />

      <Tab.Screen
        name="Exercicio"
        component={exercicio}
        options={{
          tabBarIcon: () => IconeExercicio,
        }}
      />

      <Tab.Screen
        name="Dieta"
        component={dieta}
        options={{
          tabBarIcon: () => IconeDieta,
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={perfil}
        options={{
          tabBarIcon: () => IconePerfil,
        }}
      />
    </Tab.Navigator>
  );
}
