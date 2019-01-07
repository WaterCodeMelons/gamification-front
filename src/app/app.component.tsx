import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './+login/login.component';
import { Layout, Routing } from './shared/components';
import { store } from './store';

export const App: React.SFC = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact={true} path={'/login'} component={Login} />
        <Route
          render={props => (
            <Layout {...props}>
              <Routing />
            </Layout>
          )}
        />
      </Switch>
    </Router>
  </Provider>
);
