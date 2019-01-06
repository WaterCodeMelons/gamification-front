import * as React from 'react';
import { AnyAction } from 'redux';

interface Props {
  initialState?: string;
  onChange: (name: string) => AnyAction;
}

interface State {
  value?: string;
}

export class UserNameForm extends React.PureComponent<Props, State> {
  readonly state = {
    value: undefined,
  };

  componentDidUpdate() {
    const { onChange } = this.props;
    onChange(this.state.value || '');
  }

  render() {
    const { initialState } = this.props;

    return (
      <input
        className="input100"
        type="text"
        name="email"
        placeholder="Nazwa użytkownika"
        value={initialState}
        onChange={this.updateValue}
      />
    );
  }

  updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };
}
