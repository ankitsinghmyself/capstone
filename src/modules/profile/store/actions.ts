import {createAsyncThunk} from '@reduxjs/toolkit';
import asyncStorageService from '../../../services/AsyncStorageService';

const PREFIX = 'profile';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  orderStatuses: boolean;
  passwordChanges: boolean;
  specialOffers: boolean;
  newsletter: boolean;
};

export const setProfile = createAsyncThunk(
  `${PREFIX}/setProfile`,
  async (user: User) => {
    await asyncStorageService.setData('@user', user);
    return user;
  },
);

export const getProfile = createAsyncThunk(`${PREFIX}/getProfile`, async () => {
  const r = await asyncStorageService.getData('@user');
  console.log(r);
  return r;
});
