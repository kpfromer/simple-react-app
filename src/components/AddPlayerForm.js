import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class AddPlayerForm extends PureComponent {

  state = {
    name: ''
  };

  static propTypes = {
    onAdd: PropTypes.func.isRequired
  };

  onSubmit = event => {
    event.preventDefault();

    if (this.state.name.length !== 0) {
      this.props.onAdd(this.state.name);
      this.setState(prevState => prevState.name = '');
    }
  };

  handleChange = event => {
    this.setState({name: event.target.name});
  };

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChange}/>
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    );
  }
}
