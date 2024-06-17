import {
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { useState } from 'react';

import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Colors from '../../assets/styles/colors';
import { Routes } from '../../navigation/Routes';
import { loginUser } from '../../api/use';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/reducers/User';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  function handleEmail(value) {
    setEmail(value);
  }
  function handlePassword(value) {
    setPassword(value);
  }
  const handleLogin = async () => {
    if (email.length < 5 || password.length < 8) {
      setError('Please enter valid email or password');
      return;
    }
    setIsLoading(true);
    const response = await loginUser(email, password);
    if (!response.status) {
      setError(response.error);
    } else {
      dispatch(logIn(response.data));
      setError('');
      navigation.navigate(Routes.Home);
    }
    setIsLoading(false);
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <ScrollView contentContainerStyle={style.container}>
        <View style={globalStyle.marginBotton24}>
          <Header title={'Welcome Back'} type={1} />
        </View>
        <View style={globalStyle.marginBotton24}>
          <Input
            label={'Email'}
            placeholder={'Enter your email...'}
            onChangeText={handleEmail}
            keyboardType={'email-address'}
          />
        </View>
        <View style={globalStyle.marginBotton24}>
          <Input
            label={'Password'}
            placeholder={'******'}
            onChangeText={handlePassword}
            secureTextEntry={true}
          />
        </View>
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        <View style={globalStyle.marginBotton24}>
          {isLoading ? (
            <ActivityIndicator color={Colors.logoutColor} />
          ) : (
            <Button
              isDisabled={email.length < 5 || password.length < 8}
              title='Login'
              onPress={handleLogin}
            />
          )}
        </View>
        <Pressable
          style={style.registerLink}
          onPress={() => navigation.navigate(Routes.Registration)}
        >
          <Header
            title={`Dont't have an account?`}
            color={Colors.registerLinkColor}
            type={3}
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
