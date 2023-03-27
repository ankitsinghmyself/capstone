import {createSlice} from '@reduxjs/toolkit';
import {getProfile, setProfile, User} from './actions';

type State = {
  user: null | User;
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: null,
  } as State,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setProfile.fulfilled, (state, {payload}) => {
      state.user = payload;
    });

    builder.addCase(getProfile.fulfilled, (state, {payload}) => {
      state.user = payload;
    });
  },
});

const profileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;
export type ProfileStore = ReturnType<typeof profileReducer>;
export default profileReducer;
