import React, { Component } from 'react';
import '../App.css';
import update from 'immutability-helper';
import Player from "../Player";
import Header from "../Header";
import AddPlayerForm from "../AddPlayerForm";

let idStart = 4;

export default class Scoreboard extends Component {

  state = {
    players: [
      {
        name: 'Kyle Pfromer',
        score: 30,
        id: 1
      },
      {
        name: 'Ben Groover',
        score: 31,
        id: 2
      },
      {
        name: 'Sean Hinds',
        score: 35,
        id: 3
      }
    ]
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
        <Header title="Scoreboard" players={this.state.players}/>

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
