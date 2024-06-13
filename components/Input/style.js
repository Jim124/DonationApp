import { StyleSheet } from 'react-native';
import getFontFamily from '../../assets/fonts/helper';
import { scaleFontSize, verticalScale } from '../../assets/styles/scaling';
import Colors from '../../assets/styles/colors';

const style = StyleSheet.create({
  label: {
    fontFamily: getFontFamily('Inter', '400'),
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    color: Colors.inputComponentColor,
  },
  input: {
    marginTop: verticalScale(12),
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 167, 167, 0.5)',
  },
});

export default style;
