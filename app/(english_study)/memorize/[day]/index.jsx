import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import {
  Link,
  Stack,
  useLocalSearchParams,
  useRouter,
  useSearchParams,
} from 'expo-router';
import CommonBackground from '../../../../components/CommonBackground';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { pTSansNarrowBold } from '../../../../commonStyles';
import { LinearGradient } from 'expo-linear-gradient';
import FontText from '../../../../components/CommonFontText';
import CreateWordModal from '../../../../components/CreateWordModal';
import AuthContext from '../../../../context/AuthContext';

const index = () => {
  const router = useRouter();
  const [createWordModal, setCreateWordModal] = useState(false);
  const { day } = useLocalSearchParams(); // params 가져오기
  const { user, loginUser, error, checkAuthState, logoutUser, setDays, days } =
    useContext(AuthContext);
  return (
    <CommonBackground>
      <View className='h-screen p-2'>
        {/* 헤더 가리기 */}
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <View className='flex-row justify-between items-center'>
          {/* 뒤로가기 */}
          <Link href='/memorize' className='ml-5'>
            <AntDesign name='caretleft' size={24} color='black' />
          </Link>
          {/* Day */}
          <View className='flex-1 rounded-md'>
            <Text className='text-center text-3xl' style={pTSansNarrowBold}>
              Day {day}
            </Text>
          </View>
          {/* Create Word 버튼 */}
          <View className='flex-1 flex-row justify-end'>
            <LinearGradient
              className='w-4/5 h-10 rounded-xl flex-row justify-center items-center shadow-xl shadow-black'
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              colors={['#a5b4fc', '#818cf8']}
            >
              <TouchableOpacity
                activeOpacity={0.6} // 터치시 투명도
                onPress={() => setCreateWordModal(true)}
              >
                <FontText className='text-center'>Create Word</FontText>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        {/* 단어장 */}
        <ScrollView className=''>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
          <Text>zz</Text>
        </ScrollView>
        {/* 이동 화살표, 가리기, 보이기 버튼 */}
        <View className='fixed bottom-28 h-12 w-full flex-row items-center px-5 gap-x-1'>
          <TouchableOpacity
            disabled={Number(day) === 1}
            className={`flex-1 h-full items-center flex-row justify-start bg-[#d6dff7] rounded-l-3xl pl-2`}
            onPress={() => router.push(`/memorize/${Number(day) - 1}`)}
          >
            <MaterialCommunityIcons
              name='arrow-left'
              size={30}
              color={Number(day) === 1 ? '#b8b7b7' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity className='flex-1 h-full bg-purple-300 flex-row rounded-xl'>
            <Text className='w-full text-center self-center'>Hide Eng</Text>
          </TouchableOpacity>
          <TouchableOpacity className='flex-1 h-full bg-blue-300 flex-row rounded-xl'>
            <Text className='w-full text-center self-center'>Hide Kor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={Number(day) === days?.length}
            className='flex-1 h-full items-center flex-row justify-end bg-[#d6dff7] rounded-r-3xl pr-2'
            onPress={() => router.push(`/memorize/${Number(day) + 1}`)}
          >
            <MaterialCommunityIcons
              name='arrow-right'
              size={30}
              color={Number(day) === days?.length ? '#b8b7b7' : 'black'}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Create Word 모달 */}
      {createWordModal ? (
        <CreateWordModal
          user={user}
          days={days}
          setCreateWordModal={setCreateWordModal}
          detailDay={day}
        />
      ) : (
        ''
      )}
    </CommonBackground>
  );
};

export default index;
