import { SafeAreaView, ScrollView, View } from 'react-native';
import { useState } from 'react';

import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Registration = ({ navigation }) => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFullName(value) {
    setFullName(value);
  }

  function handleEmail(value) {
    setEmail(value);
  }
  function handlePassword(value) {
    setPassword(value);
  }
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView contentContainerStyle={style.container}>
        <View style={globalStyle.marginBotton24}>
          <Header title={'Hello and Welcome!'} type={1} />
        </View>
        <View style={globalStyle.marginBotton24}>
          <Input
            label={'First & Last Name'}
            placeholder={'Enter your fullName...'}
            onChangeText={handleFullName}
          />
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
            title='Register'
            onPress={() => {
              console.log('login...');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
