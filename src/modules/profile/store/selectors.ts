import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../../store/store';

export const profileStoreSelector = (state: RootState) => state.profile;

export const profileSelector = createSelector(
  profileStoreSelector,
  state => state.user,
);

export const isAuthCheckedSelector = createSelector(
  profileStoreSelector,
  state => state.user !== null,
);
