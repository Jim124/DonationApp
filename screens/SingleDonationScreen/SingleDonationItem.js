import { Image, SafeAreaView, ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { Routes } from '../../navigation/Routes';

import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonationItem = ({ navigation, route }) => {
  const donationItem = useSelector(
    (state) => state.donations.selectedDonationInformation
  );
  const categoryInformation = route.params.categoryInformation;
  return (
    <SafeAreaView style={(globalStyle.backgroundColor, globalStyle.flex)}>
      <ScrollView
        style={style.singleDonationContainer}
        showsVerticalScrollIndicator={false}
      >
        <BackButton onPress={() => navigation.goBack()} />
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
