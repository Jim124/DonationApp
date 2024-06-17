import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  paymentContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(7),
  },
  headerContainer: {
    marginTop: verticalScale(25),
  },
  price: {
    marginTop: verticalScale(12),
  },
  button: {
    marginHorizontal: horizontalScale(24),
  },
  cardForm: {
    height: verticalScale(200),
    marginTop: verticalScale(12),
  },
  cardFormAndroid: {
    height: verticalScale(250),
    marginTop: verticalScale(22),
  },
});

export default style;
