import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import {
  DocumentData,
  DocumentReference,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { dbService } from '../../lib/fBase';
import { Vibration } from 'react-native';
import { Pressable } from 'react-native';

// 테이블 줄
const TableRow = ({
  word,
  isDelete,
  is1stRow = false,
  setSeeDeleteModal,
  setWordToDelete,
  setDocsToDelete,
  isKorHide,
  isEngHide,
}: TableRowType) => {
  const [isDone, setIsDone] = useState(
    typeof word.isDone === 'boolean' && word.isDone
  );
  const [isDoneRef, setIsDoneRef] =
    useState<DocumentReference<DocumentData, DocumentData>>();

  // 특정 데이터 가져옴
  useEffect(() => {
    (async () => {
      if (!word || !word.id) return; // where 쿼리문 에러방지
      const q = query(
        collection(dbService, 'words'),
        where('id', '==', word.id)
      );
      const docsSnap = await getDocs(q);
      const docsId = docsSnap.docs[0].id;
      setIsDoneRef(doc(dbService, 'words', docsId));
    })();
  }, [word.id]);

  // isDone 토글 및 바뀐정보 DB에 저장
  const togleIsdone = async (newValue: boolean) => {
    setIsDone(newValue);
    await updateDoc(isDoneRef, {
      isDone: newValue,
    });
  };

  // 중복 부분
  const tableClassName = (extraStyle: string) =>
    `${extraStyle} text-center text-base ${
      isDone && !is1stRow ? 'text-[#838383]' : 'text-gray-800'
    }`;

  return (
    <View
      className={`flex-row items-center ${
        is1stRow
          ? 'bg-gray-300 h-8 rounded-t-lg mt-5'
          : isDone
          ? 'h-16 bg-[#a3a3a3]'
          : 'h-16'
      }`}
    >
      {/* isDone  */}
      <Pressable onPress={() => togleIsdone(!isDone)} className='w-[18%]'>
        <Text className={tableClassName('w-full')}>
          {is1stRow ? (
            word.isDone
          ) : (
            <View className='w-full h-full flex-row items-center px-[45%]'>
              <CheckBox
                disabled={false}
                value={isDone}
                onValueChange={(newValue) => togleIsdone(newValue)}
                style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
              />
            </View>
          )}
        </Text>
      </Pressable>
      {/* Eng */}
      <Text className={tableClassName('flex-1')}>
        {!isEngHide || is1stRow || isDone ? word.eng : '_____'}
      </Text>
      {/* Kor */}
      <Text className={tableClassName('flex-1')}>
        {!isKorHide || is1stRow || isDone ? word.kor : '_____'}
      </Text>
      {/* Delete */}
      {is1stRow ? (
        <Text className={tableClassName('w-[18%]')}>{isDelete}</Text>
      ) : (
        <View className={tableClassName('w-[18%] flex-row justify-center')}>
          <TouchableOpacity
            onPress={() => {
              Vibration.vibrate(30);
              setWordToDelete(word);
              setSeeDeleteModal(true);
              setDocsToDelete(isDoneRef);
            }}
            className={`w-2/3 p-1 rounded-md shadow-sm  ${
              isDone
                ? 'bg-[#a3a3a3] shadow-[#535353]'
                : 'bg-red-400 shadow-red-500'
            } `}
          >
            <Text className='text-center'>{!isDone && isDelete}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TableRow;
