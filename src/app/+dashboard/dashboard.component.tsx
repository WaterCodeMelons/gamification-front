import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './dashboard.component.scss';

export const Dashboard: React.SFC = () => {
  return (
    <div className={'c-dashboard'}>
      <NavLink className={'c-dashboard__tile'} to={'/memo'}>
        Memo
      </NavLink>
      <NavLink className={'c-dashboard__tile'} to={'/dashboard'}>
        Quiz
      </NavLink>
      <NavLink className={'c-dashboard__tile'} to={'/dashboard'}>
        Matematyka
      </NavLink>
    </div>
  );
};
