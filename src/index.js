import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './reducers/player';
import './index.css';
import Scoreboard from './containers/Scoreboard';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  PlayerReducer
);

ReactDOM.render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
