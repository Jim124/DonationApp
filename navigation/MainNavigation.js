import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import { Routes } from './Routes';
import SingleDonationItem from '../screens/SingleDonationScreen/SingleDonationItem';
import Login from '../screens/Login/Login';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
