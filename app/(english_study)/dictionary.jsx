import { View, Text, TextInput, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CommonBackground from '../../components/CommonBackground';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { publicSansSemiBold } from '../../commonStyles';
import { MaterialIcons } from '@expo/vector-icons';
import FontText from '../../components/CommonFontText';

const dictionary = () => {
  const [word, setWord] = useState(null);
  const [wordInfo, setWordInfo] = useState();

  // 단어 찾기
  const searchWord = () => {
    if (word) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setWordInfo(data[0]);
        })
        .catch((err) => {
          Alert.alert('Error!', err, [{ text: 'OK' }], {
            cancelable: false,
          });
        });
    } else {
      setWordInfo(false);
    }
  };

  // 오디오 작동
  const playAudio = async () => {
    let playingAudio = new Audio.Sound();
    try {
      await playingAudio.loadAsync(
        { uri: wordInfo.phonetics[0]?.audio },
        { progressUpdateIntervalMillis: 100 }
      );
      await playingAudio.playAsync();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <CommonBackground>
      {/* 검색창, 검색버튼 */}
      <View className='py-10 px-6 flex-row gap-x-3'>
        <View className='flex-1'>
          <TextInput
            className='h-8 pl-2 w-full bg-slate-50 shadow-md shadow-black'
            value={word}
            onChangeText={(text) => setWord(text)}
            onSubmitEditing={searchWord} // 엔터칠 때 작동
            returnKeyType='search' // 엔터키에 쓸말
          />
        </View>
        <LinearGradient
          className='w-20 h-8 rounded-3xl shadow-xl shadow-black'
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={['#52e4e0', '#4ce2b6']}
        >
          <TouchableOpacity
            onPress={searchWord}
            className='h-full flex-row justify-center items-center'
          >
            <Entypo name='magnifying-glass' size={20} color='black' />
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <View className='flex flex-col items-center'>
        {wordInfo && (
          <>
            {/* 발음기호, 오디오 파일 */}
            <View className='flex-row justify-center items-center w-2/3 bg-[#e5e7eb] rounded-3xl'>
              <Text className='text-xl p-4' style={publicSansSemiBold}>
                {wordInfo.word} {wordInfo.phonetic}
              </Text>
              {wordInfo.phonetics[0]?.audio && ( // 오디오 파일 있는 경우만
                <TouchableOpacity className='p-4' onPress={playAudio}>
                  <AntDesign name='playcircleo' size={24} color='#da0d0d' />
                </TouchableOpacity>
              )}
            </View>
            {/* 사전 정의 */}
            <ScrollView
              className='flex-col w-full gap-y-3 mt-1'
              contentContainerStyle={{ alignItems: 'center' }}
            >
              {wordInfo.meanings.map((meaning, idx) => (
                <View
                  key={idx}
                  className='w-[95%] p-5 gap-y-3 bg-[#e5e7eb] rounded-xl'
                >
                  {/* 아이콘, 품사 */}
                  <View className='flex-row items-center'>
                    <MaterialIcons name='menu-book' size={24} color='black' />
                    <FontText className='text-2xl'>
                      &nbsp;
                      {meaning.partOfSpeech.charAt(0).toUpperCase() +
                        meaning.partOfSpeech.slice(1)}
                    </FontText>
                  </View>
                  {/* Synonym */}
                  <Text className='text-base leading-8'>
                    - Synonym :
                    {meaning.synonyms[0] &&
                      meaning.synonyms.map((synonym, idx) => (
                        <Text key={idx}>{synonym},&nbsp;</Text>
                      ))}
                  </Text>
                  {/* Antonym */}
                  <Text className='text-base leading-8'>
                    - Antonym :
                    {meaning.antonyms[0] &&
                      meaning.antonyms.map((antonym, idx) => (
                        <Text key={idx}>{antonym},&nbsp;</Text>
                      ))}
                  </Text>
                  {/* Definition */}
                  <Text className='text-base leading-8'>
                    - Definition : {'\n'}
                    {meaning.definitions[0] &&
                      meaning.definitions.map((definition, idx) => (
                        <Text key={idx}>
                          {idx + 1} {')'} {definition.definition} {'\n'}
                        </Text>
                      ))}
                  </Text>
                </View>
              ))}
              <View className='h-[200px]'></View>
            </ScrollView>
          </>
        )}
      </View>
    </CommonBackground>
  );
};

export default dictionary;
