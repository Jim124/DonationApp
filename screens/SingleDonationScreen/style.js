import { StyleSheet } from 'react-native';

import { verticalScale, horizontalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  singleDonationContainer: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
});

export default style;
