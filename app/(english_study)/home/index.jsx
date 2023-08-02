import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontText from '../../../components/CommonFontText';
import { Stack } from 'expo-router';
import CommonBackground from './../../../components/CommonBackground';

const home = () => {
  let { user, loginUser, error, checkAuthState, logoutUser } =
    useContext(AuthContext);

  useEffect(() => {
    checkAuthState();
  }, []);
  console.log(user);
  return (
    <CommonBackground>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
    </CommonBackground>
  );
};

export default home;
