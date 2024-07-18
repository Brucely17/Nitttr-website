import React from 'react';
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiLinkedinFill } from 'react-icons/ri';
import './Head.css';

const Head = () => {
  return (
    <header className="header">
    
      <img src='/images/website1.png' alt="Chennai Logo" className="header-logo" />
      {/* </div> */}
      {/* <div className='hRight' > */}
      <div className="social-icons">
        <RiTwitterFill className="social-icon" />
        <RiFacebookFill className="social-icon" />
        <RiInstagramFill className="social-icon" />
        <RiLinkedinFill className="social-icon" />
      </div>
      {/* </div> */}
    </header>
  );
};

export default Head;
