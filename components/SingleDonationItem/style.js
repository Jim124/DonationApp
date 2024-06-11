import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  singleDonationContainer: {},
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(13),
    left: horizontalScale(10),
  },
  image: {
    width: horizontalScale(155),
    height: verticalScale(170),
  },
  donationInformation: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default style;
