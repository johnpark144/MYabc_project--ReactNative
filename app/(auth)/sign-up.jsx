import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Stack, Redirect } from 'expo-router';
import CommonBackground from '../../components/CommonBackground';
import { VariableFontWght } from '../../commonStyles';
import FontText from './../../components/CommonFontText';
import AuthContext from '../../context/AuthContext';
import AnimatedLottieView from 'lottie-react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const signUp = () => {
  let {
    user,
    loginUser,
    email,
    setEmail,
    password,
    setPassword,
    signUpError,
    setSignUpError,
    signUpUser,
  } = useContext(AuthContext);

  return user ? (
    <Redirect href='/home' />
  ) : (
    <CommonBackground>
      <TouchableWithoutFeedback // 이 공간안 클릭했을때 키보드 사라지게
        onPress={Keyboard.dismiss}
      >
        <View
          style={VariableFontWght}
          className='flex justify-center items-center h-full'
        >
          <View className='flex items-center justify-center w-11/12 h-full rounded-lg bg-[#FFFFFF77] px-12 gap-y-6 overflow-hidden'>
            {/* Lottie */}
            <AnimatedLottieView
              source={require('../../assets/lottie/signup_animation.json')}
              autoPlay
              loop
              className='w-9/12 max-w-xl'
            />
            {/* 이메일, 패스워드, 로그인버튼 */}
            <TextInput
              value={email}
              className='border border-solid border-gray-400 rounded w-full'
              onChangeText={(text) => setEmail(text)}
              placeholder='Email'
            />
            <TextInput
              value={password}
              className='border border-solid border-gray-400 rounded w-full'
              onChangeText={(text) => setPassword(text)}
              placeholder='Password'
              secureTextEntry={true} //  비밀번호 형태로
            />
            <TouchableOpacity
              onPress={signUpUser}
              className='border border-solid border-gray-300 rounded w-full shadow-md shadow-black'
            >
              <FontText className='text-center bg-[#87d892] font-normal text-xl p-1'>
                Create Account
              </FontText>
            </TouchableOpacity>
            <Text className='text-red-600'>{signUpError?.slice(10, -1)}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </CommonBackground>
  );
};

export default signUp;
