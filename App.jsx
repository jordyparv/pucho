import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/screens/AppStack';

import AuthStack from './src/screens/AuthStack';
export default function App() {
  const user = {name: 'jordan'};
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
