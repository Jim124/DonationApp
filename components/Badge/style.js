import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from '../../assets/styles/scaling';
import Colors from '../../assets/styles/colors';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  badge: {
    backgroundColor: Colors.badgeBackgroundColor,
    height: verticalScale(25),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: getFontFamily('Inter', '600'),
    color: Colors.buttonTextColor,
    fontSize: scaleFontSize(10),
    fontWeight: '600',
    lineHeight: scaleFontSize(12),
    textAlign: 'center',
  },
});

export default style;
