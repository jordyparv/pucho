import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from './Container';

export default function Login({navigation}) {
  const [number, setNumber] = useState('');

  return (
    <Container>
      <View className="flex-1 justify-evenly items-center">
        <View className="items-center">
          <Text className="text-white text-2xl text-center">Jacky</Text>
          <Text className="text-white">Login</Text>
        </View>
        <View className="w-full">
          <Text className="text-white">Enter Mobile Number</Text>
          <TextInput
            className="bg-white/10 text-white px-4"
            placeholder="987654321"
            placeholderTextColor={'#ccc'}
            defaultValue={number}
            onChangeText={setNumber}
            inputMode="tel"
          />
        </View>
        <View className="w-full ">
          <TouchableOpacity
            className="bg-white/30 w-full py-4 px-2 rounded-full"
            onPress={() =>
              number.length > 8 ? navigation.navigate('OTP', {number}) : ''
            }>
            <Text className="text-white text-center">Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
