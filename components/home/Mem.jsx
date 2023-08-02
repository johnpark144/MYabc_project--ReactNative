import { View, Text } from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';

const Mem = () => {
  return (
    <View>
      <ImageBackground
        className='w-screen h-screen p-5 gap-y-3'
        source={{
          uri: 'https://user-images.githubusercontent.com/106279616/257906975-4ffe54d7-891f-4e4f-918e-a174688e6136.jpg',
        }}
        resizeMode='cover'
      ></ImageBackground>
    </View>
  );
};

export default Mem;
