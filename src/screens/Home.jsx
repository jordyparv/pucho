import {Text, View} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import StoryIcon from '../components/StoryIcon';
import HorizontalList from '../components/HorizontalList';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Track from '../components/Track';
import VerticalList from '../components/VerticalList';
import NavBar from '../components/NavBar';
export default function Home() {
  return (
    <Container>
      <View className="my-4 flex flex-row items-center justify-between">
        <Text className="text-white text-2xl">Jordan</Text>
        <View>
          <Icons name="bell" size={24} color="#f9f9f9" />
        </View>
      </View>
      <Text className="text-white">Stories</Text>
      <View className="my-2 flex flex-row">
        <View className="border-r border-r-white/50 mr-2">
          <StoryIcon active={true} />
        </View>
        <View className="flex-1">
          <HorizontalList Item={StoryIcon} limit={10} />
        </View>
      </View>
      <View className="flex-1 mt-4">
        <Text className="text-white">Lives</Text>
        <VerticalList limit={50} Item={Track} />
      </View>
      <NavBar />
    </Container>
  );
}
