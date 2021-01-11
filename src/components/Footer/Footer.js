import React from 'react';
import '../../App.css';
import SocialLinks from '../social_links/social_link';

const Footer = props => {
    return (
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Devanshi Goel.</p>
          <SocialLinks />
        </div>
      </footer>
    );
  };

export default Footer;