import React, { Component } from 'react';
import { PlayersShape } from "./PlayerShape";

class Stats extends Component {

  static propTypes = {
    players: PlayersShape.isRequired
  };

  render() {
    const totalPlayers = this.props.players.length;
    const totalScore = this.props.players.reduce(
      (score, player) => player.score + score, 0
    );

    return (
      <table className="stats">
        <tbody>
          <tr>
            <td>Players: </td>
            <td>{totalPlayers}</td>
          </tr>
          <tr>
            <td>Total Points: </td>
            <td>{totalScore}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Stats;
