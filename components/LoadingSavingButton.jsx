import { Text, TouchableOpacity, Animated, Easing, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Path, Svg } from 'react-native-svg';

const LoadingSavingButton = () => {
  const [rotateValue] = useState(new Animated.Value(0)); // 애니메이션 값을 저장

  useEffect(() => {
    // 무한반복
    const animation = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    animation.start();
    return () => {
      animation.stop();
    };
  }, []);

  // 애니메이션 값의 변화
  const loadingRotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <TouchableOpacity className='w-36 py-3 bg-[#6366f1aa] rounded-lg'>
      <View className='flex-row justify-center items-center'>
        {/* 애니메이션 주기 */}
        <Animated.View
          className='w-5 h-5'
          style={{ transform: [{ rotate: loadingRotation }] }}
        >
          <Svg
            width='20'
            height='20'
            className='text-white'
            fill='currentColor'
            viewBox='0 0 1792 1792'
          >
            <Path d='M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z'></Path>
          </Svg>
        </Animated.View>
        <Text className='text-white ml-4'>saving</Text>
      </View>
    </TouchableOpacity>
  );
};
//  shadow-md shadow-black'
export default LoadingSavingButton;
