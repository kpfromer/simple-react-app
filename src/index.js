import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const players = [
  {
    name: 'Kyle Pfromer',
    score: 30
  },
  {
    name: 'Ben Groover',
    score: 31
  },
  {
    name: 'Sean Hinds',
    score: 35
  }
];

ReactDOM.render(<App title="My Scoreboard" players={players} />, document.getElementById('root'));
registerServiceWorker();
