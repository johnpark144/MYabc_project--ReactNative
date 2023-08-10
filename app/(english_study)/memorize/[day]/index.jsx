import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
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
import useCallData from '../../../../hooks/useCallData';
import TableRow from '../../../../components/Memorize/TableRow';
import DeleteWordModal from './../../../../components/Memorize/DeleteWordModal';

const index = () => {
  const router = useRouter();
  const [seeCreateWordModal, setSeeCreateWordModal] = useState(false);
  const { day } = useLocalSearchParams(); // params 가져오기
  const { user, loginUser, error, checkAuthState, logoutUser, setDays, days } =
    useContext(AuthContext);

  const [words, setWords] = useState([]);
  const [isKorHide, setIsKorHide] = useState(false);
  const [isEngHide, setIsEngHide] = useState(false);
  const [seeDeleteModal, setSeeDeleteModal] = useState(false);
  const [wordToDelete, setWordToDelete] = useState('');
  const [deletedWords, setDeletedWords] = useState([]);
  const [docsToDelete, setDocsToDelete] = useState();

  // 단어데이터 가져오기
  const wordArr = useCallData('words', 'id');

  useEffect(() => {
    if (wordArr) {
      setWords(
        wordArr.filter(
          (word) => word.creatorId === user?.uid && word.day === Number(day)
        )
      );
    }
  }, [wordArr, day, user?.uid]);

  return (
    <CommonBackground>
      <View className='h-screen px-2 pt-6 pb-2'>
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
                onPress={() => setSeeCreateWordModal(true)}
              >
                <FontText className='text-center'>Create Word</FontText>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        {/* 단어장 테이블 */}
        <TableRow
          word={{ isDone: 'ISDONE', eng: 'ENG', kor: 'KOR' }}
          isDelete='DELETE'
          is1stRow={true}
        />
        <FlatList
          data={words}
          renderItem={({ item }) => (
            <TableRow
              word={item}
              isDelete={'X'}
              setSeeDeleteModal={setSeeDeleteModal}
              setWordToDelete={setWordToDelete}
              setDocsToDelete={setDocsToDelete}
              isKorHide={isKorHide}
              isEngHide={isEngHide}
            />
          )}
          contentContainerStyle={{
            paddingBottom: 24,
            backgroundColor: '#e5e7eb',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
          keyExtractor={(item) => item.id}
        />
        <View className='h-[120px]'></View>
        <View className='fixed bottom-28 h-12 w-full flex-row items-center px-5'>
          {/* 이전 Day이동 (왼쪽 화살표) */}
          <TouchableOpacity
            disabled={Number(day) === 1}
            className={`w-[18%] h-full m-1 items-center flex-row justify-start bg-[#d6dff7] rounded-l-3xl pl-2`}
            onPress={() => router.push(`/memorize/${Number(day) - 1}`)}
          >
            <MaterialCommunityIcons
              name='arrow-left'
              size={30}
              color={Number(day) === 1 ? '#b8b7b7' : 'black'}
            />
          </TouchableOpacity>
          {/* Eng, Kor 가리기 버튼 */}
          <TouchableOpacity
            onPress={() => setIsEngHide(!isEngHide)}
            className='flex-1 h-full m-1 bg-purple-300 flex-row rounded-xl'
          >
            <Text className='w-full text-center self-center'>
              {isEngHide ? 'Show' : 'Hide'} Eng
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsKorHide(!isKorHide)}
            className='flex-1 h-full m-1 bg-blue-300 flex-row rounded-xl'
          >
            <Text className='w-full text-center self-center'>
              {isKorHide ? 'Show' : 'Hide'} Kor
            </Text>
          </TouchableOpacity>
          {/* 다음 Day이동 (오른쪽 화살표) */}
          <TouchableOpacity
            disabled={Number(day) === days?.length}
            className='w-[18%] h-full m-1 items-center flex-row justify-end bg-[#d6dff7] rounded-r-3xl pr-2'
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
      {seeCreateWordModal && (
        <CreateWordModal
          user={user}
          days={days}
          setSeeCreateWordModal={setSeeCreateWordModal}
          detailDay={day}
        />
      )}
      {/* Delete Word 모달 */}
      {seeDeleteModal && (
        <DeleteWordModal
          wordToDelete={wordToDelete}
          setSeeDeleteModal={setSeeDeleteModal}
          setWords={setWords}
          words={words}
          setDeletedWords={setDeletedWords}
          deletedWords={deletedWords}
          docsToDelete={docsToDelete}
        />
      )}
    </CommonBackground>
  );
};

export default index;
