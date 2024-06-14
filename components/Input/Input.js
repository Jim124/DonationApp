import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import PropTypes from 'prop-types';

import style from './style';

const Input = (props) => {
  const [inputVal, setInputVal] = useState('');
  function handleChangeText(enteredText) {
    setInputVal(enteredText);
    props.onChangeText(enteredText);
  }
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        style={style.input}
        value={inputVal}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder ? props.placeholder : null}
        secureTextEntry={props.secureTextEntry}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

Input.default = {
  label: '',
  keyboardType: 'default',
  secureTextEntry: false,
  onChangeText: () => {},
  placeholder: '',
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
};
export default Input;
