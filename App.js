import { useCallback, useEffect, useRef } from 'react';
import { useFonts } from 'expo-font';
import { AppState, Platform } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import 'react-native-reanimated';

import store from './redux/store';
import { persistor } from './redux/store';
import RootNavigation from './navigation/RootNavigation';
import { checkToken } from './api/use';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscripton = AppState.addEventListener(
      'change',
      async (nextAppState) => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          await checkToken();
        }
        appState.current = nextAppState;
      }
    );
    checkToken();
  }, []);

  // get access to get token
  useEffect(() => {
    subscribeToNotification();
  }, []);
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  async function subscribeToNotification() {
    let token = '';
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
          alert('Failed to get permissions');
          return;
        }
      }
      token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants?.expoConfig?.extra?.eas?.projectId,
      });
      console.log('token:', token);
    }
    return token;
  }
  return (
    <>
      <StatusBar style='auto' />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <NavigationContainer onReady={onLayoutRootView}>
            <RootNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}
