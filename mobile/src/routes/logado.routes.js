import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from 'dir-src/assets/colors.js';

import Home from '../pages/Logado/Home';

import treinos from '../pages/Logado/Treinos';
import exercicios from '../pages/Logado/Treinos/Exercicios';
import info from '../pages/Logado/Treinos/Exercicios/Info';

import dieta from '../pages/Logado/Dieta';

import perfil from '../pages/Logado/Perfil';
import editPerfil from '../pages/Logado/Perfil/EditarPerfil';

import material from '../../native-base-theme/variables/material'

import { Icon } from 'native-base';


const size = 24;


const Stack = createStackNavigator();

function StackTelaTreinos() {
	return (
		<Stack.Navigator
			initialRouteName="Treinos"

			screenOptions={{
				headerStyle: {
					backgroundColor: colors.headerColor,
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},

			}}>

			<Stack.Screen
				name="Treinos"
				component={treinos}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Exercicios" component={exercicios} options={{ title: 'Seus Exercícios' }} />
			<Stack.Screen name="Informacoes" component={info} options={{ title: 'Informações do Exercício' }} />
		</Stack.Navigator>
	);
}

function StackTelaPerfil() {
	return (
		<Stack.Navigator
			initialRouteName="SeuPerfil"

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
				name="SeuPerfil"
				component={perfil}
				options={{ headerShown: false }}
			/>

			<Stack.Screen name="EditPerfil" component={editPerfil} options={{ title: 'Editando seus dados' }} />
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
						<MaterialCommunityIcons name="home" color={focused ? material.brandSuccess : "#757575"} size={size} />
					),
				}}
			/>

			<Tab.Screen
				name="Treino"
				component={StackTelaTreinos}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="weight-lifter" color={color} size={size} />
					),
				}}
			/>

			<Tab.Screen
				name="Dieta"
				component={dieta}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="food-apple-outline" color={color} size={size} />
					),
				}}
			/>

			<Tab.Screen
				name="Perfil"
				component={StackTelaPerfil}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="account" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
