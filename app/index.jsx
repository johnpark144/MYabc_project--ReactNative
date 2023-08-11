import { Redirect, Stack } from 'expo-router';
import { useContext, useState } from 'react';
import { Text } from 'react-native';
import AuthContext from '../context/AuthContext';
import Splash from '../components/Splash';
import { preventAutoHideAsync } from 'expo-splash-screen';
import * as NavigationBar from 'expo-navigation-bar';

preventAutoHideAsync();

const StartPage = () => {
  const { user } = useContext(AuthContext);
  const [splahsComplete, setSplashComplete] = useState(false);
  NavigationBar.setBackgroundColorAsync('black'); // 밑에 네비바 색 변경
  return (
    <>
      {/* 헤더 가리기 */}
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {/* 스플래시 스크린 */}
      {!splahsComplete ? (
        <Splash setSplashComplete={setSplashComplete} />
      ) : user ? (
        // 로그인이 된경우
        <Text>
          <Redirect href='/home' />;
        </Text>
      ) : (
        // 로그인이 안된경우
        <Text>
          <Redirect href='/log-in' />;
        </Text>
      )}
    </>
  );
};

export default StartPage;
