import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import FontText from '../../components/CommonFontText';

export default () => {
  let { user, loginUser, error, checkAuthState, logoutUser } =
    useContext(AuthContext);
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d6dff7',
        },
        headerTitleStyle: {},
        tabBarStyle: {
          backgroundColor: '#d6dff7',
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: '#431386',
        tabBarInactiveTintColor: 'grey',
        headerLeft: () => (
          <Image
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217299245-76306248-6c80-4bf8-a1f0-ccb962648a8f.png',
            }}
            className='w-9 h-9 ml-4'
          />
        ),
        headerRight: () => (
          <TouchableOpacity onPress={logoutUser}>
            <FontText className='p-2 mr-4 bg-gray-400 text-center align-middle rounded-lg shadow-md shadow-black '>
              Log Out
            </FontText>
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          headerTitle: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='home'
              size={20}
              color={focused ? '#431386' : 'grey'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='memorize'
        options={{
          headerTitle: 'Memorize',
          tabBarLabel: 'Memorize',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='head-cog-outline'
              size={20}
              color={focused ? '#431386' : 'grey'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='dictionary'
        options={{
          headerTitle: 'Dictionary',
          tabBarLabel: 'Dictionary',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='book-open-variant'
              size={20}
              color={focused ? '#431386' : 'grey'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='video'
        options={{
          headerTitle: 'Video',
          tabBarLabel: 'Video',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name='ondemand-video'
              size={20}
              color={focused ? '#431386' : 'grey'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='grammarly'
        options={{
          headerTitle: 'Grammarly',
          tabBarLabel: 'Grammarly',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name='file-document-outline'
              size={20}
              color={focused ? '#431386' : 'grey'}
            />
          ),
        }}
      />
    </Tabs>
  );
};
