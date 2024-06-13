import { StyleSheet } from 'react-native';

import Colors from '../../assets/styles/colors';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';
const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.backbuttonBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(26),
    height: horizontalScale(44),
    width: horizontalScale(44),
  },
});

export default style;
