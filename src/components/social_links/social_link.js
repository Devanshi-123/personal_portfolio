import React from "react";
import {
    FaInstagram,
    FaGithub,
    FaLinkedinIn
  } from "react-icons/fa";
import "../../App.css";

const sociallinks = props => {
    return (
      <div className="social">
        <a
          href="https://www.instagram.com/devanshigoel7/"
          target="_blank"
          rel="noopener noreferrer"
          title="Here is the link to my instagram account to know more about me"
        >
          {' '}
          <FaInstagram size="2.8rem" />
        </a>
        <a
          id="profile-link"
          href="https://github.com/Devanshi-123"
          target="_blank"
          rel="noopener noreferrer"
          title="Here is the link to my github profile.Check this to have a look on my open source contributions and recent works"
        >
          {' '}
          <FaGithub size="2.8rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/devanshi-goel-81b252195"
          target="_blank"
          rel="noopener noreferrer"
          title="Let's get professional.Here is link to my linkedin account where u can see my recent works"
        >
          {' '}
          <FaLinkedinIn size="2.8rem" />
        </a>
      </div>
    );
  };
  
  export default sociallinks;