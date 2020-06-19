// In App.js in a new project
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/MainScreen/main';
import SendCode from './pages/SendCodeScreens/SendCodeScreen';
import GenerateNewPasswd from './pages/GenerateNewPasswd/index';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Main">
        <Stack.Screen name="MainScreen" component={Main} />
        <Stack.Screen name="SendCodeScreen" component={SendCode} />
        <Stack.Screen name="GenerateNewPasswdScreen" component={GenerateNewPasswd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

// /* eslint-disable prettier/prettier */
// const express = require('express');
// const routes = express.Router();

// const ProductController = require('./controllers/ProductController');

// routes.get('/products', ProductController.index); 

// module.exports = routes;
