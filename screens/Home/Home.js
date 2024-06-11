import { SafeAreaView, View, Text } from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <View>
        <Text>Hello,World</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
