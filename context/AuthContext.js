import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { authService } from '../lib/fBase';
import { useRouter } from 'expo-router';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  // 로그인
  const loginUser = async (e) => {
    try {
      const data = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
      router.push('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  // 회원 인증 체크 (로그인한 사용자 정보)
  const checkAuthState = () => {
    onAuthStateChanged(authService, (_user) => {
      if (_user) {
        setUser({
          displayName: _user.displayName,
          uid: _user.uid,
        });
      }
    });
  };

  // 사용 할 데이터
  const contextData = {
    user,
    loginUser,
    email,
    setEmail,
    password,
    setPassword,
    error,
    checkAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
