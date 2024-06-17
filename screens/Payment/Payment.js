import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
  Platform,
} from 'react-native';
import {
  StripeProvider,
  CardForm,
  useConfirmPayment,
} from '@stripe/stripe-react-native';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Constants from '../../constants/App';
import { fetchPaymentIntentClientSecret } from '../../api/stripePayment';
const Payment = ({ navigation }) => {
  const [isReady, setIsReady] = useState(false);
  const donationItem = useSelector(
    (state) => state.donations.selectedDonationInformation
  );
  const user = useSelector((state) => state.user);
  const { confirmPayment, loading } = useConfirmPayment();
  async function handlePayment() {
    const clientSecret = await fetchPaymentIntentClientSecret(
      user.email,
      donationItem.price
    );
    const { error, paymentIntent } = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
    });
    if (error) {
      Alert.alert(
        'Error has occured with your payment',
        error.localizedMessage
      );
    } else if (paymentIntent) {
      Alert.alert('Successful', 'The payment was confirmed successfully!');
      setTimeout(() => {
        navigation.goBack();
      }, 2000);
    }
  }
  return (
    <SafeAreaView style={[globalStyle.backgroundColor, globalStyle.flex]}>
      <ScrollView style={style.paymentContainer}>
        <View>
          <View style={Platform.OS === 'android' && style.headerContainer}>
            <Header title='Making Donation' type={3} />
          </View>
          <Text style={style.price}>
            You are abount to donate ${donationItem.price}
          </Text>
        </View>
        <View>
          <StripeProvider publishableKey={Constants.STRIPE_PUBLIC_KEY}>
            <CardForm
              style={
                Platform.OS === 'android'
                  ? style.cardFormAndroid
                  : style.cardForm
              }
              onFormComplete={() => {
                setIsReady(true);
              }}
            />
          </StripeProvider>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button
          title='Donate'
          isDisabled={!isReady || loading}
          onPress={handlePayment}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
