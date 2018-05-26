import React, { Component } from 'react';

export default class Stopwatch extends Component {

  state = {
    running: false,
    elapsedTime: 0,
    previousTime: 0
  };

  componentDidMount() {
    this.interval = setInterval(this.onTick, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onTick = () => {
    if(this.state.running) {
      const now = Date.now();

      this.setState(prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
      }));
    }
  };

  onStart = () => {
    this.setState({
      running: true,
      previousTime: Date.now()
    });
  };

  onStop = () => {
    this.setState({running: false});
  };

  onReset = () => {
    this.setState({
      elapsedTime: 0
    })
  };


  render() {
    const timeInSeconds = Math.trunc(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time">{timeInSeconds}</div>
        {this.state.running ?
          <button onClick={this.onStop}>Stop</button>
          :
          <button onClick={this.onStart}>Start</button>
        }
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}
