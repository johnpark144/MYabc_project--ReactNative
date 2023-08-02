import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d6dff7',
        },
        tabBarStyle: {
          backgroundColor: '#d6dff7',
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
      }}
    >
      <Tabs.Screen
        name='log-in'
        options={{
          headerTitle: 'Log in',
          tabBarIcon: ({ focused }) => (
            <Feather
              name='log-in'
              size={22}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='sign-up'
        options={{
          headerTitle: 'Sign up',
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name='pencil-square-o'
              size={22}
              color={focused ? 'black' : 'grey'}
            />
          ),
        }}
      />
    </Tabs>
  );
};
