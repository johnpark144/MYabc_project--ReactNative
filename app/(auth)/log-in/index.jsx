import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import React, { useContext } from 'react';
import { Stack, Redirect } from 'expo-router';
import CommonBackground from '../../../components/CommonBackground';
import { VariableFontWght, pTSansNarrowBold } from '../../../commonStyles';
import FontText from './../../../components/CommonFontText';
import AuthContext from '../../../context/AuthContext';
import { AntDesign } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ms } from 'react-native-size-matters';

const logIn = () => {
  const {
    user,
    loginUser,
    email,
    setEmail,
    password,
    setPassword,
    logInError,
    gg_promptAsync,
    fb_promptAsync,
    gh_promptAsync,
  } = useContext(AuthContext);

  // Oauth 버튼 만들기
  const MakeOAuthButton = (iconName, InitCapitalName, color) => {
    return (
      <TouchableOpacity
        onPress={() =>
          InitCapitalName === 'Google'
            ? gg_promptAsync({ showInRecents: true })
            : InitCapitalName === 'Github'
            ? gh_promptAsync({ showInRecents: true })
            : fb_promptAsync({ showInRecents: true })
        }
        style={{
          backgroundColor: `#${color}`,
          height: ms(40, 0.3),
          padding: ms(5, 0.3),
        }}
        className='w-full flex-row justify-center items-center shadow-sm
        shadow-slate-500'
      >
        <AntDesign name={iconName} size={ms(25, 0.3)} color='black' />
        <FontText
          style={{ fontSize: ms(15, 0.3) }}
          className={`text-center ml-3`}
        >
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
          <View
            style={{ rowGap: ms(10, 1.5) }}
            className='flex justify-center items-center w-11/12 h-full rounded-lg bg-[#FFFFFFcc] p-12 overflow-hidden'
          >
            {/* MYabc 로고, 이름 */}
            <View className='flex-row items-center mb-5'>
              <Image
                alt='ABC_LOGO'
                style={{ width: ms(60, 0.5), height: ms(61, 0.5) }}
                source={{
                  uri: 'https://user-images.githubusercontent.com/106279616/217299245-76306248-6c80-4bf8-a1f0-ccb962648a8f.png',
                }}
              />
              <Text
                style={[pTSansNarrowBold, { fontSize: ms(50, 0.5) }]}
                className='ml-4'
              >
                MYabc
              </Text>
            </View>
            {/* 이메일, 패스워드, 로그인버튼 */}
            <TextInput
              value={email}
              style={{ height: ms(30, 0.2), fontSize: ms(13, 0.2) }}
              className='border border-solid border-gray-400 rounded w-full pl-2'
              onChangeText={(text) => setEmail(text)}
              placeholder='Email'
              placeholderTextColor='gray'
            />
            <TextInput
              value={password}
              style={{ height: ms(30, 0.2), fontSize: ms(13, 0.2) }}
              className='border border-solid border-gray-400 rounded w-full pl-2'
              onChangeText={(text) => setPassword(text)}
              placeholder='Password'
              placeholderTextColor='gray'
              secureTextEntry={true} //  비밀번호 형태로
            />
            <TouchableOpacity
              onPress={loginUser}
              className='border border-solid border-gray-300 rounded w-full shadow-sm
              shadow-slate-500'
            >
              <FontText
                style={{
                  height: ms(30, 0.5),
                  fontSize: ms(15, 0.5),
                  padding: ms(5, 0.7),
                }}
                className='text-center bg-[#87d892]'
              >
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
              <View style={{ rowGap: ms(5, 0.5) }}>
                {MakeOAuthButton('google', 'Google', 'ebebeb')}
                {MakeOAuthButton('github', 'Github', 'bdbdbd')}
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
