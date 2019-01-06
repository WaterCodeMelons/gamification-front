import { Reducer } from 'redux';
import { USER_ACTIONS, UserActions } from './user.actions';
import { UserState } from './user.interface';

const initialState: UserState = {
  name: undefined,
};

export const reducer: Reducer<UserState, UserActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case USER_ACTIONS.SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};
