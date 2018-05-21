import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './App.css';
import Player from './Player';
import Header from "./Header";

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
        <Header title={this.props.title}/>

        <div className="players">
          <Player name="Kyle Pfromer" score={32}/>
          <Player name="Andrew Chalkey" score={33}/>
        </div>
      </div>
    );
  }
}

export default App;
