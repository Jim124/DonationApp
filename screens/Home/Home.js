import { SafeAreaView, View, Text } from 'react-native';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <Header title='Jim Du' type={1} />
    </SafeAreaView>
  );
};

export default Home;
