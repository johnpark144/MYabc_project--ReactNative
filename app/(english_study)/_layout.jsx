import { Tabs, useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Image, TouchableOpacity, View } from 'react-native';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import FontText from '../../components/CommonFontText';
import { Vibration } from 'react-native';

export default () => {
  const router = useRouter();
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#d6dff7',
        },
        tabBarStyle: {
          backgroundColor: '#d6dff7',
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: '#431386',
        tabBarInactiveTintColor: 'grey',
        tabBarButton: (props) => {
          // 버튼 커스텀화
          return (
            <TouchableOpacity
              style={{ width: '20%' }}
              onPress={() => {
                Vibration.vibrate(20);
                router.push(route.name);
              }}
            >
              {props.children}
            </TouchableOpacity>
          );
        },
        headerLeft: () => (
          <Image
            source={{
              uri: 'https://user-images.githubusercontent.com/106279616/217299245-76306248-6c80-4bf8-a1f0-ccb962648a8f.png',
            }}
            className='w-[35px] h-[35px] ml-4'
          />
        ),
        headerRight: () => (
          <View className='flex flex-row content-center justify-center mr-4 px-2'>
            <FontText className='w-28 h-8 py-2 text-right pr-3'>
              {user?.displayName}
            </FontText>
            <TouchableOpacity onPress={logoutUser}>
              <FontText className='w-16 h-8 py-2 bg-gray-400 text-center rounded-lg shadow-md shadow-black'>
                Log Out
              </FontText>
            </TouchableOpacity>
          </View>
        ),
      })}
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
        name='grammar'
        options={{
          headerTitle: 'Grammar',
          tabBarLabel: 'Grammar',
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
