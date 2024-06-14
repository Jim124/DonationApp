import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCLcfOc7AwDe2WIjhyYpTt9M3q5sgzPpEY',
  authDomain: 'donationapp-2b2e8.firebaseapp.com',
  databaseURL:
    'https://donationapp-2b2e8-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'donationapp-2b2e8',
  storageBucket: 'donationapp-2b2e8.appspot.com',
  messagingSenderId: '902536094293',
  appId: '1:902536094293:web:4ca4d71fc0b9c81b19aadc',
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export default app;
