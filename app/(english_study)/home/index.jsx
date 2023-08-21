import { View } from 'react-native';
import { useContext, useEffect } from 'react';
import AuthContext from '../../../context/AuthContext';
import { ScrollView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import CommonBackground from './../../../components/CommonBackground';
import Greeting from '../../../components/home/Greeting';
import Mem from '../../../components/home/Mem';
import Dic from './../../../components/home/Dic';
import Vid from '../../../components/home/Vid';
import Gram from './../../../components/home/Gram';
import useCallData from '../../../hooks/useCallData';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { dbService } from '../../../lib/fBase';

const home = () => {
  const {
    user,
    checkAuthState,
    setDays,
    setIsAfterSetDays,
    setDelDayRef,
    setLastDay,
  } = useContext(AuthContext);

  // 유저체크
  useEffect(() => {
    checkAuthState();
  }, []);

  // Days 와 삭제시 필요한 데이터 미리 불러오기
  const dayArr = useCallData('days', 'day');
  useEffect(() => {
    (async () => {
      if (dayArr && user?.uid) {
        // 모든 Days 정보와 LastDay 숫자
        const allDays = dayArr.filter((day) => day.creatorId === user?.uid);
        const lastDayNum = allDays.length;
        setDays(allDays);
        setLastDay(lastDayNum);

        // 나중에 삭제를 위한 LastDay정보
        const q = query(
          collection(dbService, 'days'),
          where('creatorId', '==', user?.uid),
          where('day', '==', lastDayNum)
        );
        const docsSnap = await getDocs(q);
        const docsId = docsSnap.docs[0]?.id;
        setDelDayRef(doc(dbService, 'days', docsId));
      }
      setIsAfterSetDays(true);
    })();
  }, [dayArr, user?.uid]);

  return (
    <CommonBackground>
      <View>
        {/* 헤더 가리기 */}
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        {/* 캐러셀 */}
        <ScrollView
          horizontal
          pagingEnabled // 페이지 단위로 스크롤
          scrollEventThrottle={200} // 스크롤시 이벤트가 발생하는데 성능문제 해결
          decelerationRate='fast' // 스크롤 속도
        >
          {/* 첫 페이지 */}
          <Greeting />
          <Mem />
          <Dic />
          <Vid />
          <Gram />
        </ScrollView>
      </View>
    </CommonBackground>
  );
};

export default home;
