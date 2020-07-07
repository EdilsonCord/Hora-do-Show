import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/Logado/Home';

import treinos from '../pages/Logado/Treinos';
import exercicios from '../pages/Logado/Treinos/Exercicios';
import info from '../pages/Logado/Treinos/Exercicios/Info';

import dieta from '../pages/Logado/Dieta';
import perfil from '../pages/Logado/Perfil';

const size = 25;

const IconeHome = <MCIcons name="home" size={size} color="#E55F54" />;
const IconeTreino = <MCIcons name="dumbbell" size={size} color="#E55F54" />;
const IconeDieta = <MCIcons name="food-apple" size={size} color="#E55F54" />;
const IconePerfil = <MCIcons name="account" size={size} color="#E55F54" />;

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

const Tab = createBottomTabNavigator();

export default function logadoRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{}}
      tabBarOptions={{
        showLabel: false,
        inactiveBackgroundColor: '#373737',
        activeBackgroundColor: '#F9EE92',
        // inactiveBackgroundColor: '#0B6285',
        // activeBackgroundColor: '#0B5080',
        // activeTintColor: '#fff',
        // inactiveTintColor: '#000',
        tabStyle: {
          
        },
        style: {
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => IconeHome,
        }}
      />

      <Tab.Screen
        name="Treino"
        component={StackTelaTreinos}
        options={{
          tabBarIcon: () => IconeTreino,
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
