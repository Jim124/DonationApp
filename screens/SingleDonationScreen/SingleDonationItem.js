import { useSelector } from 'react-redux';

import style from './style';

const SingleDonationItem = ({ navigation }) => {
  const donationItem = useSelector(
    (state) => state.donations.selectedDonationInformation
  );
  console.log(donationItem);
  return null;
};

export default SingleDonationItem;
