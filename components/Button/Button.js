import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
const Button = (props) => {
  return (
    <TouchableOpacity
      isDisabled={props.isDisabled}
      onPress={props.onPress}
      style={[style.button, props.isDisabled && style.disabled]}
    >
      <Text style={style.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

Button.default = {
  title: '',
  isDisabled: false,
  onPress: () => {},
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};
export default Button;
