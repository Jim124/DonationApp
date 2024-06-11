import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const styleToApply = (type) => {
  switch (type) {
    case 1:
      return style.title1;
    case 2:
      return style.title2;
    case 3:
      return style.title3;
    default:
      return style.title1;
  }
};
const Header = (props) => {
  return (
    <View>
      <Text
        style={[
          styleToApply(props.type),
          props.color && { color: props.color },
        ]}
      >
        {props.title}
      </Text>
    </View>
  );
};

Header.default = {
  title: '',
  type: 1,
  color: '#000000',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Header;
