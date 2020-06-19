// In App.js in a new project
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main/mainScreen';
import SendCode from './pages/SendCode/SendCodeScreen';
import ConfirmCode from './pages/ConfirmCode/ConfirmCodeScreen';
import SendRecoveryCode from './pages/SendRecoveryCode/SendRecoveryCodeScreen';
import GenerateNewPasswd from './pages/GenerateNewPasswd/GenerateNewPasswdScreen';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Main">
        <Stack.Screen name="MainScreen" component={Main} />
        <Stack.Screen name="SendCodeScreen" component={SendCode} />
        <Stack.Screen name="ConfirmCodeScreen" component={ConfirmCode} />
        <Stack.Screen name="SendRecoveryCodeScreen" component={SendRecoveryCode} />
        <Stack.Screen name="GenerateNewPasswdScreen" component={GenerateNewPasswd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;