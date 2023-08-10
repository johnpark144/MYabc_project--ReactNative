import { View, Text, TouchableOpacity, Vibration } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import CommonBackground from '../../../components/CommonBackground';
import { Stack, useRouter } from 'expo-router';
import FontText from './../../../components/CommonFontText';
import { LinearGradient } from 'expo-linear-gradient';
import useCallData from '../../../hooks/useCallData';
import AuthContext from './../../../context/AuthContext';
import { FlatList } from 'react-native';
import AddDayModal from '../../../components/Memorize/AddDayModal';
import DeleteDayModal from './../../../components/Memorize/DeleteDayModal';
import CreateWordModal from '../../../components/CreateWordModal';
import * as Progress from 'react-native-progress';

const memorize = () => {
  const router = useRouter();
  const { user, loginUser, error, checkAuthState, logoutUser, setDays, days } =
    useContext(AuthContext);
  const [seeAddDayModal, setSeeAddDayModal] = useState(false);
  const [seeDeleteDayModal, setSeeDeleteDayModal] = useState(false);
  const [seeCreateWordModal, setSeeCreateWordModal] = useState(false);

  // 유저 체크
  useEffect(() => {
    checkAuthState();
  }, []);

  // 데이터 불러오기
  const dayArr = useCallData('days', 'day');
  useEffect(() => {
    if (dayArr) {
      setDays(dayArr.filter((day) => day.creatorId === user?.uid));
    }
  }, [dayArr, user?.uid]);

  // 반복되는 버튼
  const GradientBtn = (btnName) => {
    return (
      <LinearGradient
        className='flex-1 h-10 rounded-xl flex-row justify-center items-center shadow-xl shadow-black'
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={['#a5b4fc', '#818cf8']}
      >
        <TouchableOpacity
          activeOpacity={0.6} // 터치시 투명도
          onPress={() => {
            Vibration.vibrate(30);
            btnName === 'Add Day'
              ? setSeeAddDayModal(true)
              : btnName === 'Delete Day'
              ? setSeeDeleteDayModal(true)
              : setSeeCreateWordModal(true);
          }}
        >
          <FontText className='text-center'>{btnName}</FontText>
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  return (
    <CommonBackground>
      {/* 헤더 가리기 */}
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {days.length <= 0 ? (
        <View className='flex-row w-full h-full justify-center items-center'>
          <Progress.Bar size={60} indeterminate={true} color='#431386' />
        </View>
      ) : (
        <>
          {/* Add Day, Delete , Create Word 버튼 */}
          <View className='flex-row justify-between gap-x-3 py-5 px-3'>
            {GradientBtn('Add Day')}
            {GradientBtn('Delete Day')}
            {GradientBtn('Create Word')}
          </View>
          {/* Day FlatList */}
          <FlatList
            className='px-4'
            numColumns={4} // 한줄에 몇개씩 둘건지
            data={days}
            renderItem={(day) => (
              <TouchableOpacity
                className='w-[22%] mx-1 my-3 rounded-lg bg-blue-500 py-3 shadow-lg shadow-black'
                activeOpacity={0.5}
                onPress={() => {
                  Vibration.vibrate(30);
                  router.push(`/memorize/${day?.item?.day}`);
                }}
              >
                <Text className='text-white text-center'>
                  Day {day?.item?.day}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(day) => day?.item?.day}
          />

          {/* 모달 */}
          {seeAddDayModal ? (
            <AddDayModal
              user={user}
              days={days}
              setSeeAddDayModal={setSeeAddDayModal}
            />
          ) : (
            ''
          )}
          {seeDeleteDayModal ? (
            <DeleteDayModal
              user={user}
              days={days}
              setSeeDeleteDayModal={setSeeDeleteDayModal}
            />
          ) : (
            ''
          )}
          {seeCreateWordModal ? (
            <CreateWordModal
              user={user}
              days={days}
              setSeeCreateWordModal={setSeeCreateWordModal}
            />
          ) : (
            ''
          )}
        </>
      )}
    </CommonBackground>
  );
};

export default memorize;

// rounded shadow-md shadow-black
