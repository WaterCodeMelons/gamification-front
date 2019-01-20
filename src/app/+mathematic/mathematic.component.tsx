import * as React from 'react';
import './mathematic.component.scss';
import { mapActions } from '../../util/redux/action';
import { connect } from 'react-redux';
import { StoreState } from '../store/store.interface';
import { getUserState, Actions } from '../store/user';
import { Actions as UserActions } from '../store/user';

interface State {
  firstNumber: number;
  secondNumber: number;
  result: number;
  operator: string;
  level: number;
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
    };
  }

  operators = ['+', '-', '*', '/'];

  updateInputValue(event: any) {
    this.setState({ result: event.target.value });
  }

  generateOperation() {
    this.setState({
      firstNumber: this.random(Math.pow(10, this.state.level)),
      secondNumber: this.random(Math.pow(10, this.state.level)),
      operator: this.operators[this.random(4)],
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
      ) == this.state.result
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
            onChange={this.updateInputValue.bind(this)}
            placeholder="Wpisz wynik"
          />
          <button
            type="submit"
            className="c_mathematic__btn btn btn-primary"
            onClick={this.compareValues.bind(this)}
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
