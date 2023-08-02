import { View, Text } from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';

const Dic = () => {
  return (
    <View>
      <ImageBackground
        className='w-screen h-screen p-5 gap-y-3'
        source={{
          uri: 'https://user-images.githubusercontent.com/106279616/217299126-32003695-2bbe-4099-bcf7-8795ccc0331f.jpg',
        }}
        resizeMode='cover'
      ></ImageBackground>
    </View>
  );
};

export default Dic;
