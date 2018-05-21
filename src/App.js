import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {
    title: 'Scoreboard'
  };

  render() {
    return (
      <div className="scoreboard">
        <div className="header">
          <h1>{this.props.title}</h1>
        </div>

        <div className="players">
          <div className="player">
            <div className="player-name">
              Jim Hoskins
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 31 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>

          <div className="player">
            <div className="player-name">
              Andrew Chalkey
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 33 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
