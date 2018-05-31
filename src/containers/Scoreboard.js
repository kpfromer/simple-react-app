import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import Player from "../components/Player";
import Header from "../components/Header";
import AddPlayerForm from "../components/AddPlayerForm";
import PlayerDetail from "../components/PlayerDetail";
import UndoRedo from "./UndoRedo";

class Scoreboard extends Component {

  static propTypes = {
    players: PropTypes.array.isRequired
  };

  render() {

    const { dispatch, players, selectedPlayerIndex } = this.props;

    // bindActionCreators ensures when addPlayer is invoked it is also dispatched to the redux store
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer= bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        removePlayer={removePlayer}
        updatePlayerScore={updatePlayerScore}
        selectPlayer={selectPlayer}
        key={player.name}
      />
    ));

    const selectedPlayer = selectedPlayerIndex !== -1 ? players[selectedPlayerIndex] : null;
    
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={players}/>

        <div className="players">
          {playerComponents}
        </div>

        <AddPlayerForm addPlayer={addPlayer}/>

        <PlayerDetail selectedPlayer={selectedPlayer} />
        <UndoRedo />
      </div>
    );
  }
}

// maps redux state to "players" prop that is given to the Scoreboard as a prop
const mapStateToProps = state => ({
  players: state.present.players,
  selectedPlayerIndex: state.present.selectedPlayerIndex
});

export default connect(mapStateToProps)(Scoreboard);
