import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DiscountState {
  selectedOption: string;
  discountCode: string;
  notes: string;
}

const initialState: DiscountState = {
  selectedOption: '',
  discountCode: '',
  notes: '',
};

const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    setSelectedOption(state, action: PayloadAction<string>) {
      state.selectedOption = action.payload;
    },
    setDiscountCode(state, action: PayloadAction<string>) {
      state.discountCode = action.payload;
    },
    setNotes(state, action: PayloadAction<string>) {
      state.notes = action.payload;
    },
    generateDiscountCode(state) {
      state.discountCode = 'NEWCODE123';
    },
  },
});

export const { setSelectedOption, setDiscountCode, setNotes, generateDiscountCode } = discountSlice.actions;

export default discountSlice.reducer;
