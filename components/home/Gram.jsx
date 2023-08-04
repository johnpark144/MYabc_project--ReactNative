import { View, Text, Image } from 'react-native';
import React from 'react';
import { ImageBackground } from 'react-native';
import FontText from '../CommonFontText';
import { pTSansNarrowBold } from '../../commonStyles';
import { LinearGradient } from 'expo-linear-gradient';

const Gram = () => {
  // 반복되는 부분 (컨테이너)
  const ExplanationContainer = (title, msg1, msg2, img) => (
    <LinearGradient
      className='w-full p-6 rounded-3xl flex-row justify-center items-center shadow-xl shadow-black'
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={['#3c774e', '#06491a']}
    >
      <FontText className='text-3xl leading-9'>
        {title && (
          <Text style={pTSansNarrowBold} className='text-4xl'>
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
      </FontText>
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
      className='w-screen h-screen px-6 py-4'
      source={{
        uri: 'https://user-images.githubusercontent.com/106279616/257941041-ea555faf-cab8-481f-a312-172a1346ca77.png',
      }}
      resizeMode='cover'
    >
      <View className='gap-y-7'>
        {ExplanationContainer(
          'GRAMMARLY',
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
    </ImageBackground>
  );
};

export default Gram;
