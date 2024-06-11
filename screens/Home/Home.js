import { Pressable, SafeAreaView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { horizontalScale } from '../../assets/styles/scaling';
import { updateFirstName } from '../../redux/reducers/User';

const Home = () => {
  const user = useSelector((state) => state.user);
  const handleSearch = (search) => {
    console.log('search:' + search);
  };
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <Header title={user.firstName + user.lastName} type={1} />
      <Pressable
        onPress={() => dispatch(updateFirstName({ firstName: 'Pingan' }))}
      >
        <Text>Press me to update name</Text>
      </Pressable>
      {/* <Header title='Jim Du' type={1} />
      <Tab title='HightLight' />
      <Tab title='HightLight' isInactive={true} />
      <Badge title='Envionment' /> */}
      {/* <Search onSearch={handleSearch} /> */}
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: horizontalScale(12),
        }}
      >
        <SingleDonationItem
          price={44}
          badgeTitle='Environment'
          donationTitle='Tree Cactus'
          uri='https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
        />
        <SingleDonationItem
          price={44}
          badgeTitle='Environment'
          donationTitle='Tree Cactus'
          uri='https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
        />
      </View> */}
    </SafeAreaView>
  );
};

export default Home;
