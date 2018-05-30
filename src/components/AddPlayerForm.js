import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddPlayerForm extends Component {

  state = {
    name: ''
  };

  static propTypes = {
    addPlayer: PropTypes.func.isRequired
  };

  addPlayer = event => {
    event.preventDefault();

    if (this.state.name.length !== 0) {
      this.props.addPlayer(this.state.name);
      this.setState(prevState => prevState.name = '');
    }
  };

  handleChange = event => {
    console.log('set state', event.target);
    this.setState({name: event.target.value});
  };

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.addPlayer}>
          <input type="text" value={this.state.name} onChange={this.handleChange}/>
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    );
  }
}
