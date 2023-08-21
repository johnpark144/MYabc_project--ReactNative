import { View, Text, Image } from 'react-native';
import { useRef, useState } from 'react';
import { ImageBackground } from 'react-native';
import { pTSansNarrowBold, publicSansVariable } from '../../commonStyles';
import { ResizeMode, Video } from 'expo-av';
import { Pressable } from 'react-native';
import Arrow from './Arrow';
import { s, vs, ms } from 'react-native-size-matters';

const Vid = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  const handleImageClick = () => {
    try {
      setIsPaused((prev) => !prev);
    } catch (error) {
      console.error('Error while pausing the video:', error);
    }
  };

  return (
    <ImageBackground
      className='w-screen h-screen'
      style={{
        paddingHorizontal: s(25),
        paddingVertical: vs(10),
        rowGap: ms(12),
      }}
      source={{
        uri: 'https://user-images.githubusercontent.com/106279616/257908892-ebac26ef-b392-4a8b-81a3-59fd95b66b2e.jpg',
      }}
      resizeMode='cover'
    >
      <View>
        {/* 설명 */}
        <Text
          style={[
            publicSansVariable,
            {
              fontSize: ms(20, 0.9),
              lineHeight: ms(30, 0.9),
              padding: ms(25, 0.7),
            },
          ]}
          className=' bg-[#75c3db] rounded-3xl shadow-md shadow-black'
        >
          <Text style={[pTSansNarrowBold, { fontSize: ms(30, 1) }]}>
            VIDEO {'\n'}
          </Text>
          <Text>Search any words to see {'\n'}</Text>
          <Text>how often they were used in Youtube, {'\n'}</Text>
          <Text>and in what context they were used, {'\n'}</Text>
          <Text>and create some words you will memorize</Text>
        </Text>
      </View>
      <View className='w-full flex-row justify-center'>
        {/* 비디오 프레임 */}
        <Image
          style={{
            width: ms(350, 0.3),
            height: ms(280, 0.3),
          }}
          className='absolute'
          source={{
            uri: 'https://user-images.githubusercontent.com/106279616/258457106-0859463d-90f0-4d72-a53e-5ee23635016c.jpg',
          }}
          resizeMode='stretch'
        />
        {/* 비디오 */}
        <Pressable // 버튼 효과 내 줄 수있는 또 다른 옵션
          className='absolute'
          onPress={handleImageClick}
        >
          <Video
            style={{
              width: ms(350, 0.3),
              height: ms(227, 0.3),
            }}
            ref={videoRef}
            resizeMode={ResizeMode.STRETCH}
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217296607-79dcf640-b492-4cbb-805c-7515ceba2de0.mp4',
            }}
            isLooping={true}
            shouldPlay={!isPaused}
            blurRadius={0}
          />
        </Pressable>
        {/* Blur효과 및 재생버튼 */}
        {isPaused && (
          <Pressable // 버튼 효과 내 줄 수있는 또 다른 옵션
            style={{
              width: ms(350, 0.3),
              height: ms(227, 0.3),
            }}
            className='flex-row justify-center items-center bg-[#000000aa]' // blur 효과
            onPress={handleImageClick}
          >
            <Image
              className='w-[50px] h-[50px]'
              source={{
                uri: 'https://user-images.githubusercontent.com/106279616/258436789-d722fcfd-ba9a-4d25-9f13-a140deca316e.png',
              }}
              resizeMode='stretch'
            />
          </Pressable>
        )}
      </View>
      {/* 좌우 넘김 화살표 */}
      <Arrow leftExistance={true} rightExistance={true} />
    </ImageBackground>
  );
};

export default Vid;
