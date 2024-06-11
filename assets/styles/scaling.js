import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// const isSmall = width <= 375 && !DeviceInfo.hasNotch();
const isSmall = width <= 375;
const guidelineBaseWidth = () => {
  if (isSmall) return 330;
  return 350;
};

const horizontalScale = (size) => (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
  if (isSmall) return 550;
  else if (width > 410) return 630;
  return 680;
};

const verticalScale = (size) => (height / guidelineBaseHeight()) * size;

const guidelineBaseFont = () => {
  if (width > 410) return 430;
  return 400;
};

const scaleFontSize = (size) =>
  Math.round((width / guidelineBaseFont()) * size);

export { horizontalScale, verticalScale, scaleFontSize };
