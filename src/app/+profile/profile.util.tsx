import { UserState } from '../store/user';

export const factorizeUserScore = (user: UserState) => `${user.score} pkt`;
