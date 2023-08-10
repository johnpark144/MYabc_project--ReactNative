import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { publicSansSemiBold } from '../../commonStyles';
import FontText from './../CommonFontText';
import { FontAwesome } from '@expo/vector-icons';
import { deleteDoc } from 'firebase/firestore';

const DeleteWordModal = ({ wordToDelete, setSeeDeleteModal, docsToDelete }) => {
  // 단어 지우기
  const deleteWord = async () => {
    setSeeDeleteModal(false);
    await deleteDoc(docsToDelete);
  };

  return (
    <View className='absolute top-1/5 w-full h-full flex-row justify-center'>
      <View className='w-4/5 h-2/5 p-5 shadow-lg shadow-black rounded-2xl bg-white m-auto'>
        {/* 아이콘, 문구 */}
        <View className='flex-1 flex-col justify-center items-center '>
          <FontAwesome name='trash' size={50} color='#373add' />
          <Text className='text-xl' style={publicSansSemiBold}>
            Delete word "{wordToDelete.kor}"
          </Text>
          <FontText className='flex text-lg '>
            Are you sure you want to delete that?
          </FontText>
        </View>
        {/* Delete, Cancel 버튼 */}
        <View className='flex-row justify-around items-center w-full h-16 '>
          <TouchableOpacity
            onPress={deleteWord}
            className='py-3 w-24 bg-indigo-500 rounded-lg shadow-md shadow-black'
          >
            <Text className='text-center text-white'>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSeeDeleteModal(false)}
            className='py-3 w-24 bg-white  rounded-lg shadow-md shadow-black'
          >
            <Text className='text-center text-indigo-500'>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeleteWordModal;
