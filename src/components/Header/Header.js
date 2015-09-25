/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <img className="Header-brandImg" src="https://d2ilfdg091sfom.cloudfront.net/content/images/jane/jane-logo_360.png" />
          </a>
          <Navigation className="Header-nav" />
          <div className="Header-banner">
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
