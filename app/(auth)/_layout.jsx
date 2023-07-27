import { Tabs } from 'expo-router';

export default () => {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen name='log-in' options={{ headerTitle: 'Log in' }} />
      <Tabs.Screen name='sign-up' options={{ headerTitle: 'Sign up' }} />
    </Tabs>
  );
};
