import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';
import Colors from '../../assets/styles/colors';

const style = StyleSheet.create({
  backButton: {
    marginTop: verticalScale(7),
    marginLeft: horizontalScale(14),
  },
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    color: Colors.errorMsgColor,
    marginBottom: verticalScale(24),
  },
  success: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    color: Colors.successMsgColor,
    marginBottom: verticalScale(24),
  },
});

export default style;
