import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { pTSansNarrowBold, sairaCondensedLight } from '../../commonStyles';
import { Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Arrow from './Arrow';
import { vs, ms } from 'react-native-size-matters';

const Greeting = () => {
  let { user } = useContext(AuthContext);

  return (
    <>
      <View
        className='w-screen h-screen'
        style={{ padding: vs(30), rowGap: vs(10) }}
      >
        {/* MYabc 로고 */}
        <View className='flex justify-center items-center'>
          <Image
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217299245-76306248-6c80-4bf8-a1f0-ccb962648a8f.png',
            }}
            className='w-[160px] h-[163px]'
          />
        </View>
        <View style={{ rowGap: ms(7, 10) }}>
          {/* 인사말 */}
          <Text style={[pTSansNarrowBold, { fontSize: ms(20, 2) }]}>
            Hey {user?.displayName}! {'\n'}ARE YOU READY TO ENJOY ENGLISH?
          </Text>
          <Text
            style={[sairaCondensedLight, { fontSize: ms(15, 2) }]}
            className='tracking-[2px]'
          >
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
          {/* 웹버전 버튼 */}
          <View className='flex-row justify-center w-full'>
            <LinearGradient
              className='w-2/3 h-10 rounded-3xl flex-row justify-center items-center shadow-xl shadow-black'
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              colors={['#52e4e0', '#4ce2b6']}
            >
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://resilient-hummingbird-f7421f.netlify.app/'
                  )
                }
              >
                <Text>Web Version</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
      {/* 좌우 넘김 화살표 */}
      <Arrow leftExistance={false} rightExistance={true} />
    </>
  );
};

export default Greeting;
