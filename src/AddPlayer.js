import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  static propTypes = {
    onAdd: PropTypes.func.isRequired
  };

  onSubmit = event => {
    event.preventDefault();

    if (this.state.value.length !== 0) {
      this.props.onAdd(this.state.value);
      this.setState(prevState => prevState.value = '');
    }
  };

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
