import React from 'react';
import Nav from './Nav.js';

class About extends React.Component {

  render() {
    return (
      <div className="about-container">
        <h2 className="about-title">Ryan Will</h2>
        <p className="about-description">I am an aspiring Web Developer from the the Nashville area.
          I am a natural problem solver.
        </p>
        <Nav left="Projects" right="Contact" />
      </div>
    );
  }

}

export default About;
