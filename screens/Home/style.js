import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/helper';
import Colors from '../../assets/styles/colors';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerInfoContainer: {},
  headerIntroText: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '400',
    color: Colors.homeHeaderIntroTextColor,
  },
  username: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    height: verticalScale(50),
    width: horizontalScale(50),
  },
  searchBox: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  categoryHeader: {
    marginTop: verticalScale(6),
    marginLeft: horizontalScale(24),
    marginBottom: verticalScale(16),
  },
  categories: {
    marginHorizontal: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  donationsContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  donationItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(23),
  },
});

export default style;
