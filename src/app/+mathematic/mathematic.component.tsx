import * as React from 'react';
import { connect } from 'react-redux';
import { mapActions } from '../../util/redux/action';
import { Actions as UserActions } from '../store/user';

import './mathematic.component.scss';

interface State {
  firstNumber: number;
  secondNumber: number;
  result: number;
  operator: string;
  level: number;
  operators: string[];
}

const mapDispatchToProps = mapActions({
  addScore: UserActions.setScore,
});

type Props = typeof mapDispatchToProps;

export class MathematicComponent extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      result: 0,
      operator: '+',
      level: 1,
      operators: ['+', '-', '*', '/'],
    };
  }

  updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ result: parseInt(event.target.value, 10) });
  };

  generateOperation() {
    this.setState({
      firstNumber: this.random(Math.pow(10, this.state.level)),
      secondNumber: this.random(Math.pow(10, this.state.level)),
      operator: this.state.operators[this.random(4)],
    });
  }

  compareValues() {
    if (
      Math.round(
        eval(
          this.state.firstNumber +
            this.state.operator +
            this.state.secondNumber,
        ),
      ) === this.state.result
    ) {
      this.setState({ level: this.state.level + 1 });
      if (this.state.level > 3) {
        alert('Gratulacje. Otrzymałeś 10 pkt!');
        this.props.actions.addScore(10);
      }
    } else {
      this.setState({
        level: this.state.level <= 2 ? 1 : this.state.level - 1,
      });
    }

    this.setState({ result: 0 });
    this.generateOperation();
  }

  random(max: any) {
    return Math.floor(Math.random() * max);
  }

  render() {
    return (
      <div className="c_mathematic">
        <div className="c_mathematic__operation">
          <span>
            {this.state.firstNumber} {this.state.operator}{' '}
            {this.state.secondNumber}
          </span>
        </div>
        <div className="result">
          <label>Wynik</label>
          <input
            type="number"
            className="c_mathematic__input form-control col-md-2"
            name="resultInput"
            id="resultInput"
            onChange={e => this.updateInput(e)}
            placeholder="Wpisz wynik"
          />
          <button
            type="submit"
            className="c_mathematic__btn btn btn-primary"
            onClick={() => this.compareValues()}
          >
            Zatwierdz
          </button>
        </div>
      </div>
    );
  }
}
export const Mathematic = connect(
  null,
  mapDispatchToProps,
)(MathematicComponent);
