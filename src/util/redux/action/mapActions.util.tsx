import { Dispatch } from 'redux';

export const mapActions: <T extends object>(
  actions: T,
) => {
  actions: T;
  dispatch: Dispatch;
} = ((actions: any[]) => (dispatch: Dispatch) => {
  const result = { actions: {}, dispatch };
  if (actions) {
    for (const element in actions) {
      if (actions.hasOwnProperty(element)) {
        result.actions[element] = (...args: any[]) =>
          dispatch(actions[element](...args));
      }
    }
  }
  return result;
}) as any;
