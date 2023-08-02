import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { authService } from '../lib/fBase';
import { useRouter } from 'expo-router';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session/';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, Button, Linking } from 'react-native';

const AuthContext = createContext();
export default AuthContext;

WebBrowser.maybeCompleteAuthSession(); // 웹 브라우저를 사용하여 인증을 완료하거나 세션을 종료

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // 일반 로그인
  const loginUser = async (e) => {
    try {
      const data = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
      router.push('/home');
      setPassword('');
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  // 구글 로그인
  const [gg_req, gg_res, gg_promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.EXPOCLIENT_ID,
    iosClientId: process.env.IOSCLIENT_ID,
    androidClientId: process.env.ANDROIDCLIENT_ID,
    webClientId: process.env.EXPOCLIENT_ID,
    responseType: 'id_token',
  });

  // 구글 로그인 성공시
  useEffect(() => {
    if (gg_res?.type === 'success') {
      const { id_token } = gg_res.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(authService, credential);
      router.replace('/home');
    }
  }, [gg_res]);

  // 페이스북 로그인
  const [fb_req, fb_res2, fb_promptAsync] = Facebook.useAuthRequest({
    clientId: process.env.FACEBOOK_CLINET_ID,
    clientSecret: process.env.FACEBOOK_CLINET_SECRET,
  });

  // 페이스북 로그인 성공시
  useEffect(() => {
    if (fb_res2?.type === 'success') {
      const { accessToken } = fb_res2.authentication;
      const credential = FacebookAuthProvider.credential(accessToken);
      signInWithCredential(authService, credential);
      router.replace('/home');
    }
  }, [fb_res2]);

  // 로그아웃
  const logoutUser = async () => {
    authService?.signOut();
    setUser(undefined);
    router.replace('log-in');
  };

  // 회원 인증 체크 (로그인한 사용자 정보)
  const checkAuthState = async () => {
    // const userJson = await AsyncStorage.getItem('user');
    // const userData = userJson ? JSON.parse(userJson) : null;
    onAuthStateChanged(authService, async (_user) => {
      if (_user) {
        setUser({
          displayName: _user.displayName,
          uid: _user.uid,
        });
        await AsyncStorage.setItem('user', JSON.stringify(_user));
      }
    });
  };

  // 공유 할 데이터
  const contextData = {
    user,
    loginUser,
    email,
    setEmail,
    password,
    setPassword,
    error,
    checkAuthState,
    gg_promptAsync,
    fb_promptAsync,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
