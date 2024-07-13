import { useState } from 'react'
// import Header from './Home/Header/Header'
import Intro from './Home/Intro/Intro'
// import Speakers from './Home/Speakers/Speakers'
import Footer from './Home/Footer/Footer';
import Header from './Home/NavBar/Header';

import ImageSlider from './Home/ImageSlider/ImageSlider';
import './App.css';
import Speakers from './Home/Speakers/Speakers';
import QuickLinks from './Home/Quicklinks/Quicklinks.jsx';
import Announcements from './Home/AnnAch/Announcements';
import Gallery from './Home/Gallery/Gallery';
import Expertise from './Home/Expertise/Expertise.jsx';

function App() {


  return (
    <div >
    {/* <Header/> */}
    <Header/>
    {/* <Speakers/> */}
      {/* <Intro /> */}
  {/* <ImageSlider/> */}
  <Speakers/>
  {/* <QuickLinks/> */}

  <Announcements/>
  <Expertise/>
  <Gallery/>
  <Footer/>

    </div>
    
  )
}

export default App
