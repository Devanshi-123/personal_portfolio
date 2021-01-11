import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import '../../App.css';

const Header = props => {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
       {/*<div className="moon" />*/}
        <div className="container">
          <h1>
          <span className="line">I am a</span>
            <TypeWriterEffect textStyle={{
          /*fontFamily: 'Red Hat Display',*/
          color: 'white',
          fontStyle:'italic',
          fontWeight: 100,
          fontSize: '0.5em',
        }}
        startDelay={2000}
        cursorColor="white"
        multiText={[
           "Full Stack Web Developer!!",
            "Machine Learning Enthusiast!!",
            "Beta Microsoft Learn Ambassador!!",
            "Coder!!",
            "Mentor!!"
        ]}
        multiTextDelay={1000}
        typeSpeed={30}/>
          </h1>
          <div className="buttons">
            <a href="https://drive.google.com/file/d/1zZpRpxHCKjgfWsGVQrlhDP6BXl0K6iRS/view?usp=sharing" download="resume">Download Resume</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    );
  };

  export default Header;