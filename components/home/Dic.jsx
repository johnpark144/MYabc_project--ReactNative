import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { pTSansNarrowBold, publicSansVariable } from '../../commonStyles';
import { Ionicons } from '@expo/vector-icons';
import Arrow from './Arrow';
import { vs, ms } from 'react-native-size-matters';

const Dic = () => {
  const images = useRef([
    {
      src: 'https://user-images.githubusercontent.com/106279616/217298513-e53cb9ea-86e4-4fe2-a51e-12ca0dd98444.png',
    },
    {
      src: 'https://user-images.githubusercontent.com/106279616/217298427-bad92ba7-f8f0-442a-8b7d-e2c3a38dbc6d.png',
    },
    {
      src: 'https://user-images.githubusercontent.com/106279616/217298268-3a197470-0432-4dca-9010-be8b3e05f485.png',
    },
  ]);
  const [current, setCurrent] = useState(0);

  const moveSlide = (i) => {
    let nextIndex = current + i;
    if (nextIndex < 0) nextIndex = 2;
    else if (nextIndex >= 3) nextIndex = 0;
    setCurrent(nextIndex);
  };

  return (
    <ImageBackground
      style={{ padding: vs(30), rowGap: vs(10) }}
      className='w-screen h-screen'
      source={{
        uri: 'https://user-images.githubusercontent.com/106279616/217299126-32003695-2bbe-4099-bcf7-8795ccc0331f.jpg',
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
            DICTIONARY{'\n'}
          </Text>
          <Text>Search any words!{'\n'}</Text>
          <Text>You can see its IPA, listen to the pronunciation,{'\n'}</Text>
          <Text>and check all the meaning of the words.</Text>
        </Text>
        {/* 프로젝터, 부엉이, 라이트, 빔 */}
        <View
          style={{ top: ms(230, 0.6) }}
          className='w-full flex-row justify-center absolute'
        >
          <Image
            alt='Projector Screen'
            style={{ width: ms(350, 0.6), height: ms(250, 0.6) }}
            className='absolute'
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217297409-91e2b44e-61c3-459c-81ee-58e8a19f08a4.png',
            }}
            resizeMode='contain'
          />
          <Image
            alt='Owl'
            style={{
              top: ms(190, 0.6),
              left: ms(-10, 3),
              width: ms(100, 0.6),
              height: ms(100, 0.6),
            }}
            className='relative z-10'
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217297151-fa07635c-dd00-4607-99ff-2763aefdf6cc.png',
            }}
            resizeMode='contain'
          />
          <Image
            alt='FlashLight'
            style={{
              top: ms(210, 0.6),
              left: ms(100, 0.6),
              width: ms(100, 0.6),
              height: ms(100, 0.6),
            }}
            className='relative'
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217298073-8b2f6cbc-1a40-48ea-b5ba-47ac3f8c36de.png',
            }}
            resizeMode='contain'
          />
          <Image
            alt='Beam Projector Machine'
            style={{
              top: ms(230, 0.6),
              left: ms(20, 0.6),
              width: ms(100, 0.6),
              height: ms(100, 0.6),
            }}
            className='relative top-[260px] left-[15px] w-[100px] h-[100px] scale-x-[-1]'
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217298683-1f063b29-c15b-486a-8870-3420209ff79f.png',
            }}
            resizeMode='contain'
          />
          {/* 버튼, 이미지 */}
          <View className='flex-row absolute' style={{ top: ms(47, 0.6) }}>
            {/* 왼쪽 버튼 */}
            <TouchableOpacity
              onPress={() => {
                moveSlide(-1);
              }}
              className='relative top-20'
              style={{ top: ms(70) }}
            >
              <Ionicons
                name='ios-arrow-back-circle'
                size={ms(50, 0.7)}
                color='gray'
              />
            </TouchableOpacity>
            {/* 이미지 */}
            <Image
              style={{ width: ms(286, 0.61), height: ms(180, 0.61) }}
              className='z-0'
              source={{
                uri: images.current[current].src,
              }}
              resizeMode='contain'
            />
            {/* 오른쪽 버튼 */}
            <TouchableOpacity
              onPress={() => {
                moveSlide(1);
              }}
              className='relative top-20'
              style={{ top: ms(70) }}
            >
              <Ionicons
                name='ios-arrow-forward-circle'
                size={ms(50, 0.7)}
                color='gray'
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* 좌우 넘김 화살표 */}
      <Arrow leftExistance={true} rightExistance={true} />
    </ImageBackground>
  );
};

export default Dic;
