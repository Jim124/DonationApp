import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import Header from '../Header/Header';
import Badge from '../Badge/Badge';
import Colors from '../../assets/styles/colors';

const SingleDonationItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <View>
          <View style={style.badge}>
            <Badge title={props.badgeTitle} />
          </View>
          <Image
            resizeMode='cover'
            source={{ uri: props.uri }}
            style={style.image}
          />
        </View>
        <View style={style.donationInformation}>
          <Header
            title={props.donationTitle}
            type={3}
            color={Colors.donationItemTitleColor}
            numberOfLines={1}
          />
          <View style={style.price}>
            <Header
              title={'$' + props.price.toFixed(2)}
              type={3}
              color={Colors.donationItemPriceColor}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

SingleDonationItem.default = {
  onPress: () => {},
};

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SingleDonationItem;
