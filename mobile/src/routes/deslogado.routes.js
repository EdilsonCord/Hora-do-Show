// In App.js in a new project
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Deslogado/Login/mainScreen';

import EnviarCodigo from '../pages/Deslogado/EnviarCodigo/SendCodeScreen';
import ConfirmarCodigo from '../pages/Deslogado/ConfirmarCodigo/ConfirmCodeScreen';
import CadastrarInfo from '../pages/Deslogado/Cadastro/Cadastro';

import EnviarCodigoRecuperacao from '../pages/Deslogado/EnviarCodigoRecuperacao/SendRecoveryCodeScreen';
import GerarNovaSenha from '../pages/Deslogado/GerarNovaSenha/GenerateNewPasswdScreen';
import NovaSenhaGerada from '../pages/Deslogado/NovaSenhaGerada/index';

import logadoRoutes from './logado.routes';

const Stack = createStackNavigator();

export default function deslogadoRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={Login} />
        <Stack.Screen name="MainSuccessScreen" component={logadoRoutes} />
        
        <Stack.Screen name="SendCodeScreen" component={EnviarCodigo} />
        <Stack.Screen name="ConfirmCodeScreen" component={ConfirmarCodigo} />
        <Stack.Screen name="ConfirmCodSuccessScreen" component={CadastrarInfo} />

        <Stack.Screen name="SendRecoveryCodeScreen" component={EnviarCodigoRecuperacao} />
        <Stack.Screen name="GenerateNewPasswdScreen" component={GerarNovaSenha} />
        <Stack.Screen name="GenerateNewPasswdSuccessScreen" component={NovaSenhaGerada} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}