import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import truncate from '../helpers/truncate';
export default function StoryIcon({active}) {
  return (
    <TouchableOpacity activeOpacity={0.5} className="mr-2">
      <View className="mr-auto items-center justify-center">
        <View
          className={`border-2 rounded-full p-1 ${
            active ? 'border-rose-900/40' : 'border-rose-800'
          }`}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
            className="w-14 h-14 rounded-full"
            style={{resizeMode: 'cover'}}
          />
        </View>
        <Text className={`${!active ? 'text-white' : 'text-white/50'} text-sm`}>
          {truncate('StoryIcons', 8)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
