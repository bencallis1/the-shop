/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './ContactPage.css';
import withStyles from '../../decorators/withStyles';
import SideNav from '../Side-Nav';
@withStyles(styles)
class ContactPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Forms';
    this.context.onSetTitle(title);
    return (
      <div className="ContactPage">
        <SideNav />
        <div className="ContactPage-container">

        </div>
      </div>
    );
  }

}

export default ContactPage;
