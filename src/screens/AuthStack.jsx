import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../components/Login';
import EnterName from '../components/EnterName';
import OTP from '../components/OTP';
export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="EnterName" component={EnterName} />
    </Stack.Navigator>
  );
}
