import { createSlice } from '@reduxjs/toolkit';

import items from '../../assets/data/items';

const initialState = {
  items: items,
  selectedDonationId: null,
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
    },
  },
});

export const { resetItems, updateSelectedItemId } = Donations.actions;
export default Donations.reducer;
