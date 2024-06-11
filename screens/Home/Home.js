import { SafeAreaView, View, Text } from 'react-native';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <Header title='Jim Du' type={1} />
      <Tab title='HightLight' />
      <Tab title='HightLight' isInactive={true} />
      <Badge title='Envionment' />
    </SafeAreaView>
  );
};

export default Home;
