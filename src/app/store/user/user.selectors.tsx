import { createSelector } from 'reselect';
import { StoreState } from '../store.interface';

export const getUserState = (state: StoreState) => state.user;

export const getUserName = createSelector(
  getUserState,
  state => state.name,
);
