import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './header.component.scss';

interface Props {
  userName: string;
}

export const Header: React.SFC<Props> = ({ userName }) => (
  <div className={'c-header'}>
    <div className={'c-header__inner'}>
      <span className={'c-header__greeting'}>Witaj, {userName}!</span>
      <nav className={'c-header__nav'}>
        <NavLink
          className={'c-header__nav-item'}
          activeClassName={'active'}
          to={'/dashboard'}
        >
          <i className={'fa fa-graduation-cap'} />
          &nbsp;Gry
        </NavLink>
        <NavLink
          className={'c-header__nav-item'}
          activeClassName={'active'}
          to={'/profile'}
        >
          <i className={'fa fa-user'} />
          &nbsp;Profil
        </NavLink>
        <NavLink
          className={'c-header__nav-item'}
          activeClassName={'active'}
          to={'/login'}
        >
          <i className={'fa fa-lock'} />
          &nbsp;Wyloguj
        </NavLink>
      </nav>
    </div>
  </div>
);
