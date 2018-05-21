import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';
import Player from './Player';
import Header from "./Header";

class App extends Component {

  static propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired
    })).isRequired
  };

  static defaultProps = {
    title: 'Scoreboard'
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title}/>

        <div className="players">
          {this.props.players.map(player => (
            <Player key={player.name} name={player.name} score={player.score}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
