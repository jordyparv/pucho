import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Container from '../components/Container';
import Message from '../components/Message';
import Lottie from 'lottie-react-native';
import Voice from '@react-native-community/voice';
export default function Live() {
  const scrollViewRef = useRef();

  const [chats, setChats] = useState([
    {
      msg: 'item 1',
      hoursMin: new Date().getSeconds(),
      id: Math.random().toString(12).substring(),
    },
  ]);
  const addNewChat = useCallback(() => {
    let currDate = new Date();
    let hoursMin = currDate.getHours() + ':' + currDate.getMinutes();
    setChats(prev => [
      ...prev,
      {
        msg: 'item ' + currDate.getMilliseconds(),
        hoursMin,
        id: Math.random().toString(12).substring(),
      },
    ]);
  }, [chats]);
  useEffect(() => {
    // const interval = setInterval(addNewChat, 1000);

    if (scrollViewRef.current != undefined)
      scrollViewRef?.current.scrollToEnd({animated: true});

    return () => {
      // clearInterval(interval);
    };
  }, [chats]);

  const renderItem = useCallback(
    ({item}) => <Message msg={item.msg} time={item.hoursMin} id={item.id} />,
    [],
  );
  return (
    <Container>
      <View className="flex-1 my-4">
        <Text className="text-center text-white text-2xl mb-6">
          Kl ki story
        </Text>
        <View className="bg-white/20 w-full h-48 rounded-2xl p-2 justify-center mb-10"></View>
        <View className="mr-auto items-center justify-around  absolute bottom-14 right-0 z-50">
          <TouchableOpacity>
            <Lottie
              source={require('../assets/emojis/cool-emoji.json')}
              autoPlay
              loop
              className="w-16 h-16"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Lottie
              source={require('../assets/emojis/smiley-emoji-2.json')}
              autoPlay
              loop
              className="w-16 h-16"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Lottie
              source={require('../assets/emojis/raised-eyebrow-emoji.json')}
              autoPlay
              loop
              className="w-16 h-16"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Lottie
              source={require('../assets/emojis/emoji-head-explosion.json')}
              autoPlay
              loop
              className="w-14 h-14"
            />
          </TouchableOpacity>
        </View>
        <FlatList
          ref={scrollViewRef}
          data={chats}
          renderItem={renderItem}
          className="flex-1"
          keyExtractor={item => item.id}
        />
        <View className="w-full flex flex-row items-center">
          <TextInput
            placeholder="Comment"
            className="flex-1 px-2 font-bold text-white"
            placeholderTextColor={'#6C6C6C'}
          />
          <TouchableOpacity className="p-2">
            <Text className="text-white">Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}
