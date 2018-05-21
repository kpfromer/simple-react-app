import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Player from './Player';
import Header from "./Header";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: props.initialPlayers
    }
  }

  static propTypes = {
    title: PropTypes.string,
    initialPlayers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired
    })).isRequired
  };

  static defaultProps = {
    title: 'Scoreboard'
  };

  onScoreChange(index, delta) {
    this.setState(prevState => {
      prevState.players[index].score += delta;
      return prevState;
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title}/>

        <div className="players">
          {this.state.players.map((player, index) => (
            <Player
              onScoreChange={delta => this.onScoreChange(index, delta)}
              key={player.id}
              name={player.name}
              score={player.score}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
