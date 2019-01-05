import * as React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Dashboard } from './+dashboard/dashboard.component';
import { Login } from './+login/login.component';
import { Mathematic } from './+mathematic/mathematic.component';
import { Memo } from './+memo/memo.component';

import './app.component.scss';

export const App: React.SFC = () => (
  <Router>
    <Switch>
      <Redirect exact={true} from={'/'} to={'/login'} />
      <Route exact={true} path={'/login'} component={Login} />
      <Route exact={true} path={'/dashboard'} component={Dashboard} />
      <Route exact={true} path={'/memo'} component={Memo} />
      <Route exact={true} path={'/math'} component={Mathematic} />
    </Switch>
  </Router>
);