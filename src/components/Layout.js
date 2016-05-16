require('../scss/base.scss');
import React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';

class Layout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <Nav />
        <Footer />
      </div>
    );
  }

}

export default Layout;
