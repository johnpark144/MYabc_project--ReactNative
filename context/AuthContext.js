import {
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
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, Button } from 'react-native';

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
    } catch (err) {
      setError(err.message);
    }
  };

  // 구글 로그인
  const [req, res, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.EXPOCLIENT_ID,
    iosClientId: process.env.IOSCLIENT_ID,
    androidClientId: process.env.ANDROIDCLIENT_ID,
    responseType: 'id_token',
  });

  // 구글 로그인 성공시
  useEffect(() => {
    if (res?.type === 'success') {
      const { id_token } = res.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(authService, credential);
      router.replace('/home');
    }
  }, [res]);

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
    promptAsync,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
