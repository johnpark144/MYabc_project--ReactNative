import { View, Text } from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';

const Gram = () => {
  return (
    <ImageBackground
      className='w-screen h-screen p-8 gap-y-3'
      source={{
        uri: 'https://user-images.githubusercontent.com/106279616/257941041-ea555faf-cab8-481f-a312-172a1346ca77.png',
      }}
      resizeMode='cover'
    >
      <View></View>
    </ImageBackground>
  );
};

export default Gram;
