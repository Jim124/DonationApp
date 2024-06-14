import { StyleSheet } from 'react-native';
import { horizontalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  registerLink: {
    alignItems: 'center',
  },
});

export default style;
