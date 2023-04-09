import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../components/Container';
import io from 'socket.io-client';
import LiveAudioStream from 'react-native-live-audio-stream';
import Sound from 'react-native-sound';
import {decode as atob, encode as btoa} from 'base-64';
export default function Test() {
  const [audioData, setAudioData] = useState(null);
  const options = {
    sampleRate: 32000, // default is 44100 but 32000 is adequate for accurate voice recognition
    channels: 1, // 1 or 2, default 1
    bitsPerSample: 16, // 8 or 16, default 16
    audioSource: 6, // android only (see below)
    bufferSize: 4096, // default is 2048
  };

  const handleChunk = chunk => {
    // Concatenate the incoming chunk with the previous chunks

    const base64Data = btoa(String.fromCharCode(...new Uint8Array(chunk)));
    // Set the audio data state variable to the concatenated data
    setAudioData(base64Data);
    playAudio();
  };

  const playAudio = () => {
    // Create a new sound instance from the audio data
    const sound = new Sound(audioData, '', error => {
      if (error) {
        console.log('Error loading sound:', error);
        return;
      }
      // Play the sound
      sound.play();
    });
  };
  useEffect(() => {
    const socket = io('ws://10.0.2.2:3000');
    LiveAudioStream.init(options);
    LiveAudioStream.on('data', data => {
      // base64-encoded audio data chunks
      setAudioData(data);
      handleChunk(data);

      //   socket.emit('audio-stream', data);
      //   console.log(data);
    });
    return () => socket.disconnect();
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Test</Text>
      <View className="">
        <Button
          title="Start"
          onPress={() => {
            LiveAudioStream.start();
          }}
        />
        <Button title="Stop" onPress={() => LiveAudioStream.stop()} />
      </View>
    </View>
  );
}
