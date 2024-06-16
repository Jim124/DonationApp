import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { StripeProvider, CardForm } from '@stripe/stripe-react-native';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Constants from '../../constants/App';
const Payment = () => {
  const donationItem = useSelector(
    (state) => state.donations.selectedDonationInformation
  );
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <ScrollView style={style.paymentContainer}>
        <View>
          <Header title='Making Donation' type={3} />
          <Text style={style.price}>
            You are abount to donate {donationItem.price}
          </Text>
        </View>
        <View>
          <StripeProvider publishableKey={Constants.STRIPE_PUBLIC_KEY}>
            <CardForm style={style.cardForm} />
          </StripeProvider>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button title='Donate' />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
