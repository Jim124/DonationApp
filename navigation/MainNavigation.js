import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Notifications' component={Notifications} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Settings' component={Settings} />
    </Stack.Navigator>
  );
}

import Home from '../screens/Home/Home';
import { Routes } from './Routes';
import SingleDonationItem from '../screens/SingleDonationScreen/SingleDonationItem';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import Payment from '../screens/Payment/Payment';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
      <Stack.Screen name={Routes.Payment} component={Payment} />
    </Stack.Navigator>
  );
};
