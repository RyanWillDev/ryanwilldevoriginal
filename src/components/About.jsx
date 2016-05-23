import React from 'react';
import Nav from './Nav';

require('../scss/about.scss');

class About extends React.Component {

  render() {
    return (
      <div className="about-container">
        <p className="about-description"><span className="emphasis">Ryan Will</span>,
          an aspiring Web Developer from the the Nashville area.
          A natural and determined problem solver, I enjoy solving new challenges, and I am
          constantly looking to fill the gaps in my knowledge of any topic. Feel free to
          look through my projects and reach out if you want to work together.
        </p>
        <p className="about-description"><span className="emphasis">Ryan Will</span>,
          an aspiring Web Developer from the the Nashville area.
          A natural and determined problem solver, I enjoy solving new challenges, and I am
          constantly looking to fill the gaps in my knowledge of any topic. Feel free to
          look through my projects and reach out if you want to work together.
        </p>
        <p className="about-description"><span className="emphasis">Ryan Will</span>,
          an aspiring Web Developer from the the Nashville area.
          A natural and determined problem solver, I enjoy solving new challenges, and I am
          constantly looking to fill the gaps in my knowledge of any topic. Feel free to
          look through my projects and reach out if you want to work together.
        </p>
        <p className="about-description"><span className="emphasis">Ryan Will</span>,
          an aspiring Web Developer from the the Nashville area.
          A natural and determined problem solver, I enjoy solving new challenges, and I am
          constantly looking to fill the gaps in my knowledge of any topic. Feel free to
          look through my projects and reach out if you want to work together.
        </p>
        <p className="about-description"><span className="emphasis">Ryan Will</span>,
          an aspiring Web Developer from the the Nashville area.
          A natural and determined problem solver, I enjoy solving new challenges, and I am
          constantly looking to fill the gaps in my knowledge of any topic. Feel free to
          look through my projects and reach out if you want to work together.
        </p>
        <Nav left="Projects" right="Contact" />
      </div>
    );
  }

}

export default About;
