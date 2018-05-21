import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

  static propTypes = {
    score: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score ? this.props.score : 0
    }
  }

  addScore = () => {
    // This is basic state management, I will learn how to use redux in the future for better state management
    this.setState(prevState => ({
      score: prevState.score + 1
    }))
  };

  removeScore = () => {
    this.setState(prevState => ({
      score: prevState.score - 1
    }))
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.removeScore}> - </button>
        <div className="counter-score">{this.state.score}</div>
        <button className="counter-action increment" onClick={this.addScore}> + </button>
      </div>
    );
  }
}

export default Counter;
