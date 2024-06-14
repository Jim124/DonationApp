import { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import { createUser } from '../../api/use';

const Registration = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  function handleFullName(value) {
    setFullName(value);
    setError('');
  }

  function handleEmail(value) {
    setEmail(value);
    setError('');
  }
  function handlePassword(value) {
    setPassword(value);
    setError('');
  }
  const handleRegister = async () => {
    if (fullName.length <= 2 || email.length <= 5 || password.length < 6) {
      setError('Please enter valid value');
      return;
    }
    const user = await createUser(fullName, email, password);
    if (user.error) {
      setError(user.error);
    } else {
      setError('');
      setSuccess('You have successfully registered');
      setTimeout(() => navigation.goBack(), 2000);
    }
  };
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
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        <View style={globalStyle.marginBotton24}>
          <Button
            isDisabled={error.length > 0 || success.length > 0}
            title='Register'
            onPress={handleRegister}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
