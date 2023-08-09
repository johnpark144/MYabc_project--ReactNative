import { Redirect } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { authService } from './../lib/fBase';
import AuthContext from '../context/AuthContext';

const StartPage = () => {
  let { user } = useContext(AuthContext);

  return (
    <>
      {true ? (
        // 로그인이 된경우
        <Text>
          <Redirect href='/memorize/1' />;
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
