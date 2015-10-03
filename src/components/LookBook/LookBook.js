/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './LookBook.css';

@withStyles(styles)
class LookBook extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Lookbook';
    this.context.onSetTitle(title);
    return (
      <div className="LookBookPage">
        <div className="LookBookPage-container">

        </div>
      </div>
    );
  }

}

export default LookBook;
