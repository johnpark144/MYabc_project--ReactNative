import { Image, StyleSheet, Text, View } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import { hideAsync } from 'expo-splash-screen';
import { pTSansNarrowBold } from '../commonStyles';
import videoSrc from '../assets/splashScreen.mp4';
import * as Animatable from 'react-native-animatable';

const Splash = ({ setSplashComplete }) => {
  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded && status.didJustFinish) {
      hideAsync();
      setSplashComplete(true);
    }
  };
  return (
    <View className='w-full h-full bg-black'>
      {/* 로고와 MYabc 애니메이션 */}
      <Animatable.View
        animation='slideInUp'
        iterationCount={1}
        className='absolute top-1/4 w-full flex-row justify-center items-center mb-5 z-10 opacity-[0.65]'
      >
        <Image
          alt='ABC_LOGO'
          className='w-[96px] h-[98px]'
          source={{
            uri: 'https://user-images.githubusercontent.com/106279616/217299245-76306248-6c80-4bf8-a1f0-ccb962648a8f.png',
          }}
        />
        <Text style={pTSansNarrowBold} className='text-7xl text-[#A447A6] ml-4'>
          MYabc
        </Text>
      </Animatable.View>
      {/* 비디오 */}
      <Video
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.STRETCH}
        source={videoSrc}
        isLooping={false}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        shouldPlay={true}
      />
    </View>
  );
};

export default Splash;
