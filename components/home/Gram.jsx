import { View, Text, Image } from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';
import { pTSansNarrowBold, publicSansVariable } from '../../commonStyles';
import { LinearGradient } from 'expo-linear-gradient';
import Arrow from './Arrow';
import { s, vs, ms } from 'react-native-size-matters';

const Gram = () => {
  // 반복되는 부분 (컨테이너)
  const ExplanationContainer = (title, msg1, msg2, img) => (
    <LinearGradient
      style={{ padding: vs(20) }}
      className='w-full rounded-3xl flex-row justify-center items-center shadow-xl shadow-black'
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={['#3c774e', '#06491a']}
    >
      <Text
        style={[
          publicSansVariable,
          { fontSize: ms(20, 2), lineHeight: ms(20, 9) },
        ]}
      >
        {title && (
          <Text style={[pTSansNarrowBold, { fontSize: ms(20, 8) }]}>
            {title}
            {'\n'}
          </Text>
        )}
        {msg1 && (
          <>
            <Text>
              {msg1}
              {'\n'}
            </Text>
            <Text>{msg2}</Text>
          </>
        )}
      </Text>
      {img && (
        <Image
          className='w-[270px] h-[185px]'
          source={{ uri: img }}
          resizeMode='contain'
        />
      )}
    </LinearGradient>
  );
  return (
    <ImageBackground
      style={{
        paddingHorizontal: s(25),
        paddingVertical: vs(10),
        rowGap: vs(10),
      }}
      className='w-screen h-screen'
      source={{
        uri: 'https://user-images.githubusercontent.com/106279616/257941041-ea555faf-cab8-481f-a312-172a1346ca77.png',
      }}
      resizeMode='cover'
    >
      <View style={{ rowGap: vs(15) }}>
        {ExplanationContainer(
          'GRAMMAR',
          'Check your grammar',
          'by writing down some sentence!'
        )}
        {ExplanationContainer(
          null,
          'This will let you know',
          'what is wrong and proper words'
        )}
        {ExplanationContainer(
          null,
          null,
          null,
          'https://user-images.githubusercontent.com/106279616/217297935-5429f47a-cb82-4676-b6d0-99f9e7240a5f.jpg'
        )}
      </View>
      {/* 좌우 넘김 화살표 */}
      <Arrow leftExistance={true} rightExistance={false} extraTop={true} />
    </ImageBackground>
  );
};

export default Gram;
