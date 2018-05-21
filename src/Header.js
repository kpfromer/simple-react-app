import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {
    title: 'Scoreboard'
  };

  render() {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Header;
