import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontText from '../CommonFontText';
import { publicSansSemiBold } from '../../commonStyles';
import { addDoc, collection } from 'firebase/firestore';
import { dbService } from '../../lib/fBase';
import { ms } from 'react-native-size-matters';

const AddDayModal = ({ user, days, setSeeAddDayModal }) => {
  const confirm = async (e) => {
    e.preventDefault();
    const dayObj = {
      creatorId: user.uid,
      day: days.length + 1,
    };
    setSeeAddDayModal(false);
    await addDoc(collection(dbService, 'days'), dayObj);
  };

  return (
    <View className='absolute top-1/5 w-full h-full flex-row justify-center'>
      <View
        style={{ padding: ms(30, 0.7) }}
        className='w-4/5 h-2/5 shadow-sm shadow-slate-500 rounded-2xl bg-white m-auto'
      >
        {/* 아이콘, 문구 */}
        <View className='flex-1 flex-col justify-center items-center '>
          <MaterialCommunityIcons
            name='calendar-edit'
            size={ms(50, 0.7)}
            color='#373add'
          />
          <Text style={[publicSansSemiBold, { fontSize: ms(20, 0.7) }]}>
            Create a day
          </Text>
          <FontText style={{ fontSize: ms(15, 0.7) }} className='flex'>
            You want to create a day?
          </FontText>
        </View>
        {/* Confirm, Cancel 버튼 */}
        <View
          style={{ height: ms(40, 0.3) }}
          className='flex-row justify-around items-center w-full'
        >
          <TouchableOpacity
            style={{ width: ms(100, 1) }}
            className='py-3 h-full bg-indigo-500 flex-row items-center justify-center rounded-lg shadow-sm shadow-slate-500'
          >
            <Text
              onPress={confirm}
              style={{ fontSize: ms(12, 0.7) }}
              className='text-white'
            >
              Confirm
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: ms(100, 1) }}
            onPress={() => setSeeAddDayModal(false)}
            className='py-3 h-full bg-white flex-row items-center justify-center rounded-lg shadow-sm shadow-slate-500'
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

export default AddDayModal;
