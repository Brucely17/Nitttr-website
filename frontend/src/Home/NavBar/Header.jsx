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
    
          <iframe className='background__video' src="https://drive.google.com/file/d/13KtgvvTnSEo5BSDZbonQX1WTq9-SIAL2/preview" width="640" height="480" allow="autoplay"></iframe>
          <Announce />
        </div>
      
    

    
  

  
    </>
  );
};

export default Header;
