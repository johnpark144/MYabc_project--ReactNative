import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { vs, ms } from 'react-native-size-matters';

const Arrow = ({ leftExistance, rightExistance }) => {
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);

  // 화살표 보이고 가리기 함수
  const showAndHideArrow = () => {
    setTimeout(() => setIsShow1(true), 300);
    setTimeout(() => setIsShow2(true), 600);
    setTimeout(() => setIsShow1(false), 900);
    setTimeout(() => setIsShow2(false), 1200);
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
      className={`absolute w-screen top-[30%] px-2 flex-row items-center justify-between`}
    >
      <Text
        style={{
          fontSize: ms(90, 1),
          letterSpacing: vs(-5, 5),
        }}
        className=' text-[#ffffff66] ml-2'
      >
        {leftExistance && (
          <>
            <Text>{isShow2 ? <>&#8249;</> : ' '}</Text>
            <Text>{isShow1 ? <>&#8249;</> : ' '}</Text>
          </>
        )}
      </Text>
      <Text
        style={{ fontSize: ms(90, 1), letterSpacing: vs(-5, 5) }}
        className=' text-[#ffffff66] mr-2'
      >
        {rightExistance && (
          <>
            <Text>{isShow1 ? <>&#8250;</> : ' '}</Text>
            <Text>{isShow2 ? <>&#8250;</> : ' '}</Text>
          </>
        )}
      </Text>
    </View>
  );
};

export default Arrow;
