import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Live from './Live';
import Listener from './Listener';
import Test from './Test';
export default function AppStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Test">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Live" component={Live} />
      <Stack.Screen name="Listener" component={Listener} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
}
