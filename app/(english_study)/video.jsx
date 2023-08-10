import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
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
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      // pan의 위치에서 시작
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      // 원래 있어야할 곳 추가 조정
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event(
      [null, { dx: pan.x, dy: pan.y }], // 터치하여 움직이는 만큼 움직임
      {
        useNativeDriver: false,
      }
    ),
    onPanResponderRelease: () => {
      pan.flattenOffset(); // 현재 위치값을 애니메이션 값에 반영
    },
  });

  return (
    <CommonBackground>
      <Animated.View
        className='absolute w-32 h-10 z-10'
        style={pan.getLayout()}
        {...panResponder.panHandlers}
      >
        <GradientBtnForModal
          btnName='See Create'
          setSeeModal={setSeeCreateWordModal}
        />
      </Animated.View>

      <WebView // 웹부분을 사용하게함
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
