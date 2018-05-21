import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
  };

  render() {
    return (
      <div className="player">
        <div className="player-name">
          {this.props.name}
        </div>
        <div className="player-score">
          <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score">{this.props.score}</div>
            <button className="counter-action increment"> + </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Player;