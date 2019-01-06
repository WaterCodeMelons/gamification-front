export type ActionCreator<T, Payload> = { type: T } & ((
  ...args: any[]
) => { type: T } & Payload);

// No args
export function createAction<T extends string, Payload extends {}>(
  type: T,
  creator?: () => Payload,
): { type: T } & (() => { type: T } & Payload);

// 1 arg, 1 maybe
export function createAction<T extends string, Payload extends {}, Arg1>(
  type: T,
  creator: (arg1?: Arg1) => Payload,
): { type: T } & ((arg1?: Arg1) => { type: T } & Payload);
// 1 arg
export function createAction<T extends string, Payload extends {}, Arg1>(
  type: T,
  creator: (arg1: Arg1) => Payload,
): { type: T } & ((arg1: Arg1) => { type: T } & Payload);

// 2 args, 2 maybe
export function createAction<T extends string, Payload extends {}, Arg1, Arg2>(
  type: T,
  creator: (arg1?: Arg1, arg2?: Arg2) => Payload,
): { type: T } & ((arg1?: Arg1, arg2?: Arg2) => { type: T } & Payload);
// 2 args, 1 maybe
export function createAction<T extends string, Payload extends {}, Arg1, Arg2>(
  type: T,
  creator: (arg1: Arg1, arg2?: Arg2) => Payload,
): { type: T } & ((arg1: Arg1, arg2?: Arg2) => { type: T } & Payload);
// 2 args
export function createAction<T extends string, Payload extends {}, Arg1, Arg2>(
  type: T,
  creator: (arg1: Arg1, arg2: Arg2) => Payload,
): { type: T } & ((arg1: Arg1, arg2: Arg2) => { type: T } & Payload);

// 3 args, 3 maybe
export function createAction<
  T extends string,
  Payload extends {},
  Arg1,
  Arg2,
  Arg3
>(
  type: T,
  creator: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3) => Payload,
): { type: T } & ((
  arg1?: Arg1,
  arg2?: Arg2,
  arg3?: Arg3,
) => { type: T } & Payload);
// 3 args, 2 maybe
export function createAction<
  T extends string,
  Payload extends {},
  Arg1,
  Arg2,
  Arg3
>(
  type: T,
  creator: (arg1: Arg1, arg2?: Arg2, arg3?: Arg3) => Payload,
): { type: T } & ((
  arg1: Arg1,
  arg2?: Arg2,
  arg3?: Arg3,
) => { type: T } & Payload);
// 3 args, 1 maybe
export function createAction<
  T extends string,
  Payload extends {},
  Arg1,
  Arg2,
  Arg3
>(
  type: T,
  creator: (arg1: Arg1, arg2: Arg2, arg3?: Arg3) => Payload,
): { type: T } & ((
  arg1: Arg1,
  arg2: Arg2,
  arg3?: Arg3,
) => { type: T } & Payload);
// 3 args
export function createAction<
  T extends string,
  Payload extends {},
  Arg1,
  Arg2,
  Arg3
>(
  type: T,
  creator: (arg1: Arg1, arg2: Arg2, arg3: Arg3) => Payload,
): { type: T } & ((
  arg1: Arg1,
  arg2: Arg2,
  arg3: Arg3,
) => { type: T } & Payload);

// 4 args, 4 maybe
export function createAction<
  T extends string,
  Payload extends {},
  Arg1,
  Arg2,
  Arg3,
  Arg4
>(
  type: T,
  creator: (arg1?: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4) => Payload,
): { type: T } & ((
  arg1?: Arg1,
  arg2?: Arg2,
  arg3?: Arg3,
  arg4?: Arg4,
) => { type: T } & Payload);
// 4 args, 3 maybe
export function createAction<
  T extends string,
  Payload extends {},
  Arg1,
  Arg2,
  Arg3,
  Arg4
>(
  type: T,
  creator: (arg1: Arg1, arg2?: Arg2, arg3?: Arg3, arg4?: Arg4) => Payload,
): { type: T } & ((
  arg1: Arg1,
  arg2?: Arg2,
  arg3?: Arg3,
  arg4?: Arg4,
) => { type: T } & Payload);
// 4 args, 2 maybe
export function createAction<
  T extends string,
  Payload extends {},
  Arg1,
  Arg2,
  Arg3,
  Arg4
>(
  type: T,
  creator: (arg1: Arg1, arg2: Arg2, arg3?: Arg3, arg4?: Arg4) => Payload,
): { type: T } & ((
  arg1: Arg1,
  arg2: Arg2,
  arg3?: Arg3,
  arg4?: Arg4,
) => { type: T } & Payload);
// 4 args, 1 maybe
export function createAction<
  T extends string,
  Payload extends {},
  Arg1,
  Arg2,
  Arg3,
  Arg4
>(
  type: T,
  creator: (arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4?: Arg4) => Payload,
): { type: T } & ((
  arg1: Arg1,
  arg2: Arg2,
  arg3: Arg3,
  arg4?: Arg4,
) => { type: T } & Payload);
// 4 args
export function createAction<
  T extends string,
  Payload extends {},
  Arg1,
  Arg2,
  Arg3,
  Arg4
>(
  type: T,
  creator: (arg1: Arg1, arg2: Arg2, arg3: Arg3, arg4: Arg4) => Payload,
): { type: T } & ((
  arg1: Arg1,
  arg2: Arg2,
  arg3: Arg3,
  arg4: Arg4,
) => { type: T } & Payload);

// Any args & basic definition
export function createAction<T extends string, Payload extends {}>(
  type: T,
  actionPayloadCreator?: (...args: any[]) => Payload,
) {
  const creator = (...args: any[]) => ({
    type,
    ...(actionPayloadCreator ? (actionPayloadCreator(...args) as any) : {}),
  });
  creator.type = type;
  return creator as ActionCreator<T, Payload>;
}
