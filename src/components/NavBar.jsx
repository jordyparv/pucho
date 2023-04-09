import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

const list = [
  {title: 'Home', icon: 'home', screen: 'Home'},
  {title: 'Search', icon: 'search', screen: 'Search'},
  {title: 'Live', icon: 'mic', screen: 'Live'},
  {title: 'Profile', icon: 'person', screen: 'Profile'},
];

export default function NavBar() {
  return (
    <View className="p-2 bg-black flex-row justify-around">
      {list.map(_ => (
        <TouchableOpacity
          className="p-1"
          key={Math.random().toString(12).substring(0)}>
          <Icons name={_.icon} color="#f9f9f9" size={26} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
