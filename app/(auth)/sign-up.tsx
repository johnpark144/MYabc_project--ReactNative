import { View, Text, TextInput, Keyboard } from 'react-native';
import { useContext } from 'react';
import { Redirect } from 'expo-router';
import CommonBackground from '../../components/CommonBackground';
import FontText from '../../components/CommonFontText';
import AuthContext from '../../context/AuthContext';
import AnimatedLottieView from 'lottie-react-native';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { ms } from 'react-native-size-matters';

const signUp = () => {
  let {
    user,
    email,
    setEmail,
    password,
    setPassword,
    signUpError,
    signUpUser,
  } = useContext(AuthContext);

  return user ? (
    <Redirect href='/home' />
  ) : (
    <CommonBackground>
      <TouchableWithoutFeedback // 이 공간안 클릭했을때 키보드 사라지게
        onPress={Keyboard.dismiss}
      >
        <View className='flex justify-center items-center h-full'>
          <View
            style={{ rowGap: ms(10, 2) }}
            className='flex items-center justify-center w-11/12 h-full rounded-lg bg-[#FFFFFFcc] px-12 overflow-hidden'
          >
            {/* Lottie */}
            <AnimatedLottieView
              source={require('../../assets/lottie/signup_animation.json')}
              autoPlay
              loop
              /* @ts-ignore */
              className='w-9/12 max-w-xl'
            />
            {/* 이메일, 패스워드 */}
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
            {/* 가입 버튼 */}
            <TouchableOpacity
              onPress={signUpUser}
              className='border border-solid border-gray-300 rounded w-full shadow-sm
              shadow-slate-500'
            >
              <FontText
                style={{
                  height: ms(30, 0.5),
                  fontSize: ms(15, 0.5),
                  padding: ms(5, 0.7),
                  width: ms(222, 1.46),
                }}
                className='text-center bg-[#87d892] font-normal'
              >
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
