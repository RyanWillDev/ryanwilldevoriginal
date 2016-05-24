/* eslint-disable */

import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';

require('../scss/mobileNav.scss')

const RadiumLink = Radium(Link);

export default class MobileNav extends React.Component {

  render() {
    const styles = {
      bmBurgerBars: {
        color: 'tomato',
      },
    }
    return (
      <div id="mobile-nav">
        <Menu style={styles}>
          <RadiumLink className="menu-item" to="/about">About</RadiumLink>
          <RadiumLink className="menu-item" to="/projects">Projects</RadiumLink>
          <RadiumLink className="menu-item" to="/contact">Contact</RadiumLink>
        </Menu>
      </div>
    );
  }
}
