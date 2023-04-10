import {View, Text, Image} from 'react-native';
import React from 'react';

export default function StoryProfile({username, time, url}) {
  return (
    <View className="p-2 flex flex-row items-center gap-2 justify-center">
      <View className="border border-rose-600 rounded-full">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1681015162686-79e9cd18a0e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
          className="w-10 h-10 rounded-full"
        />
      </View>
      <View className="justify-center">
        <Text className="text-base text-white font-medium">StoryProfile</Text>
        <Text className="text-xs text-white/50 font-bold">Ten hours ago</Text>
      </View>
    </View>
  );
}
