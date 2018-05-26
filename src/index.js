import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Scoreboard from './containers/Scoreboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Scoreboard />, document.getElementById('root'));
registerServiceWorker();
