import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../../../store/store.interface';
import { getUserName } from '../../../store/user';
import { Header } from '../header';

import './layout.component.scss';

const mapStateToProps = (state: StoreState) => ({
  userName: getUserName(state),
});

type Props = ReturnType<typeof mapStateToProps> & RouteComponentProps;

export const LayoutComponent: React.SFC<Props> = ({
  userName,
  history,
  children,
}) => {
  if (!userName) {
    history.push('/login');
  }

  return (
    <div className={'c-layout'}>
      <Header userName={userName!} />
      <div className={'c-layout__inner'}>
        <div className={'c-layout__inner-content'}>{children}</div>
      </div>
    </div>
  );
};

export const Layout = connect(mapStateToProps)(LayoutComponent);
