import { createSlice } from '@reduxjs/toolkit';

import items from '../../assets/data/items';

const initialState = {
  items: items,
  selectedDonationId: null,
  selectedDonationInformation: {},
};

const Donations = createSlice({
  name: 'donations',
  initialState,
  reducers: {
    resetItems: () => {
      return initialState;
    },
    updateSelectedDonationId: (state, action) => {
      state.selectedDonationId = action.payload;
      state.selectedDonationInformation = state.items.find(
        (item) => item.donationItemId === action.payload
      );
    },
  },
});

export const { resetItems, updateSelectedDonationId } = Donations.actions;
export default Donations.reducer;
