// In App.js in a new project
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main/mainScreen';
import MainSuccess from './pages/MainSuccess';

import SendCode from './pages/SendCode/SendCodeScreen';
import ConfirmCode from './pages/ConfirmCode/ConfirmCodeScreen';
import ConfirmCodSuccess from './pages/ConfirmCodeSuccess';

import SendRecoveryCode from './pages/SendRecoveryCode/SendRecoveryCodeScreen';
import GenerateNewPasswd from './pages/GenerateNewPasswd/GenerateNewPasswdScreen';
import GenerateNewPasswdSuccess from './pages/GenerateNewPasswdSuccess';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={Main} />
        <Stack.Screen name="MainSuccessScreen" component={MainSuccess} />
        
        <Stack.Screen name="SendCodeScreen" component={SendCode} />
        <Stack.Screen name="ConfirmCodeScreen" component={ConfirmCode} />
        <Stack.Screen name="ConfirmCodSuccessScreen" component={ConfirmCodSuccess} />

        <Stack.Screen name="SendRecoveryCodeScreen" component={SendRecoveryCode} />
        <Stack.Screen name="GenerateNewPasswdScreen" component={GenerateNewPasswd} />
        <Stack.Screen name="GenerateNewPasswdSuccessScreen" component={GenerateNewPasswdSuccess} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;