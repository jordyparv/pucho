import {View, Text} from 'react-native';
import React from 'react';
import Story from '../components/Story';

import Swiper from 'react-native-swiper';
export default function Stories() {
  return (
    <Swiper
      loop={false}
      autoplay
      showsPagination={false}
      onIndexChanged={index => console.log(index)}
      autoplayTimeout={3}>
      <Story />
      <Story />
      <Story />
    </Swiper>
  );
}
