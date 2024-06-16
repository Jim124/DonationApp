import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  paymentContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(7),
  },
  price: {
    marginTop: verticalScale(12),
  },
  button: {
    marginHorizontal: horizontalScale(24),
  },
});

export default style;
