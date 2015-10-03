/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Menu from '../Navigation'


@withStyles(styles)
class Header extends Component {

  componentWillMount () {

  }

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <div className='Navigation'>
          <span className="open-menu" >
          <span className="omnu-line trans" ></span>
          <span className="omnu-line trans-fast" ></span>
          <span className="omnu-line trans" ></span>
          </span>
          </div>
        </div>
        <Menu />
      </div>
    );
  }

}

export default Header;
