import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function Test() {
  const [position, setPosition] = useState({x: 0, y: 0});
  const handleDrag = (_, {x, y}) => {
    setPosition({x, y});
  };

  return (
    <View className="flex-1 items-center justify-center">
      <View></View>
    </View>
  );
}
