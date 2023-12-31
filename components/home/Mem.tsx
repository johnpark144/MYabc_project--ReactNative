import { View, Text, Image } from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';
import { pTSansNarrowBold, publicSansVariable } from '../../commonStyles';
import { ResizeMode, Video } from 'expo-av';
import Arrow from './Arrow';
import { vs, ms } from 'react-native-size-matters';

const Mem = () => {
  return (
    <ImageBackground
      style={{ padding: vs(30), rowGap: vs(10) }}
      className='w-screen h-screen'
      source={{
        uri: 'https://user-images.githubusercontent.com/106279616/257906975-4ffe54d7-891f-4e4f-918e-a174688e6136.jpg',
      }}
      resizeMode='cover'
    >
      <View>
        {/* 설명 */}
        <Text
          style={[
            publicSansVariable,
            { fontSize: ms(20, 1), lineHeight: ms(35, 1) },
          ]}
        >
          <Text style={[pTSansNarrowBold, { fontSize: ms(30, 1) }]}>
            MEMORIZE {'\n'}
          </Text>
          <Text>You can create 'days'{'\n'}</Text>
          <Text>And create 'words' to memorize.{'\n'}</Text>
          <Text>If you memorized, you can click 'Isdone' or delete it</Text>
        </Text>
        {/* 비디오와 TV */}
        <View
          style={{ top: ms(260, 0.6) }}
          className='w-full flex-row justify-center absolute'
        >
          <Video
            style={{
              top: ms(-34, 0.4),
              width: ms(300, 0.4),
              height: ms(300, 0.4),
            }}
            className='absolute'
            resizeMode={ResizeMode.CONTAIN}
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217297804-d2f45a50-2820-469d-87ae-b52df07ebbaf.mp4',
            }}
            isLooping={true}
            shouldPlay={true}
          />
          <Image
            style={{ width: ms(300, 0.4), height: ms(300, 0.4) }}
            className='absolute'
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217298597-68295156-5beb-484a-912d-5c90432f32c9.png',
            }}
            resizeMode='contain'
          />
        </View>
      </View>
      {/* 좌우 넘김 화살표 */}
      <Arrow leftExistance={true} rightExistance={true} />
    </ImageBackground>
  );
};

export default Mem;
