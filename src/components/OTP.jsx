import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from './Container';

export default function OTP({navigation}) {
  const [otp, setOTP] = useState('');

  return (
    <Container>
      <View className="flex-1 justify-evenly items-center">
        <View className="items-center">
          <Text className="text-white text-2xl text-center">Jacky</Text>
          <Text className="text-white">Enter OTP</Text>
        </View>
        <View className="w-full">
          <Text className="text-white">Enter OTP</Text>
          <TextInput
            className="bg-white/10 text-white px-4"
            placeholder="456891"
            placeholderTextColor={'#ccc'}
            defaultValue={otp}
            onChangeText={setOTP}
            inputMode="tel"
          />
        </View>
        <View className="w-full ">
          <TouchableOpacity
            className="bg-white/30 w-full py-4 px-2 rounded-full"
            onPress={() =>
              otp.length > 4 ? navigation.navigate('EnterName', {otp}) : ''
            }>
            <Text className="text-white text-center">Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
