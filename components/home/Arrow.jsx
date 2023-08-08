import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

const Arrow = ({ leftExistance, rightExistance, extraTop = false }) => {
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);

  // 화살표 보이고 가리기 함수
  const showAndHideArrow = () => {
    setTimeout(() => setIsShow1(true), 300);
    setTimeout(() => setIsShow2(true), 600);
    setTimeout(() => setIsShow3(true), 900);
    setTimeout(() => setIsShow1(false), 1200);
    setTimeout(() => setIsShow2(false), 1400);
    setTimeout(() => setIsShow3(false), 1700);
  };

  // setInterval 작동시키기
  useEffect(() => {
    showAndHideArrow(); // setInterval 작동 전 첫 시작
    const showAndHideArrowTimer = setInterval(showAndHideArrow, 2000);
    return () => {
      clearInterval(showAndHideArrowTimer);
    };
  }, []);

  return (
    <View
      className={`absolute w-screen ${
        extraTop ? 'top-[45%]' : 'top-[50%]'
      } px-2 flex-row items-center justify-between`}
    >
      <Text className='text-6xl text-[#ffffffaa] tracking-[-8px]'>
        {leftExistance && (
          <>
            <Text>{isShow3 ? <>&#8249;</> : ' '}</Text>
            <Text>{isShow2 ? <>&#8249;</> : ' '}</Text>
            <Text>{isShow1 ? <>&#8249;</> : ' '}</Text>
          </>
        )}
      </Text>
      <Text className='text-6xl text-[#ffffffaa] tracking-[-8px]'>
        {rightExistance && (
          <>
            <Text>{isShow1 ? <>&#8250;</> : ' '}</Text>
            <Text>{isShow2 ? <>&#8250;</> : ' '}</Text>
            <Text>{isShow3 ? <>&#8250;</> : ' '}</Text>
          </>
        )}
      </Text>
    </View>
  );
};

export default Arrow;
