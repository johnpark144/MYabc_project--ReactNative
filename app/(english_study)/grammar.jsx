import { View, Text } from 'react-native';
import React from 'react';
import CommonBackground from '../../components/CommonBackground';
import WebView from 'react-native-webview';

const grammar = () => {
  return (
    <CommonBackground>
      <WebView
        source={{ uri: 'https://quillbot.com/grammar-check' }}
        scrollEnabled={false}
        originWhitelist={['*']}
      />
    </CommonBackground>
  );
};

export default grammar;
