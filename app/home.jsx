import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { authService } from '../lib/fBase';
import AuthContext from './../context/AuthContext';

const home = () => {
  let { user, loginUser, error, checkAuthState } = useContext(AuthContext);

  useEffect(() => {
    checkAuthState();
  }, []);

  console.log(user);
  return (
    <View>
      <Text>home</Text>
    </View>
  );
};

export default home;
