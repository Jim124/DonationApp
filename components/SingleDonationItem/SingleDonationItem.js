import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import Header from '../Header/Header';
import Badge from '../Badge/Badge';
import Colors from '../../assets/styles/colors';

const SingleDonationItem = (props) => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMode='contain'
          source={{ uri: props.uri }}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        <Header
          title={props.donationTitle}
          type={3}
          color={Colors.donationItemTitleColor}
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
  );
};

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SingleDonationItem;
