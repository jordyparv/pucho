import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Listener from './Listener';
import Stories from './Stories';
import UserProfile from './UserProfile';
import Notifications from './Notifications';
import UserStory from '../components/UserStory';
export default function AppStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Listener" component={Listener} />
      <Stack.Screen name="Stories" component={Stories} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="UserStory" component={UserStory} />
    </Stack.Navigator>
  );
}
