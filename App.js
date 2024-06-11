import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { GestureDetector } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import MainNavigation from './navigation/MainNavigation';
import store from './redux/store';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <StatusBar style='auto' />
      <Provider store={store}>
        <NavigationContainer onReady={onLayoutRootView}>
          <MainNavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
}
