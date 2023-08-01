import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import AuthContext from './../context/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontText from '../components/CommonFontText';

const home = () => {
  let { user, loginUser, error, checkAuthState, logoutUser } =
    useContext(AuthContext);

  useEffect(() => {
    checkAuthState();
  }, []);

  return (
    <TouchableOpacity
      onPress={logoutUser}
      className='border border-solid border-gray-300 rounded w-full mt-14'
    >
      <FontText className='text-center bg-[#87d892] font-medium text-xl'>
        Sign Out
      </FontText>
    </TouchableOpacity>
  );
};

export default home;
