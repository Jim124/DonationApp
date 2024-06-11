import { useState, useRef } from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import { horizontalScale } from '../../assets/styles/scaling';
const Tab = (props) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      isDisabled={props.isInactive}
      onPress={props.onPress}
      style={[style.tab, props.isInactive && style.inactiveTab, tabWidth]}
    >
      <Text
        onTextLayout={(event) => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, props.isInactive && style.inactiveTitle]}
      >
        {props.title}
      </Text>
    </Pressable>
  );
};

Tab.default = {
  title: '',
  isInactive: false,
  onPress: () => {},
};
Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};
export default Tab;