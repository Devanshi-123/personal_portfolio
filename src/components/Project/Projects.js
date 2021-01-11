import Project from './Project';
import React from 'react';
import '../../App.css';
const Projects = props => {
    return (
      <section id="projects">
        <div className="projects-container">
          <div className="heading">
            <h3 className="title">My Works</h3>
            <p className="separator" />
          </div>
          <div className="projects-wrapper">
            <Project
              title="Search Companion Website."
              tech="js css react react-router"
              link="https://devanshi-123.github.io/SearchCompanion/#/poozle/images"
              repo="https://github.com/Devanshi-123/SearchCompanion"
            >
              <small>
                Built using Different Api's, React.js,Redux and React Router.
              </small>
              <p>
                This is a  website that I made which lets the user search any video image or recipe of their 
                choice and get in a proper grid fashion.
              </p>
            </Project>
            <Project
              title="Stock Price Prediction."
              tech="Machine Learning,Different Ensemble Learning Methods"
              repo="https://github.com/Devanshi-123/stock_market_prediction"
            >
              <small>
                Built using different machine learning and deep learning algorithms.
              </small>
              <p>
               A machine learning model made to inspect the upcoming prices of Tehran stock exchange
              </p>
            </Project>
            <Project
              title="Weather App"
              tech="js node css"
              link="https://git.heroku.com/goel-weather-forecast.git"
              repo="https://github.com/Devanshi-123/nodejs-weather-website"
            >
              <small>Built using Node, Express, JS and CSS.</small>
              <p>
                A full stack website which would return the temperature ,probability 
                of rain etc depending on the location
              </p>
            </Project>
            <Project
              title="Technical Documentation Page"
              tech="html css"
              link="https://codepen.io/Devanshi_Goel/pen/RwGBGLw"
              repo="https://codepen.io/Devanshi_Goel/pen/RwGBGLw"
            >
              <small>Built using html and css in a responsive format</small>
              <p>Documentation to maintain a crux of different topics at one place</p>
            </Project>
            <Project
              title="Survey Form"
              tech="html css"
              link="https://codepen.io/Devanshi_Goel/pen/oNzdGzW"
              repo="https://codepen.io/Devanshi_Goel/pen/oNzdGzW"
            >
              <small>Built using HTML and CSS</small>
              <p>
                Responsive Feedback Form made using HTML and CSS
                some other responsive pages at 
                <a href="https://codepen.io/Devanshi_Goel" target="blank"> Codepen</a>
              </p>
            </Project>
            <Project
              title="Mood Music"
              tech="machine learning"
              link="https://github.com/Devanshi-123/Mood-Detection"
              repo="https://github.com/Devanshi-123/Mood-Detection"
            >
              <small>Built using machine learning algorithms.</small>
              <p>It will predict the mood of a person based on the song one is listening to.</p>
            </Project>
            <Project
              title="Streamers App"
              tech="react redux react-router"
              link="https://github.com/Devanshi-123/Mood-Detection"
              repo="https://github.com/Devanshi-123/Mood-Detection"
            >
              <small>Built using machine learning algorithms.</small>
              <p>It will predict the mood of a person based on the song one is listening to.</p>
            </Project>
          </div>
        </div>
      </section>
    );
  };

  export default Projects;
  