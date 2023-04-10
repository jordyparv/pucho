import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import StoryIcon from '../components/StoryIcon';
import HorizontalList from '../components/HorizontalList';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import UserStoryIcon from '../components/UserStoryIcon';
import VerticalList from '../components/VerticalList';
import NavBar from '../components/NavBar';
import StoryCard from '../components/StoryCard';

export default function Home({navigation}) {
  return (
    <Container>
      <View className="my-4 flex flex-row items-center justify-between">
        <Text className="text-white text-2xl">Jordan</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Icons name="bell" size={24} color="#f9f9f9" />
        </TouchableOpacity>
      </View>
      <Text className="text-white">Stories</Text>
      <View className="my-2 flex flex-row">
        <View className="border-r border-r-white/50 mr-2">
          <UserStoryIcon active={true} uploader={true} />
        </View>
        <View className="flex-1">
          <HorizontalList Item={StoryIcon} limit={10} />
        </View>
      </View>
      <Text className="text-white">Recent</Text>
      <ScrollView>
        <View className="flex-1 mt-4 flex-row flex-wrap items-center px-auto justify-evenly">
          {Array(10)
            .fill(0)
            .map((_, idx) => (
              <StoryCard key={idx} />
            ))}
        </View>
      </ScrollView>
      <NavBar />
    </Container>
  );
}
