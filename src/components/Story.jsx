import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import StoryProfile from './StoryProfile';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
export default function Story() {
  const [lastPress, setLastPress] = useState(0);
  const [isLiked, setLiked] = useState(false);
  const [bigHeart, setBigHeart] = useState(false);
  const navigation = useNavigation();
  const handleLike = () => {
    setLiked(prev => !prev);
    if (!isLiked) {
      setBigHeart(true);
      setTimeout(() => {
        setBigHeart(false);
      }, 1000);
    }
  };
  function doubleTap() {
    var delta = new Date().getTime() - lastPress;
    if (delta < 500) {
      handleLike();
      setLiked(true);
      console.log('s');
    }

    setLastPress(new Date().getTime());
  }
  return (
    <TouchableOpacity
      className="flex-1 relative"
      activeOpacity={1}
      onPress={doubleTap}>
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
          <View className="flex-1 items-center justify-center w-full h-full absolute z-50">
            {bigHeart ? (
              <Icon name="heart" size={160} color={'#FF033E'} />
            ) : null}
          </View>
          <TouchableOpacity onPress={handleLike} className="p-1 z-50">
            <Icon
              name="heart"
              size={26}
              color={isLiked ? '#FF033E' : 'white'}
            />
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
