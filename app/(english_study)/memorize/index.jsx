import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import CommonBackground from '../../../components/CommonBackground';
import { Link, Stack } from 'expo-router';
import FontText from './../../../components/CommonFontText';
import { LinearGradient } from 'expo-linear-gradient';
import useCallData from '../../../hooks/useCallData';
import AuthContext from './../../../context/AuthContext';
import { FlatList } from 'react-native';
import AddDayModal from '../../../components/Memorize/AddDayModal';
import DeleteDayModal from './../../../components/Memorize/DeleteDayModal';
import CreateWordModal from '../../../components/CreateWordModal';

const memorize = () => {
  const { user, loginUser, error, checkAuthState, logoutUser } =
    useContext(AuthContext);
  const [days, setDays] = useState(false);
  const [addDayModal, setAddDayModal] = useState(false);
  const [deleteDayModal, setDeleteDayModal] = useState(false);
  const [createWordModal, setCreateWordModal] = useState(false);

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
          onPress={() => {
            btnName === 'Add Day'
              ? setAddDayModal(true)
              : btnName === 'Delete Day'
              ? setDeleteDayModal(true)
              : setCreateWordModal(true);
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
          <Link
            className='w-[22%] mx-1 my-3 rounded-lg bg-blue-500 text-white text-center py-3'
            href=''
          >
            Day {day?.item?.day}
          </Link>
        )}
        keyExtractor={(day) => day?.item?.day}
      />

      {/* 모달 */}
      {addDayModal ? (
        <AddDayModal user={user} days={days} setAddDayModal={setAddDayModal} />
      ) : (
        ''
      )}
      {deleteDayModal ? (
        <DeleteDayModal
          user={user}
          days={days}
          setDeleteDayModal={setDeleteDayModal}
        />
      ) : (
        ''
      )}
      {createWordModal ? (
        <CreateWordModal
          user={user}
          days={days}
          setCreateWordModal={setCreateWordModal}
        />
      ) : (
        ''
      )}
    </CommonBackground>
  );
};

export default memorize;

// rounded shadow-md shadow-black
