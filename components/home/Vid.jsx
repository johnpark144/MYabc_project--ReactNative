import { View, Text } from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';

const Vid = () => {
  return (
    <ImageBackground
      className='w-screen h-screen p-8 gap-y-3'
      source={{
        uri: 'https://user-images.githubusercontent.com/106279616/257908892-ebac26ef-b392-4a8b-81a3-59fd95b66b2e.jpg',
      }}
      resizeMode='cover'
    >
      <View></View>
    </ImageBackground>
  );
};

export default Vid;
