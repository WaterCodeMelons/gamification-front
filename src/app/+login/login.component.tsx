import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import Tilt from 'react-tilt';
import { compose } from 'redux';
import { mapActions } from '../../util/redux/action';
import { StoreState } from '../store/store.interface';
import { Actions as UserActions, getUserName } from '../store/user';
import { UserNameForm } from './components';

import image from '../../images/img-01.png';

import './login.component.scss';

const mapStateToProps = (state: StoreState) => ({
  userName: getUserName(state),
});
const mapDispatchToProps = mapActions({
  setUserName: UserActions.setName,
});

type Props = typeof mapDispatchToProps &
  ReturnType<typeof mapStateToProps> &
  RouteComponentProps;

export const LoginComponent: React.SFC<Props> = ({
  history,
  actions,
  userName,
}) => (
  <div className="container-login100">
    <div className="wrap-login100">
      <Tilt options={{ scale: 1.1 }}>
        <div className="login100-pic" data-tilt={true}>
          <img src={image} alt="IMG" />
        </div>
      </Tilt>

      <div className="login100-form validate-form">
        <span className="login100-form-title">
          Aby korzystać z aplikacji musisz się zalogować
        </span>
        <div
          className="wrap-input100 validate-input"
          data-validate="Valid email is required: ex@abc.xyz"
        >
          <UserNameForm
            initialState={userName}
            onChange={actions.setUserName}
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-user" aria-hidden="true" />
          </span>
        </div>

        <div
          className="wrap-input100 validate-input"
          data-validate="Password is required"
        >
          <input
            className="input100"
            type="password"
            name="pass"
            placeholder="Hasło"
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-lock" aria-hidden="true" />
          </span>
        </div>

        <div className="container-login100-form-btn">
          <button
            className="login100-form-btn"
            onClick={() => history.push('/dashboard')}
          >
            Zaloguj
          </button>
        </div>

        <div className="text-center p-t-12">
          <span className="txt1">{'Zapomniałeś '}</span>
          <a className="txt2" href="#">
            Nazwy użytkownika / Hasła?
          </a>
        </div>

        <div className="text-center p-t-136">
          <a className="txt2" href="#">
            Utwórz swoje konto
            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export const Login = compose<typeof LoginComponent>(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LoginComponent);
