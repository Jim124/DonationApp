import 'react-native-gesture-handler';
import { useCallback, useEffect, useRef } from 'react';
import { useFonts } from 'expo-font';
import { AppState } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

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
          console.log('You have come back into the app.');
          await checkToken();
        }
        appState.current = nextAppState;
      }
    );
    checkToken();
    console.log('Application has rendered');
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
