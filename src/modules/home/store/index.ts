import {createSlice} from '@reduxjs/toolkit';
import {getFood} from './actions';

type State = {
  food: [];
};

const homeSlice = createSlice({
  name: 'profile',
  initialState: {
    food: [],
  } as State,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getFood.fulfilled, (state, {payload}) => {
      state.food = payload;
    });
  },
});

const homeReducer = homeSlice.reducer;
export const homeActions = homeSlice.actions;
export type HomeStore = ReturnType<typeof homeReducer>;
export default homeReducer;
