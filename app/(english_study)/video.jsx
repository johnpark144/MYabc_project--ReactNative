import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
} from 'react-native';
import { useEffect, useState } from 'react';
import CommonBackground from '../../components/CommonBackground';
import WebView from 'react-native-webview';

const video = () => {
  const [showCreate, setShowCreate] = useState(false);
  const pan = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
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

  function seeCreate() {
    setShowCreate(!showCreate);
  }

  return (
    <CommonBackground>
      <Animated.View
        className='absolute w-10 h-10 bg-red-500 z-10'
        style={pan.getLayout()}
        {...panResponder.panHandlers}
      />

      <WebView // 웹부분을 사용하게함
        source={{ uri: 'https://youglish.com' }}
        javaScriptEnabled={true}
      />
    </CommonBackground>
  );
};

export default video;
