require('../scss/nav.scss');
import React from 'react';
import NavLink from './NavLink.js';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-links">
      <NavLink componentName={this.props.left} direction="left" />
      <NavLink componentName={this.props.right} direction="right" />
      </div>
    );
  }
}

Nav.propTypes = {
  left: React.PropTypes.string,
  right: React.PropTypes.string,
};

export default Nav;
