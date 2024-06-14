import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import { useState } from 'react';

import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Colors from '../../assets/styles/colors';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleEmail(value) {
    setEmail(value);
  }
  function handlePassword(value) {
    setPassword(value);
  }
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
        <View style={globalStyle.marginBotton24}>
          <Button
            title='Login'
            onPress={() => {
              console.log('login...');
            }}
          />
        </View>
        <Pressable style={style.registerLink}>
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
