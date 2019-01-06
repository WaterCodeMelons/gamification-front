import * as React from 'react';
import { Header } from '../header';

import './layout.component.scss';

interface Props {
  userName: string;
}

export const Layout: React.SFC<Props> = ({ userName, children }) => (
  <div className={'c-layout'}>
    <Header userName={userName} />
    <div className={'c-layout__inner'}>
      <div className={'c-layout__inner-content'}>{children}</div>
    </div>
  </div>
);
