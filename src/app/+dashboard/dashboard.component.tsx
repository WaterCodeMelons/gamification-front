import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Layout } from '../shared/components';
import { StoreState } from '../store/store.interface';
import { getUserState } from '../store/user';

const mapStateToProps = (state: StoreState) => ({
  user: getUserState(state),
});

type Props = ReturnType<typeof mapStateToProps> & RouteComponentProps;

export const DashboardComponent: React.SFC<Props> = ({ user, history }) => {
  if (!user.name) {
    history.push('/login');
  }

  return <Layout userName={user.name!}>Content</Layout>;
};

export const Dashboard = compose<typeof DashboardComponent>(
  withRouter,
  connect(mapStateToProps),
)(DashboardComponent);
