import { View, Text, TouchableOpacity } from 'react-native';
import { publicSansSemiBold } from '../../commonStyles';
import FontText from '../CommonFontText';
import { FontAwesome } from '@expo/vector-icons';
import { deleteDoc } from 'firebase/firestore';
import { ms } from 'react-native-size-matters';

const DeleteWordModal = ({ wordToDelete, setSeeDeleteModal, docsToDelete }) => {
  // 단어 지우기
  const deleteWord = async () => {
    setSeeDeleteModal(false);
    await deleteDoc(docsToDelete);
  };

  return (
    <View className='absolute top-1/5 w-full h-full flex-row justify-center'>
      <View
        style={{ padding: ms(30, 0.7) }}
        className='w-4/5 h-2/5 shadow-sm shadow-slate-500 rounded-2xl bg-white m-auto'
      >
        {/* 아이콘, 문구 */}
        <View className='flex-1 flex-col justify-center items-center '>
          <FontAwesome name='trash' size={ms(50, 0.7)} color='#373add' />
          <Text style={[publicSansSemiBold, { fontSize: ms(20, 0.7) }]}>
            Delete word "{wordToDelete.kor}"
          </Text>
          <FontText style={{ fontSize: ms(15, 0.7) }} className='text-center'>
            Are you sure you want to delete that?
          </FontText>
        </View>
        {/* Delete, Cancel 버튼 */}
        <View
          style={{ height: ms(40, 0.3) }}
          className='flex-row justify-around items-center w-full'
        >
          <TouchableOpacity
            style={{ width: ms(100, 1) }}
            onPress={deleteWord}
            className='py-3 bg-indigo-500 rounded-lg shadow-sm shadow-slate-500'
          >
            <Text
              style={{ fontSize: ms(12, 0.7) }}
              className='text-center text-white'
            >
              Delete
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: ms(100, 1) }}
            onPress={() => setSeeDeleteModal(false)}
            className='py-3 bg-white  rounded-lg shadow-sm shadow-slate-500'
          >
            <Text
              style={{ fontSize: ms(12, 0.7) }}
              className='text-center text-indigo-500'
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeleteWordModal;
