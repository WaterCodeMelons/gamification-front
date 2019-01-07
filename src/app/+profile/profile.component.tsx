import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../store/store.interface';
import { getUserState } from '../store/user';
import { factorizeUserScore } from './profile.util';

import './profile.component.scss';

const mapStateToProps = (state: StoreState) => ({
  user: getUserState(state),
});

type Props = ReturnType<typeof mapStateToProps>;

export const ProfileComponent: React.SFC<Props> = ({ user }) => (
  <div className={'c-profile'}>
    <i className={'fa fa-user c-profile__user-icon'} />
    <span className={'c-profile__user-name'}>{user.name}</span>
    <span className={'c-profile__user-score'}>{factorizeUserScore(user)}</span>
  </div>
);

export const Profile = connect(mapStateToProps)(ProfileComponent);
