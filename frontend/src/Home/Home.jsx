import { useState } from 'react'


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Speakers from './Speakers/Speakers.jsx';
import Announcements from './AnnAch/Announcements.jsx';
import Expertise from './Expertise/Expertise.jsx';
import Gallery from './Gallery/Gallery.jsx';




function Home() {


  return (
    
    <div >
    <Speakers/>
    <Announcements/>

    <Expertise/>
    <Gallery/>



  </div>

 

   
    
  )
}

export default Home
