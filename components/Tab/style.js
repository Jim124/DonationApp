import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from '../../assets/styles/scaling';
import Colors from '../../assets/styles/colors';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  tab: {
    backgroundColor: Colors.buttonBackgroundColor,
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    color: Colors.buttonTextColor,
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    lineHeight: scaleFontSize(17),
    textAlign: 'center',
  },
  inactiveTab: {
    backgroundColor: Colors.tabInactiveBackgroundColor,
  },
  inactiveTitle: {
    color: Colors.tabInactiveTextColor,
  },
});

export default style;
