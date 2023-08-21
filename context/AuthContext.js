import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithCredential,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { authService } from '../lib/fBase';
import { useRouter } from 'expo-router';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
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
  const [delDayRef, setDelDayRef] = useState([]);
  const [lastDay, setLastDay] = useState(0);

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
  const [fb_req, fb_res, fb_promptAsync] = Facebook.useAuthRequest({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  });

  // 페이스북 로그인 성공시
  useEffect(() => {
    if (fb_res?.type === 'success') {
      const { accessToken } = fb_res.authentication;
      const credential = FacebookAuthProvider.credential(accessToken);
      signInWithCredential(authService, credential);
      router.replace('/home');
    }
  }, [fb_res]);

  // 깃허브 로그인
  const [gh_req, gh_res, gh_promptAsync] = useAuthRequest(
    {
      clientId: process.env.GITHUB_CLIENT_ID,
      redirectUri: makeRedirectUri({
        useProxy: true,
        projectNameForProxy: 'myabcrn',
      }),
    },
    {
      authorizationEndpoint: `https://github.com/login/oauth/authorize`,
      tokenEndpoint: 'https://github.com/login/oauth/access_token',
      revocationEndpoint: `https://github.com/settings/connections/applications/${process.env.GITHUB_CLIENT_ID}`,
    }
  );

  // 깃허브 로그인 성공 할때 필요한 함수
  const createTokenWithCode = async (code) => {
    const url =
      `https://github.com/login/oauth/access_token` +
      `?client_id=${process.env.GITHUB_CLIENT_ID}` +
      `&client_secret=${process.env.GITHUB_CLIENT_SECRET}` +
      `&code=${code}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return res.json();
  };

  // 깃허브 로그인 성공시
  useEffect(() => {
    (async () => {
      if (gh_res?.type === 'success') {
        const { code } = gh_res.params;
        router.replace('/home');
        const { token_type, scope, access_token } = await createTokenWithCode(
          code
        );
        if (!access_token) return;
        const credential = GithubAuthProvider.credential(access_token);
        await signInWithCredential(authService, credential);
      }
    })();
  }, [gh_res]);

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
    gh_promptAsync,
    logoutUser,
    signUpUser,
    setDays,
    days,
    isAfterSetDays,
    setIsAfterSetDays,
    delDayRef,
    setDelDayRef,
    lastDay,
    setLastDay,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
