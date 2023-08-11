import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();
export default AuthContext;

WebBrowser.maybeCompleteAuthSession(); // 웹 브라우저를 사용하여 인증을 완료하거나 세션을 종료

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [logInError, setLogInError] = useState('');
  const [user, setUser] = useState(null);
  const [days, setDays] = useState([]);
  const [isAfterSetDays, setIsAfterSetDays] = useState(false);

  // 회원가입
  const signUpUser = async (e) => {
    try {
      const data = await createUserWithEmailAndPassword(
        authService,
        email,
        password
      );
      router.push('/home');
      setPassword('');
      setSignUpError('');
      setLogInError('');
    } catch (err) {
      setSignUpError(err.message);
    }
  };

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
      setLogInError('');
      setSignUpError('');
    } catch (err) {
      setLogInError(err.message);
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
    setUser(null);
    router.replace('log-in');
    setDays([]);
    setIsAfterSetDays(false);
  };

  // 회원 인증 체크 (로그인한 사용자 정보)
  const checkAuthState = async () => {
    onAuthStateChanged(authService, async (_user) => {
      if (_user) {
        setUser({
          displayName: _user?.displayName,
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
    logInError,
    signUpError,
    setLogInError,
    setSignUpError,
    checkAuthState,
    gg_promptAsync,
    fb_promptAsync,
    logoutUser,
    signUpUser,
    setDays,
    days,
    isAfterSetDays,
    setIsAfterSetDays,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
