import * as React from 'react';
import { AnyAction } from 'redux';

interface Props {
  onChange: (name: string) => AnyAction;
}

export class UserNameForm extends React.PureComponent<Props> {
  render() {
    return (
      <input
        className="input100"
        type="text"
        name="email"
        placeholder="Nazwa użytkownika"
        onChange={this.updateValue}
      />
    );
  }

  updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value);
  };
}
