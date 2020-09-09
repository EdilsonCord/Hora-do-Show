import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/Logado/Home';

import treinos from '../pages/Logado/Treinos';
import exercicios from '../pages/Logado/Treinos/Exercicios';
import info from '../pages/Logado/Treinos/Exercicios/Info';

import dieta from '../pages/Logado/Dieta';
import perfil from '../pages/Logado/Perfil';
import material from '../../native-base-theme/variables/material'

import {Icon} from 'native-base';


const size = 30;


const Stack = createStackNavigator();

function StackTelaTreinos() {
  return (
    <Stack.Navigator
      initialRouteName="Treinos"

      screenOptions={{
        headerStyle: {
          backgroundColor: '#E55F54',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      }}>

      <Stack.Screen
        name="Treinos"
        component={treinos}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Exercicios" component={exercicios}  options={{title: 'Seus Exercícios'}}/>
      <Stack.Screen name="Informacoes" component={info} options={{title: 'Informações do Exercício'}}/>
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function logadoRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fafafa"
      inactiveColor="#757575"
      barStyle={{ backgroundColor: '#273645' }}
      >
      <Tab.Screen
        name="Home"
        component={Home}
        
        
        options={{       
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" color={focused ? material.brandSuccess : "#757575"} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Treino"
        component={StackTelaTreinos}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="weight-lifter" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Dieta"
        component={dieta}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food-apple-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={perfil}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
