import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import VerticalList from '../components/VerticalList';
import NotificationItem from '../components/NotificationItem';

import Icon from 'react-native-vector-icons/Ionicons';
export default function Notification({navigation}) {
  return (
    <Container>
      <View className="flex-1">
        <View className="flex flex-row items-center py-2 gap-2">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon size={26} name="arrow-back" color="#f9f9f9" />
          </TouchableOpacity>
          <Text className="text-white text-xl">Notification</Text>
        </View>
        <VerticalList Item={NotificationItem} limit={6} />
      </View>
    </Container>
  );
}
