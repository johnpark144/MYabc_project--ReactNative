import { View, Text, Image } from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';
import FontText from './../CommonFontText';
import { pTSansNarrowBold } from '../../commonStyles';
import { ResizeMode, Video } from 'expo-av';

const Mem = () => {
  return (
    <ImageBackground
      className='w-screen h-screen p-8 gap-y-3'
      source={{
        uri: 'https://user-images.githubusercontent.com/106279616/257906975-4ffe54d7-891f-4e4f-918e-a174688e6136.jpg',
      }}
      resizeMode='cover'
    >
      <View>
        {/* 설명 */}
        <FontText className='text-3xl leading-10'>
          <Text style={pTSansNarrowBold} className='text-4xl'>
            MEMORIZE {'\n'}
          </Text>
          <Text>You can create 'days'{'\n'}</Text>
          <Text>And create 'words' to memorize.{'\n'}</Text>
          <Text>If you memorized, you can click 'Isdone' or delete it</Text>
        </FontText>
        {/* 비디오와 TV */}
        <View className='w-full flex-row justify-center absolute top-80'>
          <Video
            className='absolute top-4 w-[300px] h-[160px]'
            resizeMode={ResizeMode.CONTAIN}
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217297804-d2f45a50-2820-469d-87ae-b52df07ebbaf.mp4',
            }}
            isLooping={true}
            shouldPlay={true}
          />
          <Image
            className='absolute w-[300px] h-[260px]'
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217298597-68295156-5beb-484a-912d-5c90432f32c9.png',
            }}
            resizeMode='contain'
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Mem;
