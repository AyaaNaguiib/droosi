import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/src/screens/loginScreen/loginScreen';

import stackNames from '../stackNames';
import HomeScreen from '../HomeScreen';

export type MainStackParamList = {
  [stackNames.LoginScreen]: undefined;
  [stackNames.HomeScreen]: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={stackNames.LoginScreen}  
    >
      <Stack.Screen name={stackNames.LoginScreen} component={LoginScreen} />
      <Stack.Screen name={stackNames.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
}

