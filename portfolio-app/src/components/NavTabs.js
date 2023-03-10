import React from 'react';
import myPic from '../images/pic-of-me.jpeg';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <header>
        <p className='header'>Caleb Korson</p>
        <img src={myPic} alt='Me and my wife' className={currentPage === 'About' ? 'myPic' : 'myPicNone'}/>
      </header>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
      {/* <footer className='page-footer'>
        <ul className='row links'>
          <li><a href='https://github.com/ckkorson' target='_blank'>GITHUB</a></li>
          <li><a href='https://www.linkedin.com/in/calebkorson/'>LINKEDIN</a></li>
        </ul>
      </footer> */}
    </div>
  );
}

export default NavTabs;
