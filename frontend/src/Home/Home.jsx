import { useState } from 'react'


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Speakers from './Speakers/Speakers.jsx';
import Announcements from './AnnAch/Announcements.jsx';
import Expertise from './Expertise/Expertise.jsx';
import Gallery from './Gallery/Gallery.jsx';
import DepDisplay from './DepDisplay/DepDisplay.jsx';
import Carousel from './Carousel/Carousel.jsx';




function Home() {


  return (
    
    <div >
      <Carousel/>
    <Speakers/>
    <Announcements/>
    
<DepDisplay/>
    <Expertise/>
    <Gallery/>



  </div>

 

   
    
  )
}

export default Home
