import React from 'react';
import Nav from './Nav';

require('../scss/about.scss');

class About extends React.Component {

  render() {
    return (
      <div className="about-container">
        <p className="about-description"><span className="emphasis">Ryan Will</span>,
          an aspiring Web Developer from the the Nashville area.
          I am a natural and determined problem solver. I enjoy solving new challenges, and I am
          constantly looking to fill the gaps in my knowledge of any topic.
        </p>
        <Nav left="Projects" right="Contact" />
      </div>
    );
  }

}

export default About;
