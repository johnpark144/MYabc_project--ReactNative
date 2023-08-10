import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { useEffect, useState } from 'react';
import CommonBackground from '../../components/CommonBackground';
import WebView from 'react-native-webview';

const video = () => {
  const [showCreate, setShowCreate] = useState(false);

  function seeCreate() {
    setShowCreate(!showCreate);
  }

  return (
    <CommonBackground>
      <WebView // 웹부분을 사용하게함
        source={{ uri: 'https://youglish.com' }}
        javaScriptEnabled={true}
      />
    </CommonBackground>
  );
};

export default video;
