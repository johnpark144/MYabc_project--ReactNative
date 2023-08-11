import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';
import { useContext, useEffect, useRef, useState } from 'react';
import CommonBackground from '../../components/CommonBackground';
import WebView from 'react-native-webview';
import GradientBtnForModal from './../../components/GradientBtnForModal';
import CreateWordModal from '../../components/CreateWordModal';
import AuthContext from '../../context/AuthContext';

const video = () => {
  const { user, loginUser, error, checkAuthState, logoutUser, setDays, days } =
    useContext(AuthContext);
  const [seeCreateWordModal, setSeeCreateWordModal] = useState(false);
  const [hideText, setHideText] = useState(false);

  // 화면 크기와서 범위 제한, 위치 초기값 가져오기
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [prevPen, setPrevPen] = useState({ x: 30, y: screenHeight - 180 });
  const pan = useRef(
    new Animated.ValueXY({ x: 30, y: screenHeight - 180 })
  ).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: (e, gestureState) => {
      // 드래그한 거리를 저장
      const { dx, dy } = gestureState;

      // 버튼이 드래그되는 최소/최대 x, y 좌표 설정
      const minX = -prevPen.x;
      const maxX = screenWidth - 130 - prevPen.x;
      const minY = -prevPen.y;
      const maxY = screenHeight - 150 - prevPen.y;

      // 버튼이 최소/최대 x, y 좌표를 벗어나지 않도록 제한
      let newDX = dx;
      let newDY = dy;
      if (dx < minX) newDX = minX;
      if (dx > maxX) newDX = maxX;
      if (dy < minY) newDY = minY;
      if (dy > maxY) newDY = maxY;

      // pan 값 업데이트
      pan.setValue({ x: newDX, y: newDY });
    },
    onPanResponderRelease: () => {
      pan.flattenOffset(); // 현재 위치값을 애니메이션 값에 반영
      setPrevPen({ x: pan.x._value, y: pan.y._value });
      setHideText(true);
    },
  });

  return (
    <CommonBackground>
      {/* See Create 버튼 */}
      <Animated.View
        className='absolute w-32 h-12 z-10'
        style={[pan.getLayout()]}
        {...panResponder.panHandlers}
      >
        {!hideText && (
          <Text className='text-gray-400 text-center'>Move this button</Text>
        )}
        <GradientBtnForModal
          btnName='See Create'
          setSeeModal={setSeeCreateWordModal}
        />
      </Animated.View>
      {/* 웹 부분 */}
      <WebView
        source={{ uri: 'https://youglish.com' }}
        javaScriptEnabled={true}
      />

      {/* Create Word 모달 */}
      {seeCreateWordModal && (
        <CreateWordModal
          user={user}
          days={days}
          setSeeCreateWordModal={setSeeCreateWordModal}
          isFromVideo={true}
        />
      )}
    </CommonBackground>
  );
};

export default video;
