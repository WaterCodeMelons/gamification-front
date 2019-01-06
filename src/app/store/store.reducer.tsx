import { combineReducers } from 'redux';
import { StoreState } from './store.interface';
import { reducer as userReducer } from './user';

export const reducer = combineReducers<StoreState>({
  user: userReducer,
});
