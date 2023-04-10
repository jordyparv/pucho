import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Container from '../components/Container';

import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function UserProfile() {
  const navigation = useNavigation();
  const [edit, setEdit] = useState(true);
  const [username, setUsername] = useState('Jordan');
  return (
    <Container className="">
      <TouchableOpacity
        className="mt-4 flex-row items-center"
        onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-back" size={26} color="#f9f9f9" />
        <Text className="text-white text-lg">Account</Text>
      </TouchableOpacity>
      <View className="flex-1 py-12">
        <View className="items-center">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1681097211196-de7d4c7feadb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
            className="h-24 w-24 rounded-full"
          />
        </View>
        <View className="flex-1 justify-center gap-2">
          <View className="">
            <Text className="text-white">username</Text>
            <View className="flex-row items-center">
              {!edit ? (
                <TextInput
                  onChangeText={setUsername}
                  defaultValue={username}
                  className="bg-white/10 rounded px-4 flex-1 text-white"
                />
              ) : (
                <Text className="text-white text-2xl flex-1">{username}</Text>
              )}
              <TouchableOpacity onPress={() => setEdit(!edit)}>
                <Text className="text-sm text-white/80 font-medium">
                  {edit ? 'Edit' : 'Save'}{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="">
            <Text className="text-white">Registerd number</Text>
            <Text className="text-white text-2xl">9856122346</Text>
          </View>
        </View>
        <View className="">
          <TouchableOpacity className="bg-white/10 p-4 rounded-full">
            <Text className="text-white text-center text-xl font-medium">
              Signout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
