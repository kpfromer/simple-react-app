import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import update from 'immutability-helper';
import Player from "../Player";
import Header from "../Header";
import AddPlayerForm from "../AddPlayerForm";
import { PlayersShape } from '../PlayerShape';

let idStart = 4;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: props.initialPlayers
    }
  }

  static propTypes = {
    title: PropTypes.string,
    initialPlayers: PlayersShape.isRequired
  };

  static defaultProps = {
    title: 'Scoreboard'
  };

  onScoreChange = (index, delta) => {
    this.setState(prevState => update(prevState, {
      players: {
        [index]: {
          score: {$set: prevState.players[index].score + delta}
        }
      }
    }));
  };

  removePlayer = playerIndex => {
    this.setState(prevState => ({
      players: update(prevState.players, {$splice: [[playerIndex, 1]]})
    }))
  };

  addPlayer = playerName => {
    this.setState(prevState => update(prevState, {
      players: {
        $push: [
          {
            id: idStart,
            name: playerName,
            score: 0
          }
        ]
      }
    }));

    idStart += 1;
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players}/>

        <div className="players">
          {this.state.players.map((player, index) => (
            <Player
              onRemove={() => this.removePlayer(index)}
              onScoreChange={delta => this.onScoreChange(index, delta)}
              key={player.id}
              name={player.name}
              score={player.score}
            />
          ))}
        </div>

        <AddPlayerForm onAdd={this.addPlayer}/>
      </div>
    );
  }
}

export default App;
