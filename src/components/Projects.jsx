import React from 'react';
import Nav from './Nav';

require('../scss/projects.scss');

class Projects extends React.Component {

  render() {
    return (
      <div className="projects-container">
        <h2>Some of my recent work</h2>
        <div id="featured-projects">
          <div className="featured-project">
            <a href="http://codepen.io/ryanwilldev/full/rxrVqQ">
              <img
                src="http://s3-us-west-2.amazonaws.com/i.cdpn.io/315266.rxrVqQ.small.9c7c5b0a-2f0a-41e6-9882-c3c334369da4.png"
                alt="A calculator built using Vanilla JavaScript"
              />
            </a>
          </div>
          <div className="featured-project">
            <a href="http://codepen.io/ryanwilldev/full/RayVjJ">
              <img
                src="http://s3-us-west-2.amazonaws.com/i.cdpn.io/315266.RayVjJ.small.01c029f1-c285-482e-af14-b74b229fcedc.png"
                alt="Wikipedia Search App"
              />
            </a>
          </div>
        </div>
        <Nav left="Contact" right="About" />
      </div>
    );
  }

}

export default Projects;
