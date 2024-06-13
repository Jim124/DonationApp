import { SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const SingleDonationItem = ({ navigation }) => {
  const donationItem = useSelector(
    (state) => state.donations.selectedDonationInformation
  );
  console.log(donationItem);
  return (
    <SafeAreaView style={(globalStyle.backgroundColor, globalStyle.flex)}>
      <ScrollView
        style={style.singleDonationContainer}
        showsVerticalScrollIndicator={false}
      >
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
