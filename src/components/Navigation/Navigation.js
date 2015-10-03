/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Menu.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles) class Menu extends Component {

  getInitialState() {
  return {
    listVisible: false
  };
}

  show() {
  this.setState({ listVisible: true });
  document.addEventListener("click", this.hide);
}

  hide() {
  this.setState({ listVisible: false });
  document.removeEventListener("click", this.hide);
}


  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (

      <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
        <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
          <span style={{ color: this.props.selected.hex }}>{this.props.selected.name}</span>
          <i className="fa fa-angle-down"></i>
        </div>
        <div className="dropdown-list">
          <div>
            {this.renderListItems()}
          </div>
        </div>
      </div>
    );
  }

}

export default Menu;
