import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import update from 'immutability-helper';
import Player from "../components/Player";
import Header from "../components/Header";
import AddPlayerForm from "../components/AddPlayerForm";

let idStart = 4;

class Scoreboard extends Component {

  static propTypes = {
    players: PropTypes.array.isRequired
  };

  render() {

    const { dispatch, players } = this.props;

    // bindActionCreators ensures when addPlayer is invoked it is also dispatched to the redux store
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer= bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        removePlayer={removePlayer}
        updatePlayerScore={updatePlayerScore}
        key={player.name}
      />
    ));
    
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={players}/>

        <div className="players">
          {playerComponents}
        </div>

        <AddPlayerForm addPlayer={addPlayer}/>
      </div>
    );
  }
}

// maps redux state to "players" prop that is given to the Scoreboard as a prop
const mapStateToProps = state => ({
  players: state
});

export default connect(mapStateToProps)(Scoreboard);
