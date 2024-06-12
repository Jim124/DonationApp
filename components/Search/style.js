import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import Colors from '../../assets/styles/colors';
import getFontFamily from '../../assets/fonts/helper';

const style = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),

    height: verticalScale(50),
    backgroundColor: Colors.searchBarBackgroundColor,
    borderRadius: horizontalScale(15),
  },
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: Colors.searchTextInputColor,
  },
});

export default style;
