import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Layout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Footer />
      </div>
    );
  }

}

export default Layout;
