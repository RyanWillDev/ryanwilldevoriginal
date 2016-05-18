require('../scss/nav.scss');
import React from 'react';
import NavLink from './NavLink.js';

class Nav extends React.Component {

  render() {
    return (
      <div className="nav-links">
      <NavLink componentName="" direction=""/>
      <NavLink componentName="" direction=""/>
      </div>
    );
  }

}

export default Nav;
