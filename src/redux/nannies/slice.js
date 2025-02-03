import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
};

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder.addCase();
  },
});

export const nanniesReducer = nanniesSlice.reducer;
