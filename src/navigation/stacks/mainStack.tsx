import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import LoginScreen from '@/src/screens/loginScreen/loginScreen';

import stackNames from '../stackNames';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import cartScreen from '@/src/screens/cartScreen/cartScreen';

export type MainStackParamList = {
  // [stackNames.LoginScreen]: undefined;
  [stackNames.HomeScreen]: undefined;
  Cart: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={stackNames.HomeScreen}  
    >
      {/* <Stack.Screen name={stackNames.LoginScreen} component={LoginScreen} /> */}
      <Stack.Screen name={stackNames.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={stackNames.cartScreen} component={cartScreen} options={{ title: 'عربة التسوق' }} />
    </Stack.Navigator>
  );
}

