require('../scss/nav.scss');
import React from 'react';
import NavLeft from './NavLeft.js';
import NavRight from './NavRight.js';

class Nav extends React.Component {

  render() {
    return (
      <div>
      <NavLeft component="" />
      <NavRight component=""/>
      </div>
    );
  }

}

export default Nav;
