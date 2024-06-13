import { SafeAreaView, ScrollView, View } from 'react-native';
import { useState } from 'react';

import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  function handleEmail(value) {
    setEmail(value);
  }
  console.log(email);
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <ScrollView contentContainerStyle={style.container}>
        <Header title={'Welcome Back'} type={1} />
        <View>
          <Input
            label={'Email'}
            placeholder={'Enter your email...'}
            onChangeText={handleEmail}
            keyboardType={'email-address'}
            secureTextEntry={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
