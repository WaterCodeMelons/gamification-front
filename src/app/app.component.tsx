import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { Dashboard } from './+dashboard/dashboard.component';
import { Login } from './+login/login.component';
import { Mathematic } from './+mathematic/mathematic.component';
import { Memo } from './+memo/memo.component';

import './app.component.scss';

export const App: React.SFC = () => (
  <Router>
    <Switch>
      <Redirect exact from={'/'} to={'/login'} />
      <Route exact path={'/login'} component={Login as any} />
      <Route exact path={'/dashboard'} component={Dashboard as any} />
      <Route exact path={'/memo'} component={Memo as any} />
      <Route exact path={'/math'} component={Mathematic as any} />
    </Switch>
  </Router>
);
