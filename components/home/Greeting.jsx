import { View, Text, Image } from 'react-native';
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { pTSansNarrowBold, sairaCondensedLight } from '../../commonStyles';

const Greeting = () => {
  let { user, loginUser, error, checkAuthState, logoutUser } =
    useContext(AuthContext);

  return (
    <>
      {/* 첫 페이지 */}
      <View className='w-screen h-screen p-5 gap-y-3'>
        <View className='flex justify-center items-center'>
          <Image
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217299245-76306248-6c80-4bf8-a1f0-ccb962648a8f.png',
            }}
            className='w-56 h-56'
          />
        </View>
        <View className='gap-y-5'>
          <Text style={pTSansNarrowBold} className='text-2xl'>
            Hey {user?.displayName}! {'\n'}ARE YOU READY TO ENJOY ENGLISH?
          </Text>
          <Text style={sairaCondensedLight} className='text-xl tracking-[2px]'>
            <Text>
              This is MYabc app for you who need to learn English{'\n'}
            </Text>
            <Text>
              You can learn it in an effective and efficient way.{'\n'}
            </Text>
            <Text>Whoever need to use this,{'\n'}</Text>
            <Text>Feel free to use it!{'\n'}</Text>
            <Text>Application maker : John park (박영환)</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Greeting;
