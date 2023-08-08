import { View, Text, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../context/AuthContext';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FontText from '../../../components/CommonFontText';
import { Stack } from 'expo-router';
import CommonBackground from './../../../components/CommonBackground';
import { pTSansNarrowBold, sairaCondensedLight } from '../../../commonStyles';
import Greeting from '../../../components/home/Greeting';
import Mem from '../../../components/home/Mem';
import Dic from './../../../components/home/Dic';
import Vid from '../../../components/home/Vid';
import Gram from './../../../components/home/Gram';

const home = () => {
  let { user, loginUser, error, checkAuthState, logoutUser } =
    useContext(AuthContext);

  useEffect(() => {
    checkAuthState();
  }, []);
  return (
    <CommonBackground>
      <View>
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