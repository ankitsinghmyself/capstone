import {RootState} from '../../../store/store';
import {createSelector} from '@reduxjs/toolkit';

export const homeStoreSelector = (state: RootState) => state.home;

export const foodSelector = createSelector(
  homeStoreSelector,
  state => state.food,
);
