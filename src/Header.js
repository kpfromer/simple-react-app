import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stats from "./Stats";
import { PlayersShape } from "./PlayerShape";
import Stopwatch from "./Stopwatch";

class Header extends Component {

  static propTypes = {
    title: PropTypes.string,
    players: PlayersShape.isRequired
  };

  static defaultProps = {
    title: 'Scoreboard'
  };

  render() {
    return (
      <div className="header">
        <Stats players={this.props.players}/>
        <h1>{this.props.title}</h1>
        <Stopwatch/>
      </div>
    );
  }
}

export default Header;
