import { shuffle } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../store/store.interface';
import { getUserState } from '../store/user';

import { MemoCard } from './components';
import './memo.component.scss';

const mapStateToProps = (state: StoreState) => ({
  user: getUserState(state),
});

type Props = ReturnType<typeof mapStateToProps>;

interface State {
  cards: any[];
}

export class MemoComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cards: [
        { color: 'green', active: false },
        { color: 'green', active: false },
        { color: 'blue', active: false },
        { color: 'blue', active: false },
        { color: 'red', active: false },
        { color: 'red', active: false },
        { color: 'yellow', active: false },
        { color: 'yellow', active: false },
        { color: 'pink', active: false },
        { color: 'pink', active: false },
        { color: 'orange', active: false },
        { color: 'orange', active: false },
        { color: 'purple', active: false },
        { color: 'purple', active: false },
        { color: 'cyan', active: false },
        { color: 'cyan', active: false },
      ],
    };
  }

  componentDidMount() {
    this.setState({ cards: shuffle(this.state.cards) });
  }

  render() {
    return (
      <div className={'c-memo'}>
        {this.state.cards.map((card: any, i: number) => (
          <MemoCard
            key={i}
            color={card.color}
            active={card.active}
            onClick={() => {
              const newCards = this.state.cards;
              newCards[i].active = true;
              this.setState({ cards: newCards });
            }}
          />
        ))}
      </div>
    );
  }
}

export const Memo = connect(mapStateToProps)(MemoComponent);
