import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { AuthProvider } from '../context/AuthContext';

const Layout = () => {
  // 폰트
  const [fontsLoaded] = useFonts({
    PTSansNarrowBold: require('../assets/font/PTSansNarrow-Bold.ttf'),
    PublicSansVariable: require('../assets/font/PublicSans-VariableFont_wght.ttf'),
    PublicSansSemiBold: require('../assets/font/PublicSans-SemiBold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='home' options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};

export default Layout;
