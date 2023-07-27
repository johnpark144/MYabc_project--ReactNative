import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import CommonBackground from '../../../components/CommonBackground';

const logIn = () => {
  return (
    <CommonBackground>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Text>logIn</Text>
    </CommonBackground>
  );
};

export default logIn;
