import { View, Text, TextInput, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addDoc, collection } from 'firebase/firestore';
import FontText from './CommonFontText';
import { dbService } from '../lib/fBase';
import { Picker } from '@react-native-picker/picker';
import useCallData from './../hooks/useCallData';
import { useRouter } from 'expo-router';
import LoadingSavingButton from './LoadingSavingButton';
import { ms } from 'react-native-size-matters';

const CreateWordModal = ({
  user,
  days,
  setSeeCreateWordModal,
  detailDay = false,
  isFromVideo = false,
}) => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState(
    detailDay ? detailDay : 'Day'
  );
  const [korean, setKorean] = useState(null);
  const [english, setEnglish] = useState(null);
  const [wordsMaxId, setWordsMaxId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const wordsIdArr = useCallData('words', 'id');

  // 가장 큰 Id 구하기
  useEffect(() => {
    if (wordsIdArr) {
      const allWordsIds = wordsIdArr.map((doc) => Number(doc.id));
      setWordsMaxId(Math.max(...allWordsIds));
    }
  }, [wordsIdArr, user?.uid]);

  // 단어 만들기
  const onSubmit = async () => {
    if (selectedValue !== 'Day' && korean && english) {
      if (!isLoading) {
        setIsLoading(true);
        const wordObj = {
          creatorId: user.uid,
          id: wordsMaxId + 1,
          day: Number(selectedValue),
          eng: english,
          kor: korean,
          isDone: false,
        };
        await addDoc(collection(dbService, 'words'), wordObj);

        isFromVideo
          ? Alert.alert('Alert!', 'the word saved', [{ text: 'OK' }], {
              cancelable: false,
            })
          : router.push(`/memorize/${selectedValue}`);

        setSeeCreateWordModal(false);
        setIsLoading(false);
        setKorean(null);
        setEnglish(null);
      }
    } else {
      // alert 창 띄우기
      Alert.alert('Alert!', 'Please check the forms', [{ text: 'OK' }], {
        cancelable: false,
      });
    }
  };

  return (
    <View className='absolute top-1/5 w-full h-full flex-row justify-center z-20'>
      <View
        style={{ padding: ms(30, 0.7) }}
        className='w-4/5 flex-col items-center shadow-md shadow-black rounded-2xl bg-white m-auto'
      >
        <View className='flex-row items-center'>
          {/* Day와 옵션선택 */}
          <FontText className='text-lg'>Day :</FontText>
          <View className='flex-1'>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label='Day' value='Day' />
              {days?.map((day) => {
                return (
                  <Picker.Item
                    key={day?.day}
                    label={String(day?.day)} // 문자열만 들어갈 수 있음
                    value={String(day?.day)}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
        {/* Korean, English */}
        <View className='w-full gap-y-2'>
          <FontText className='text-lg'>Korean :</FontText>
          <TextInput
            style={{ height: ms(30, 0.2), fontSize: ms(13, 0.2) }}
            className='border border-slate-200 rounded-md h-9 focus:border-purple-600 px-2'
            value={korean}
            onChangeText={(text) => setKorean(text)}
            placeholder='ex)사과'
          />
          <FontText className='text-lg'>English :</FontText>
          <TextInput
            style={{ height: ms(30, 0.2), fontSize: ms(13, 0.2) }}
            className='border border-slate-200 rounded-md h-9 focus:border-purple-600 px-2'
            value={english}
            onChangeText={(text) => setEnglish(text)}
            placeholder='ex)Apple'
          />
        </View>
        {/* Create, Cancel 버튼 */}
        <View
          style={{ height: ms(40, 0.3), marginTop: ms(30, 0.5) }}
          className='flex-row items-center justify-centew-full'
        >
          {isLoading ? (
            <LoadingSavingButton />
          ) : (
            <TouchableOpacity
              style={{ width: ms(130, 1) }}
              onPress={onSubmit}
              className='w-36 py-3 h-full flex-row justify-center items-center bg-indigo-500 rounded-lg shadow-sm shadow-black'
            >
              <Text style={{ fontSize: ms(12, 0.7) }} className='text-white'>
                Create
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={{ width: ms(80, 1) }}
            onPress={() => setSeeCreateWordModal(false)}
            className='w-20 py-3 h-full flex-row justify-center items-center ml-4 bg-white rounded-lg shadow-sm shadow-black'
          >
            <Text style={{ fontSize: ms(12, 0.7) }} className='text-indigo-500'>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateWordModal;
