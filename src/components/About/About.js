import React from 'react';
import Skills from '../Skills/Skills';
import Experience from '../Experiences/experience';
import '../../App.css';

const About = props => {
    return (
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Hello!!</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">My name is Devanshi.</h4>
              <p>
                I am a full stack web developer and a machine learning enthusiast. I like collaborating with people and 
                solving real world problems through my coding skills. 
              </p>
              <p>
                I really enjoy solving problems as well as making things pretty and easy to use. I
                can't stop learning new things; the more, the better. I also love singing, performing on stage
                and debating.
              </p>
            </div>
            <div className="title">
              <h3>What do I do?</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">I'm a Full Stack WebDeveloper.</h4>
              <p>
                For the front-end I usually work using ReactJS. I also make the web pretty by using
                CSS and, whenever needed, any of their friends: Bootstrap, React Libraries, etc.
              </p>
              <p>
                For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc).
                I have implemented some projects using the same and is exploring more about import
                as learning should never stop..
              </p>
            </div>
            <div className="desc">
              <h4 className="subtitle">I'm a machine learning enthusiast.</h4>
              <p>
                I find interest in studying about the different machine learning models and using
                them to solve real world problems.I have made some projects related to machine learning 
                and is looking forward to dive more in this field
              </p>
              <p>
                As a whole i like building a ml model to solve a problem and then integrating it in website
                so that it can be provided a good idea and the users can benefit from it.
              </p>
            </div>
            <div className="title">
              <h3>My Skills?</h3>
              <p className="separator" />
            </div>
            <Skills/>
            <div className="title">
              <h3>My Experience?</h3>
              <p className="separator" />
            </div>
            <Experience/>
          </article>
        </div>
      </section>
    );
  };

  export default About;