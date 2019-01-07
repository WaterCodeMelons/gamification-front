import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from '../../../+dashboard/dashboard.component';
import { Mathematic } from '../../../+mathematic/mathematic.component';
import { Memo } from '../../../+memo/memo.component';

export const Routing: React.SFC = () => (
  <Switch>
    <Route exact={true} path={'/dashboard'} component={Dashboard} />
    <Route exact={true} path={'/memo'} component={Memo} />
    <Route exact={true} path={'/math'} component={Mathematic} />
    <Route
      render={({ location }) => (
        <span>{location.pathname} HTTP 404: Route Not Found.</span>
      )}
    />
  </Switch>
);
