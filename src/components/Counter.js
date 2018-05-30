import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends PureComponent {

  static propTypes = {
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => this.props.updatePlayerScore(this.props.index, -1)}>
          -
        </button>
        <div className="counter-score">{this.props.score}</div>
        <button className="counter-action increment"
                onClick={() => this.props.updatePlayerScore(this.props.index, 1)}>
          +
        </button>
      </div>
    );
  }
}
