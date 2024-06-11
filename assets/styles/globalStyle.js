import { StyleSheet } from 'react-native';
import { getFontFamily } from '../fonts/helper';

import { horizontalScale, scaleFontSize, verticalScale } from './scaling';
import Colors from './colors';
const globalStyle = StyleSheet.create({
  backgroundColor: {
    backgroundColor: Colors.backgroundColor,
  },
  flex: {
    flex: 1,
  },
});
export default globalStyle;
