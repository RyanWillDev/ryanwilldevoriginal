import React from 'react';
import Nav from './Nav';
import Project from './Project';

require('../scss/projects.scss');

class Projects extends React.Component {
  constructor() {
    super();
  }
  render() {
    const projInfo = {
      calc: {
        siteLink: 'http://codepen.io/ryanwilldev/full/rxrVqQ',
        imgLink: 'http://s3-us-west-2.amazonaws.com/i.cdpn.io/315266.rxrVqQ.small.9c7c5b0a-2f0a-41e6-9882-c3c334369da4.png',
        imgAlt: 'A calculator built using Vanilla JavaScript',
        title: 'JavaScript Calculator',
        desc: 'This is a calculator built using plain ol\' JavaScript',
      },
      wiki: {
        siteLink: 'http://codepen.io/ryanwilldev/full/RayVjJ',
        imgLink: 'http://s3-us-west-2.amazonaws.com/i.cdpn.io/315266.RayVjJ.small.01c029f1-c285-482e-af14-b74b229fcedc.png',
        imgAlt: 'Wikipedia Search App',
        title: 'Wikipedia Viewer',
        desc: 'Wikipedia search app from FreeCodeCamp',
      },
    };

    return (
      <div className="projects-container">
        <h1 className="projects-title">Recent Work</h1>
        <div id="featured-projects">
          <Project siteLink={projInfo.calc.siteLink} imgLink={projInfo.calc.imgLink}
            imgAlt={projInfo.calc.imgAlt} title={projInfo.calc.title} desc={projInfo.calc.desc}
          />
          <Project siteLink={projInfo.wiki.siteLink} imgLink={projInfo.wiki.imgLink}
            imgAlt={projInfo.wiki.imgAlt} title={projInfo.wiki.title} desc={projInfo.wiki.desc}
          />
        </div>
        <Nav left="Contact" right="About" />
      </div>

    );
  }

}

export default Projects;
