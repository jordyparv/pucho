import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import StoryProfile from './StoryProfile';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
export default function UserStory({uploader}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity className="flex-1 relative" activeOpacity={1}>
      <TouchableOpacity
        className="absolute top-2 left-2 z-50"
        onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-back" color="white" size={26} />
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1681015162686-79e9cd18a0e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
        className="flex-1 rounded-2xl">
        <LinearGradient
          colors={['transparent', 'transparent', 'transparent', '#000']}
          className="flex-1 items-center justify-between  py-2">
          <View className="bg-black/30 rounded-full">
            <StoryProfile />
          </View>
          <View className="flex-1"></View>
          <Text className="text-white/80 text-center text-2xl">Caption</Text>

          <View className="flex-row items-center gap-2">
            <Icon name="heart" size={26} color="#f9f9f9" />
            <Text className="text-white">78</Text>
            <Icon name="eye" size={26} color="#f9f9f9" />
            <Text className="text-white">178</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
