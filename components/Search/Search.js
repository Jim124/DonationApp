import { Pressable, TextInput } from 'react-native';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import style from './style';
import { scaleFontSize } from '../../assets/styles/scaling';
import Colors from '../../assets/styles/colors';
const Search = (props) => {
  const [search, setSearch] = useState('');
  const textInputRef = useRef(null);

  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const handleInput = (enteredText) => {
    setSearch(enteredText);
    props.onSearch(enteredText);
  };
  return (
    <Pressable style={style.searchContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        size={scaleFontSize(22)}
        color={Colors.searchIconColor}
      />
      <TextInput
        style={style.searchInput}
        ref={textInputRef}
        value={search}
        onChangeText={handleInput}
      />
    </Pressable>
  );
};

Search.default = {
  onSearch: () => {},
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
