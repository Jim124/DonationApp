import { SafeAreaView, View, Text } from 'react-native';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <Header title='Jim Du' type={1} />
      <Button
        title='Donate'
        onPress={() => console.log('please tape me ')}
        isDisabled={false}
      />
      <Button title='Donate' isDisabled={true} />
    </SafeAreaView>
  );
};

export default Home;
