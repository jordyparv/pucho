import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import PhotoIcon from 'react-native-vector-icons/Foundation';
import {useNavigation} from '@react-navigation/native';

const list = [
  {
    title: 'Home',
    icon: <Icons name="home" color="#f9f9f9" size={26} />,
    screen: 'Home',
  },
  // {
  //   title: 'Search',
  //   icon: <Icons name="search" color="#f9f9f9" size={26} />,
  //   screen: 'Search',
  // },
  {
    title: 'Stories',
    icon: <PhotoIcon name="photo" color="#f9f9f9" size={26} />,
    screen: 'Stories',
  },
  {
    title: 'UserProfile',
    icon: <Icons name="person" color="#f9f9f9" size={26} />,
    screen: 'UserProfile',
  },
];

export default function NavBar() {
  const navigation = useNavigation();
  return (
    <View className="p-2 bg-black flex-row justify-around">
      {list.map((_, idx) => (
        <TouchableOpacity
          className="p-1"
          key={idx + 1}
          onPress={() => navigation.navigate(_.screen)}>
          {_.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
}
