import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
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
import {
  updateFirstName,
  resetToInitialState,
} from '../../redux/reducers/User';
import { resetToCategoryState } from '../../redux/reducers/Categories';

const Home = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const handleSearch = (search) => {
    console.log('search:' + search);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={style.header}>
          <View style={style.headerInfoContainer}>
            <Text style={style.headerIntroText}>Hello,</Text>
            <View style={style.username}>
              <Header title={user.firstName + user.lastName + ' 👏'} type={1} />
            </View>
          </View>
          <Image
            source={{ uri: user.profileUri }}
            resizeMode='contain'
            style={style.profileImage}
          />
        </View>
        <View style={style.searchBox}>
          <Search placeholder={'Search'} />
        </View>

        <Pressable style={style.highlightedImageContainer}>
          <Image
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode='contain'
            style={style.highlightedImage}
          />
        </Pressable>
      </ScrollView>

      {/*  */}
    </SafeAreaView>
  );
};

export default Home;
