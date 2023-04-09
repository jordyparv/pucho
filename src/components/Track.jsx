import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
function Track() {
  return (
    <TouchableOpacity
      className="my-2"
      onPress={() => {
        console.log('pressed');
      }}>
      <View className="flex flex-row items-center">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
          }}
          className="w-16 h-16 rounded-full"
        />
        <View className="flex-1 justify-center ml-2">
          <Text className="text-white text-xl" numberOfLines={1}>
            kl ki story
          </Text>
          <Text className="text-white/40 font-bold text-sm">12k listening</Text>
        </View>
        <View className="justify-between items-end">
          <Icons name="play" color="#f9f9f9" size={26} />
          <Text className="text-white/40 text-xs ">by Jordan</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Track;
