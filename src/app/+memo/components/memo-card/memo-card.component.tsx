import * as React from 'react';

import './memo-card.component.scss';

interface Props {
  color: string;
  active?: boolean;
  onClick: () => void;
}

export const MemoCard: React.SFC<Props> = ({ color, active, onClick }) => (
  <div
    className={`c-memo__card c-memo__card--${color} ${active ? 'active' : ''}`}
    onClick={onClick}
  />
);
