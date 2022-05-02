import React from 'react';

import './AboutPage.scss'

function AboutPage() {
  return (
    <div className="about">
      <div>
        <p>This project was completed over a two week period by Zach Carter for his Prime Digital Academy solo project. All images are public domain.</p>
        <p className="Fire">Technologies Used:</p>
        <ul className="Sky">
          <li>React</li>
          <li>Redux</li>
          <li>Redux-Saga</li>
          <li>Express</li>
          <li>Node</li>
          <li>Postgres</li>
          <li>SASS</li>
          <li>Wiki Action API</li>
        </ul>     

        <p className="Earth">Thanks to:</p>
        <ul className="Water">
          <li>Prime</li>
          <li>Butler Cohort</li>
          <li>Dane Smith</li>
          <li>Kris Szafranski</li>
        </ul>      
      </div>
    </div>
  );
}

export default AboutPage;
