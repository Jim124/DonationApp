import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Platform,
} from 'react-native';
import { useSelector } from 'react-redux';

import { Routes } from '../../navigation/Routes';

import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const SingleDonationItem = ({ navigation, route }) => {
  const donationItem = useSelector(
    (state) => state.donations.selectedDonationInformation
  );
  const categoryInformation = route.params.categoryInformation;
  let styleBack = {
    mariginTop: verticalScale(0),
  };
  if (Platform.OS === 'android') {
    styleBack = {
      mariginTop: verticalScale(25),
    };
  }
  return (
    <SafeAreaView style={(globalStyle.backgroundColor, globalStyle.flex)}>
      <ScrollView
        style={style.singleDonationContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={Platform.OS === 'android' && style.backContainer}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>

        <Image source={{ uri: donationItem.image }} style={style.image} />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItem.name} />
        <View style={style.description}>
          <Text>{donationItem.description}</Text>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button
          title={'Donation'}
          onPress={() => navigation.navigate(Routes.Payment)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
