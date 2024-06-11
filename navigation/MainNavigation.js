import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home/Home';
import { Routes } from './Routes';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
