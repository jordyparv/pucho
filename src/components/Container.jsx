import {View} from 'react-native';
import React from 'react';

export default function Container({children}) {
  return <View className="flex-1 bg-black px-4">{children}</View>;
}
