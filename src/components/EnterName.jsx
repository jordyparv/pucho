import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from './Container';

export default function EnterName({navigation}) {
  const [name, setName] = useState('');

  return (
    <Container>
      <View className="flex-1 justify-evenly items-center">
        <View className="items-center">
          <Text className="text-white text-2xl text-center">Jacky</Text>
          <Text className="text-white">Welcome</Text>
        </View>
        <View className="w-full">
          <Text className="text-white">Enter Name</Text>
          <TextInput
            className="bg-white/10 text-white px-4"
            placeholder="jordan"
            placeholderTextColor={'#ccc'}
            defaultValue={name}
            onChangeText={setName}
            inputMode="username"
          />
        </View>
        <View className="w-full ">
          <TouchableOpacity
            className="bg-white/30 w-full py-4 px-2 rounded-full"
            onPress={() => {}}>
            <Text className="text-white text-center">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
