import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {

    return (
      <nav>
        <ul className="nav-links">
          <li className="nav-logo"><a href="#">R<b>W</b></a></li>
          <li className="nav-link"><a href="#">About</a></li>
          <li className="nav-link"><a href="#">Projects</a></li>
          <li className="nav-link"><a href="#">Blog</a></li>
        </ul>
      </nav>
    );
  }

}

export default Header;
