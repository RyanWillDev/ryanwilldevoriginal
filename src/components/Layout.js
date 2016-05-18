require('../scss/base.scss');
// require('../scss/layout.scss');
import React from 'react';
import Footer from './Footer.js';

class Layout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.object,
};

export default Layout;
