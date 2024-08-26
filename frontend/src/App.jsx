import { useState } from 'react'

import Footer from './Home/Footer/Footer';
import Header from './Home/NavBar/Header';
import { BrowserRouter , Route,  Routes } from 'react-router-dom';

import './App.css';

import Civil from './Departments/Civil/Civil.jsx'
import VisionMission from './About/VisionMission.jsx';
import ResourceCenter from './ResourceCenter/ResourceCenter.jsx';
import PgCourse from './CoursesOffered/PgCourse.jsx';
// import Overseas from './Overseas/Overseas.jsx';
import Home from './Home/Home.jsx';
import Director from './About/Director.jsx';
import Chairman from './About/Chairman.jsx';
import BisCorner from './Connect/BisCorner.jsx';
import Newsletter from './Newsletter/Newsletter.jsx';
import Faculty from './Academics/Faculty.jsx';
import Feducation from './Academics/Feducation.jsx';
import Fmanagement from './Academics/Fmanagement.jsx';
import RTIACT from './Home/RTIACT/RTIACT.jsx';
import Brochure from './Brochure/Brochure.jsx';
import JTVE from './Home/JTVE/JTVE.jsx';
import MemorandumAssociation from './Home/Governance/MemorandumAssociation.jsx';
import AcademicCouncil from './Home/Governance/AcademicCouncil.jsx';
import Administration from './Home/Governance/Administration.jsx';
import Bogminutes from './Home/Governance/Bogminutes.jsx';
import Annualreport from './Home/Governance/Annualreport.jsx';
import Apr from './Annualpr/Annualpr.jsx'
import Icc from './ICC/Internalcc.jsx'
import AcademicStudies from './Academics/Centres/AcademicStudies/AcademicStudies.jsx';
import Inter from './Academics/Centres/InternationalAffairs/Inter.jsx';
// import CVOfficer from './Officer/Office.jsx'
import Contact from './Contact/contact.jsx'
import GoogleTranslate from './Googletranslate.jsx';


function App() {


  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/academics/centres/resource' element={<ResourceCenter/>}/>
    <Route path='/Admission/pgcourses' element={<PgCourse/>}/>
    <Route path='/MEMORANDUMOFASSOCIATION' element={<MemorandumAssociation/>}/>
    <Route path='/ACADEMIC-COUNCIL' element={<AcademicCouncil/>}/>
    <Route path='/ADMINISTRATION' element={<Administration/>}/>
    <Route path='/BOGMINUTES' element={<Bogminutes/>}/>
    <Route path='/institute/Annual Report' element={<Annualreport/>}/>
    <Route path='/InformationCorner/biscorner' element={<BisCorner/>}/>
    <Route path='/InformationCorner/newsletter' element={<Newsletter/>}/>
    <Route path='/InformationCorner/RTIACT' element={<RTIACT/>}/>
    <Route path='/InformationCorner/BROCHURE' element={<Brochure/>}/>
    {/* <Route path='/overseas' element={<Overseas/>}/> */}
    <Route path='/institute/vissionMission' element={<VisionMission/>}/>
    <Route path='/institute/directorMessage' element={<Director/>}/>
    <Route path='/institute/chairman' element={<Chairman/>}/>
    <Route path='/Academics/FacultyDepartment/FacultyofEngineeringandTechnology' element={<Faculty/>}/>
    <Route path='/Academics/FacultyDepartment/FacultyofEducation' element={<Feducation/>}/>
    <Route path='/Academics/FacultyDepartment/FacultyofManagement' element={<Fmanagement/>}/>
    <Route path='/Academics/FacultyDepartment/FacultyofManagement' element={<Fmanagement/>}/>
    <Route path='/InformationCorner/JTVE' element={<JTVE/>} />
    <Route path='/administration/AnnualPR' element={<Apr/>} />
    <Route path='/Governance/ICC' element={<Icc/>} />
    <Route path='/Academics/Centres/AcademicStudies' element={<AcademicStudies/>}/>
    <Route path= '/Departments/Civil' element={<Civil/>}/>
    <Route path='/Academics/Centres/InternationalAffairs' element={<Inter/>}/>
    {/* <Route path='/administration/Committees & Incharge/Vigilance' element={<CVOfficer/>}/> */}
    <Route path= '/contact' element={<Contact/>}/>
</Routes>
  
 

   
    </BrowserRouter>


    <Footer/>   
    </>

  )
}

export default App;
