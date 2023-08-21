import { View, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontText from '../CommonFontText';
import { publicSansSemiBold } from '../../commonStyles';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { dbService } from '../../lib/fBase';
import { MaterialIcons } from '@expo/vector-icons';
import { ms } from 'react-native-size-matters';
import AuthContext from '../../context/AuthContext';

const DeleteDayModal = ({ setSeeDeleteDayModal }) => {
  const { user, delDayRef, setDelDayRef, lastDay, setLastDay } =
    useContext(AuthContext);

  // 마지막 Day 삭제
  const _delete = async () => {
    setSeeDeleteDayModal(false);
    await deleteDoc(delDayRef);
  };

  return (
    <View className='absolute top-1/5 w-full h-full flex-row justify-center'>
      <View
        style={{ padding: ms(30, 0.7) }}
        className='w-4/5 h-2/5 shadow-sm
        shadow-slate-500 rounded-2xl bg-white m-auto'
      >
        {/* 아이콘, 문구 */}
        <View className='flex-1 flex-col justify-center items-center '>
          <MaterialIcons name='event-busy' size={ms(50, 0.7)} color='#373add' />
          <Text style={[publicSansSemiBold, { fontSize: ms(20, 0.7) }]}>
            Delete a day
          </Text>
          <FontText style={{ fontSize: ms(15, 0.7) }} className='text-center'>
            Are you sure you want to delete "Day {lastDay}"?
          </FontText>
        </View>
        {/* Delete, Cancel 버튼 */}
        <View
          style={{ height: ms(40, 0.3) }}
          className='flex-row justify-around items-center w-full'
        >
          <TouchableOpacity
            style={{ width: ms(100, 1) }}
            className='py-3 h-full bg-indigo-500 flex-row items-center justify-center rounded-lg shadow-sm
            shadow-slate-500'
            onPress={_delete}
          >
            <Text style={{ fontSize: ms(12, 0.7) }} className='text-white'>
              Delete
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: ms(100, 1) }}
            onPress={() => setSeeDeleteDayModal(false)}
            className='py-3 h-full bg-white flex-row items-center justify-center rounded-lg shadow-sm
            shadow-slate-500'
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

export default DeleteDayModal;
