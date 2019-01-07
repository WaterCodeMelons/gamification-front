import { UserState } from '../store/user';

export const factorizeUserScore = (score: number) =>
  `${score.toLocaleString(undefined, { maximumFractionDigits: 0 })} pkt`;
