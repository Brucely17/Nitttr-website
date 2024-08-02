// import React, { useState } from 'react';
// import './ATab.css'; // Import the CSS file for custom styles

// // import { Faculty } from '../Faculty/Faculty.jsx';
// const AcademicTab = () => {
//   const [activeTab, setActiveTab] = useState('vision');

//   const handleTabClick = (event, tabName) => {
//     setActiveTab(tabName);
//   };
 
  

//   return (
//     <div className="flex flex-row md:flex-row p-10">
//       <div className="tab flex flex-col w-full md:w-1/4 border-r border-gray-300">
//         <button
//           className={`tablinks ${activeTab === 'home' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
//           onClick={(event) => handleTabClick(event, 'home')}
//         >
//           Home
//         </button>
//         <button
//           className={`tablinks ${activeTab === 'AICTE' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
//           onClick={(event) => handleTabClick(event, 'AICTE')}
//         >
//          AICTE Approval
//         </button>
      
        
        
        
        
       
        
        
        
//         <button
//           className={`tablinks ${activeTab === 'faculty' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
//           onClick={(event) => handleTabClick(event, 'faculty')}
//         >

//           Faculty

//         </button>
//       </div>

//       <div className="tabcontent flex-1 p-6">
//         {activeTab === 'home' && <div className="animate-slideUp"><VisionComponent vision={visionCivil} mission={missionCivil}/></div>}
//         {activeTab === 'AICTE' && <div className="animate-slideUp"><Core title="Core Values" imagePath="/images/core_civil.png"/> </div>}
    
//         {activeTab === 'faculty' && <div className="animate-slideUp"></div>}
//       </div>
//     </div>
//   );
// };

// export default AcademicTab;
import React, { useState } from 'react';
import './ATab.css'; // Import the CSS file for custom styles
import ResearchProgram from '../../../Departments/Civil/ResearchProgram/ResearchProgram';
import FacultyMember from './FacultyMember';
import { Faculty } from '../../../Departments/Civil/Faculty/Faculty.jsx';

const AcademicTab = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeFaculty, setActiveFaculty] = useState(null);

  const fac = [
    {
      name: 'Dean (Academic & Research)-Dr.G.Janardhanan,',
      pos: 'M.E.,Ph.D(USA),',
      des: 'Professor DCEE & Head CASR'
    },
    {
      name: 'Associate Dean (Academics) - Dr.Seshu Babu Pullagara,',
      pos: "",
      des: 'Assistant Professor DCSE'
    },
    {
      name: "Associate Dean (Training) - Dr. R.Suja Mani Malar, ",
      pos: '',
      des: 'Associate Professor DEE'
    },
    {
      name: "Associate Dean (Research) - Dr. M. Anil Kumar, ",
      pos: '',
      des: 'Associate Professor CRED'
    }
  ];

  const handleTabClick = (event, tabName) => {
    setActiveTab(tabName);
    setActiveFaculty(null); // Reset the active faculty when changing tabs
  };

  const handleFacultyClick = (facultyId) => {
    setActiveFaculty(facultyId);
  };

  const researchItems = [
    "Centre for Academic Studies and Research (CASR) established in the year 2018 is a Centre of Excellence, which aims at providing high quality solutions to the problems in core Engineering and Engineering Education through research, development and extension activities.",
    "This centre is facilitating the various Departments / courses in core engineering and engineering education masters and research programmes with the objectives."
  ];

  return (
    <div className="flex flex-row md:flex-row p-10">
      <div className="tab flex flex-col w-full md:w-1/4 border-r ">
        <button
          className={`tablinks ${activeTab === 'home' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'home')}
        >
          Home
        </button>
        <button
          className={`tablinks ${activeTab === 'AICTE' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'AICTE')}
        >
          AICTE Approval
        </button>
        <button
          className={`tablinks ${activeTab === 'faculty' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'faculty')}
        >
          Faculty
        </button>
      </div>

      <div className="flex-1 p-6">
        {activeTab === 'home' && (
          <ResearchProgram title="Home" researchItems={researchItems} />
        )}
        {activeTab === 'AICTE' && (
          <div className="flex flex-col text-center animate-slideUp">
            <h1 className='text-blue-700 text-3xl'>Approval from AICTE</h1>
            <div className="embed-responsive embed-responsive-16by9 items-center">
              <iframe className="embed-responsive-item h-96 w-full" src="./uploads/EOA%20Report%202024-2025.pdf#toolbar=0"></iframe>
            </div>
          </div>
        )}
        {activeTab === 'faculty' && (
          <>
            <Faculty faculty={fac} />
            {activeFaculty === 'faculty1' && (
              <FacultyMember
                id="faculty1"
                activeTab={activeTab}
                handleTabClick={() => handleFacultyClick('faculty1')}
                name="Dr.G.Janardhanan"
                title="Dean (Academics & Research)"
                position="Professor DCEE & Head CASR"
                imgSrc="assets/images/jana.jpg"
                contact={{
                  phone1: '044-2254 5460',
                  phone2: '044-2254 5447',
                  email1: 'jana@nitttrc.ac.in',
                  email2: 'dr.gjanardhanan@gmail.com',
                  vidwanLink: 'https://vidwan.inflibnet.ac.in/profile/149866',
                }}
                specializations={[
                  'Green Building Technologies',
                  'Water Quality Management',
                  'Sustainable Development',
                  'Landuse and Landcover Management',
                  'Geographical Information System',
                  'Educational Technologies and FOSS for Academics',
                ]}
                qualifications={[
                  { degree: 'B.E', institution: 'College and Engineering, Guindy Anna University', specialization: 'Civil Engineering' },
                  { degree: 'M.E', institution: 'College and Engineering, Guindy Anna University', specialization: 'Soil Mechanics and Foundation Engineering' },
                  { degree: 'Ph.D', institution: 'University of Illinois, USA', specialization: 'Civil Engineering' },
                ]}
                experience={[
                  'Associate Professor – Centre for Environmental Management, National Institute of Technical Teachers Training & Research, Taramani, Chennai',
                  'Geo-Environmental Engineer – Great Lakes Soil and Environmental Consultants, Bolingbrook, Illinois, USA Incharge of DeKalb County Landfill Design and Characterization. Geotechnical Engineer – ARCADIS, Tennessee, USA',
                  'Lecturer – Department of Civil Engineering, Anna University, Chennai, India',
                  'Teaching Research Associate - Department of Civil Engineering, Anna University, Chennai, India',
                ]}
                profileLink="./uploads/me/jana.pdf"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AcademicTab;
