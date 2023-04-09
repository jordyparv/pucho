import {View, Text, Image} from 'react-native';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
function Message({msg, time, uri, name}) {
  return (
    <TouchableOpacity onLongPress={() => console.log('longpress')}>
      <View className="flex flex-row justify-center gap-2">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
          }}
          className="w-12 h-12 rounded-full"
        />
        <View className="flex justify-center flex-1">
          <Text className="text-white">Jordan - {time ?? '12:45'}</Text>
          <Text className="text-white text-xl">{msg ?? 'hy how u doing?'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default memo(Message);
