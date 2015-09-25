/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Side-Nav.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class SideNav extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Log In';
    this.context.onSetTitle(title);
    return (
      <div className="SideNav">
        <div className="jane-credit-top-left">
            <h1></h1>
          </div>
        <div className="jane-credit-top-bottom">
          </div>
      </div>
    );
  }

}

export default SideNav;
