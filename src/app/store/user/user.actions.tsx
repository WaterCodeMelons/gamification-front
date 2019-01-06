import { ActionsUnion, createAction } from '../../../util/redux/action';

export enum USER_ACTIONS {
  SET_NAME = '[User] SET_NAME',
}

export const Actions = {
  setName: createAction(USER_ACTIONS.SET_NAME, (name: string) => ({ name })),
};

export type UserActions = ActionsUnion<typeof Actions>;
