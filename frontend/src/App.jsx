import { useState } from 'react'

import Footer from './Home/Footer/Footer';
import Header from './Home/NavBar/Header';
import { BrowserRouter , Route,  Routes } from 'react-router-dom';

import './App.css';

import VisionMission from './About/VisionMission.jsx';
import ResourceCenter from './ResourceCenter/ResourceCenter.jsx';
import PgCourse from './CoursesOffered/PgCourse.jsx';
// import Overseas from './Overseas/Overseas.jsx';
import Home from './Home/Home.jsx';
import Director from './About/Director.jsx';
import Chairman from './About/Chairman.jsx';
import BisCorner from './Connect/BisCorner.jsx';
import Newsletter from './Newsletter/Newsletter.jsx';
function App() {


  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/academics/centres/resource' element={<ResourceCenter/>}/>
    <Route path='/Admission/pgcourses' element={<PgCourse/>}/>
    <Route path='/InformationCorner/biscorner' element={<BisCorner/>}/>
    <Route path='/InformationCorner/newsletter' element={<Newsletter/>}/>
    {/* <Route path='/overseas' element={<Overseas/>}/> */}
    <Route path='/institute/vissionMission' element={<VisionMission/>}/>
    <Route path='/institute/directorMessage' element={<Director/>}/>
    <Route path='/institute/chairman' element={<Chairman/>}/>
</Routes>
  
 

   
    </BrowserRouter>
    <Footer/>
    </>

  )
}

export default App
