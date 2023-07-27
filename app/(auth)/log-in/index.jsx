import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import { Stack, Redirect } from 'expo-router';
import CommonBackground from '../../../components/CommonBackground';
import { VariableFontWght, pTSansNarrowBold } from '../../../commonStyles';
import FontText from './../../../components/CommonFontText';
import AuthContext from '../../../context/AuthContext';

const logIn = () => {
  let { user, loginUser, email, setEmail, password, setPassword, error } =
    useContext(AuthContext);

  return user ? (
    <Redirect href='/home' />
  ) : (
    <CommonBackground>
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
        <View className='flex justify-center items-center w-11/12 h-full bg-white p-12 gap-y-4'>
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
            className='border border-solid border-gray-300 rounded w-full'
            onChangeText={(text) => setEmail(text)}
            placeholder='Email'
          />
          <TextInput
            value={password}
            className='border border-solid border-gray-300 rounded w-full'
            onChangeText={(text) => setPassword(text)}
            placeholder='Password'
            secureTextEntry={true} //  비밀번호 형태로
          />
          <TouchableOpacity
            onPress={loginUser}
            className='border border-solid border-gray-300 rounded w-full '
          >
            <FontText className='text-center bg-[#87d892] font-medium text-xl'>
              Sign in
            </FontText>
          </TouchableOpacity>
          <Text>{error?.slice(10, -1)}</Text>

          {/* -- OR -- */}
          <View className='flex flex-row justify-between w-full'>
            <View className='flex-1 border-t-[1px] border-solid border-gray-300'></View>
            <FontText className='relative -top-2 mx-2'>or</FontText>
            <View className='flex-1 border-t-[1px] border-solid border-gray-300'></View>
          </View>

          {/* Google, gitHub, FaceBook */}
          <View className='w-full'>
            <View className='gap-y-2'>
              <TouchableOpacity className='bg-[#a8a8a8] w-full h-9 p-2'>
                <FontText className='text-center'>
                  Continue with Google
                </FontText>
              </TouchableOpacity>
              <TouchableOpacity className='bg-[#505050] w-full h-9 p-2'>
                <FontText className='text-center'>
                  Continue with Github
                </FontText>
              </TouchableOpacity>
              <TouchableOpacity className='bg-[#4a7edf] w-full h-9 p-2'>
                <FontText className='text-center'>
                  Continue with Facebook
                </FontText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </CommonBackground>
  );
};

export default logIn;
