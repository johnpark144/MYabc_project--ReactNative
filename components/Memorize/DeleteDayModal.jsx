import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontText from '../CommonFontText';
import { publicSansSemiBold } from '../../commonStyles';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { dbService } from '../../lib/fBase';
import { MaterialIcons } from '@expo/vector-icons';

const DeleteDayModal = ({ user, days, setSeeDeleteDayModal }) => {
  const [delDayRef, setDelDayRef] = useState('');
  const [lastDay, setLastDay] = useState('');

  useEffect(() => {
    (async () => {
      // 마지막 Day계산
      const q_LastDay = query(
        collection(dbService, 'days'),
        where('creatorId', '==', user.uid)
      );
      const docsSnap_LastDay = await getDocs(q_LastDay);
      const lastDay = docsSnap_LastDay.docs.length;
      setLastDay(lastDay);

      // 마지막 Day정보
      const q = query(
        collection(dbService, 'days'),
        where('creatorId', '==', user.uid),
        where('day', '==', lastDay)
      );
      const docsSnap = await getDocs(q);
      const docsId = docsSnap.docs[0].id;
      setDelDayRef(doc(dbService, 'days', docsId));
    })();
  }, [user.uid]);

  // 마지막 Day 삭제
  const _delete = async (e) => {
    e.preventDefault();
    setSeeDeleteDayModal(false);
    await deleteDoc(delDayRef);
  };

  return (
    <View className='absolute top-1/5 w-full h-full flex-row justify-center'>
      <View className='w-4/5 h-2/5 p-5 shadow-lg shadow-black rounded-2xl bg-white m-auto'>
        {/* 아이콘, 문구 */}
        <View className='flex-1 flex-col justify-center items-center '>
          <MaterialIcons name='event-busy' size={50} color='#373add' />
          <Text className='text-xl' style={publicSansSemiBold}>
            Delete a day
          </Text>
          <FontText className='text-lg text-center'>
            Are you sure you want to delete "Day {lastDay}"?
          </FontText>
        </View>
        {/* Delete, Cancel 버튼 */}
        <View className='flex-row justify-around items-center w-full h-16 '>
          <TouchableOpacity className='py-3 w-24 bg-indigo-500 rounded-lg shadow-md shadow-black'>
            <Text onPress={_delete} className='text-center text-white'>
              Delete
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSeeDeleteDayModal(false)}
            className='py-3 w-24 bg-white rounded-lg shadow-md shadow-black'
          >
            <Text className='text-center text-indigo-500'>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeleteDayModal;
