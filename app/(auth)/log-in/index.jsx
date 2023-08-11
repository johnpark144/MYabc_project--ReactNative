import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { Stack, Redirect } from 'expo-router';
import CommonBackground from '../../../components/CommonBackground';
import { VariableFontWght, pTSansNarrowBold } from '../../../commonStyles';
import FontText from './../../../components/CommonFontText';
import AuthContext from '../../../context/AuthContext';
import { AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

const logIn = () => {
  let {
    user,
    loginUser,
    email,
    setEmail,
    password,
    setPassword,
    setLogInError,
    logInError,
    gg_promptAsync,
    fb_promptAsync,
  } = useContext(AuthContext);

  // Oauth 버튼 만들기
  const MakeOAuthButton = (iconName, InitCapitalName, color) => {
    return (
      <TouchableOpacity
        onPress={() =>
          InitCapitalName === 'Google' ? gg_promptAsync() : fb_promptAsync()
        }
        style={{ backgroundColor: `#${color}` }}
        className='w-full p-3 flex-row justify-center items-center shadow-md
        shadow-black'
      >
        <AntDesign name={iconName} size={24} color='black' />
        <FontText className={`text-center ml-3`}>
          Continue with {InitCapitalName}
        </FontText>
      </TouchableOpacity>
    );
  };

  return user ? (
    <Redirect href='/home' />
  ) : (
    <CommonBackground>
      <TouchableWithoutFeedback // 이 공간안 클릭했을때 키보드 사라지게
        onPress={Keyboard.dismiss}
      >
        {/* 옵션으로 헤더 지우기 */}
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <View
          style={VariableFontWght}
          className='flex justify-center items-center h-full'
        >
          <View className='flex justify-center items-center w-11/12 h-full rounded-lg bg-[#FFFFFF77] p-12 gap-y-4 overflow-hidden'>
            {/* MYabc 로고, 이름 */}
            <View className='flex-row items-center mb-5'>
              <Image
                alt='ABC_LOGO'
                className='w-16 h-16'
                source={{
                  uri: 'https://user-images.githubusercontent.com/106279616/217299245-76306248-6c80-4bf8-a1f0-ccb962648a8f.png',
                }}
              />
              <Text style={pTSansNarrowBold} className='text-4xl ml-4'>
                MYabc
              </Text>
            </View>
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
              onPress={loginUser}
              className='border border-solid border-gray-300 rounded w-full shadow-md shadow-black'
            >
              <FontText className='text-center bg-[#87d892] font-normal text-xl p-1'>
                Sign in
              </FontText>
            </TouchableOpacity>
            <Text className='text-red-600'>{logInError?.slice(10, -1)}</Text>

            {/* -- OR -- */}
            <View className='flex flex-row justify-between w-full'>
              <View className='flex-1 border-t-[1px] border-solid border-gray-300'></View>
              <FontText className='relative -top-2 mx-2'>or</FontText>
              <View className='flex-1 border-t-[1px] border-solid border-gray-300'></View>
            </View>

            {/* Google, gitHub, FaceBook */}
            <View className='w-full'>
              <View className='gap-y-2'>
                {MakeOAuthButton('google', 'Google', 'ebebeb')}
                {MakeOAuthButton('facebook-square', 'Facebook', '4a7edf')}
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </CommonBackground>
  );
};

export default logIn;
