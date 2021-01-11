import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu} style={{color:'whitesmoke'}}>
           Devanshi
           Goel
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu} style={{color:'whitesmoke'}}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/skill'
                className='nav-links'
                onClick={closeMobileMenu}
                style={{color:'whitesmoke'}}
              >
                Skill
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/experience'
                className='nav-links'
                onClick={closeMobileMenu}
                style={{color:'whitesmoke'}}
              >
                Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/academics'
                className='nav-links'
                onClick={closeMobileMenu}
                style={{color:'whitesmoke'}}
              >
                Academics
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
                style={{color:'whitesmoke'}}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blogs'
                className='nav-links'
                onClick={closeMobileMenu}
                style={{color:'whitesmoke'}}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;