import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    removePlayer: PropTypes.func.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    selectPlayer: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="player">
        <div className="player-name">
          <a className="remove-player" onClick={() => this.props.removePlayer(this.props.index)}>✖</a>
          <a onClick={() => this.props.selectPlayer(this.props.index)}>
            {this.props.name}
          </a>
        </div>
        <div className="player-score">
          <Counter
            score={this.props.score}
            index={this.props.index}
            updatePlayerScore={this.props.updatePlayerScore}
          />
        </div>
      </div>
    )
  }
}

export default Player;