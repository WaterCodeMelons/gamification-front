type FunctionType = (...args: any[]) => any;
type ActionCreatorsMapObject = {
  [actionCreator: string]: FunctionType & { type?: string };
};

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;
