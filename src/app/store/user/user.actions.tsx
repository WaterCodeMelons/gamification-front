import { ActionsUnion, createAction } from '../../../util/redux/action';

export enum USER_ACTIONS {
  SET_NAME = '[User] SET_NAME',
  ADD_SCORE = '[User] ADD_SCORE',
}

export const Actions = {
  setName: createAction(USER_ACTIONS.SET_NAME, (name: string) => ({ name })),
  setScore: createAction(USER_ACTIONS.ADD_SCORE, (score: number) => ({
    score,
  })),
};

export type UserActions = ActionsUnion<typeof Actions>;
