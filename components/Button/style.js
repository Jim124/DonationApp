import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  verticalScale,
  horizontalScale,
} from '../../assets/styles/scaling';
import Colors from '../../assets/styles/colors';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  button: {
    backgroundColor: Colors.buttonBackgroundColor,
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    color: Colors.buttonTextColor,
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    lineHeight: scaleFontSize(19),
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default style;
