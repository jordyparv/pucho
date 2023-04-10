import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import StoryProfile from './StoryProfile';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
export default function StoryCard({title, profileUri, storyUri}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Stories')}>
      <View className="h-56 w-44 rounded-xl overflow-hidden m-1">
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1668277351399-e2d8c508b8a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
          className="h-56 w-44">
          <LinearGradient
            colors={['transparent', 'transparent', '#000']}
            className="flex-1 w-full">
            <View className="-ml-8">
              <StoryProfile />
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}
