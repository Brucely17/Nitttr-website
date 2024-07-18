import React from 'react';

import NavBar from './NavBar';
import './Header.css';
import Head from './Head';
import Announce from '../Intro/Announce';
import Intro from '../Intro/Intro';

const Header = () => {
  return (
    <>
    <Head />
    
    {/* <div classnmae='border-down'></div> */}
    <header className="header__new">
    
   
   
     
      
      
    </header>
    <div className='new__container'>
    <NavBar />
    
    
    
    
    </div>
    
    <div className='video__container'>
    
          <video autoPlay loop muted className='background__video h-96'>
            <source src="https://drive.google.com/file/d/13KtgvvTnSEo5BSDZbonQX1WTq9-SIAL2/view" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Announce />
        </div>
      
    

    
  

  
    </>
  );
};

export default Header;
