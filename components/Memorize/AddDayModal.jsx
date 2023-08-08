import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontText from '../CommonFontText';
import { publicSansSemiBold } from '../../commonStyles';
import { addDoc, collection } from 'firebase/firestore';
import { dbService } from '../../lib/fBase';

const AddDayModal = ({ user, days, setAddDayModal }) => {
  const confirm = async (e) => {
    e.preventDefault();
    const dayObj = {
      creatorId: user.uid,
      day: days.length + 1,
    };
    setAddDayModal(false);
    await addDoc(collection(dbService, 'days'), dayObj);
    console.log(e);
  };

  return (
    <View className='absolute top-1/5 w-full h-full flex-row justify-center'>
      <View className='w-4/5 h-2/5 p-5 shadow-lg shadow-black rounded-2xl bg-white m-auto'>
        <View className='flex-1 flex-col justify-center items-center '>
          <MaterialCommunityIcons
            name='calendar-edit'
            size={50}
            color='#373add'
          />
          <Text className='text-xl' style={publicSansSemiBold}>
            Create a day
          </Text>
          <FontText className='flex text-lg '>
            You want to create a day?
          </FontText>
        </View>
        <View className='flex-row justify-around items-center w-full h-16 '>
          <TouchableOpacity className='py-3 w-24 bg-indigo-500 rounded-lg shadow-md shadow-black'>
            <Text onPress={confirm} className='text-center text-white'>
              Confirm
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAddDayModal(false)}
            className='py-3 w-24 bg-white  rounded-lg shadow-md shadow-black'
          >
            <Text className='text-center text-indigo-500'>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddDayModal;
