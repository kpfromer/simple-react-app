import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';
import Player from './Player';

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
          <Player name="Kyle Pfromer" score={32}/>
          <Player name="Andrew Chalkey" score={33}/>
        </div>
      </div>
    );
  }
}

export default App;
