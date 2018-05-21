import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

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
          <Counter score={this.props.score}/>
        </div>
      </div>
    )
  }
}

export default Player;