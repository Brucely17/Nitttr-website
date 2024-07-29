import React, { useState } from 'react';
import './TabComponent.css'; // Import the CSS file for custom styles
import VisionComponent from '../VisionComponent/VisionComponent.jsx';
import Core from '../Core/Core.jsx';
import Domain from '../Domain/Domain.jsx';
import GraduateProgram from '../GraduateProgram/GraduateProgram.jsx'
import ResearchProgram from '../ResearchProgram/ResearchProgram.jsx';
import Training from '../Training/Training.jsx';
import Curriculum from '../Curriculum/Curriculum.jsx';
import CadLab from '../CadLab/CadLab.jsx';
import { Faculty } from '../Faculty/Faculty.jsx';
const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const handleTabClick = (event, tabName) => {
    setActiveTab(tabName);
  };
 
  const curriculaItems = [
    "Continuously Involved in Developing Curriculum for the Polytechnic Colleges of Southern States through Directorate Technical Education of Southern states.",
    "Involved in Developing Curriculum for the B.E, Civil Engineering, M.E (Remote Sensing), M.E (Infrastructure Engineering and Management)"
  ];
  const trainingItems = [
    "Spatial Information Technology for Urban Planning and Management – 3 Batches",
    "GIS Applications in Natural Resources Management – 2 Batches",
    "Sponsored by Indian Technical & Economic Cooperation (ITEC), Technical Co-operation Scheme of Colombo Plan (TCS) & Special Commonwealth African Assistance Programme (SCAAP)"
  ];
  const researchItems = [
    "Ph.D. - Civil Engineering",
    "Ph.D. - Engineering Education",
    "(Ph.D. - Degree Awarded - 6, Ongoing - 8)"
  ];

  const visionCivil = "Towards Excellence in Promoting need based Training Programmes and Research in Civil Engineering";
const missionCivil = [
  "To design and develop need based training programs for the faculty of Polytechnic & Engineering Colleges and working Professionals of Industry and Govt. Organizations",
  "To offer International Training Programs on emerging areas of Civil Engineering for the Teachers and working professionals of various Counties under ITEC/SCAAP schemes.",
  "To develop new innovative short term and long term programs by collaborating with Universities and Institutes of Higher Learning for developing Civil Engineering Teachers to meet the requirements of Engineering Educational Institutions.",
  "To provide support services to the Government of India schemes related to the technical and vocational education system and as entrusted by MHRD, Government of India, from time to time.",
  "To offer research, testing services and consultancy for Industries and Govt. Organizations.",
  "To establish partnership with Industries for offering Skill based Training Programs for Industrial Personnel and Industrial Training for the faculty of Polytechnic and Engineering Colleges.",
  "To design new instructional systems and strategies for the production of multimedia learning resources and transfer through the latest technologies including broadcasting, webcasting/Multicasting.",
  "To offer faculty exchange programs by linking with various Universities of India and abroad"
];
const cad={
  title:"CAD & Project Management Lab",
  description: "Fully equipped CAD & Project Management Lab with 20 terminals and adequate accessories with projection facilities, Popular software in the areas of CAD, AutoCAD, Revit Arch, STAAD Pro, SCADDS, MS Project, Primavera.",
  images:[
    { src: "/cad/cadlab1.jpg", alt: "CAD Lab 1", captionTitle: "", captionText: "" },
    { src: "/cad/sctlab.jpg", alt: "SCT Lab", captionTitle: "", captionText: "" }
  ]
}

const gis ={
  title:"GIS Lab",
  description:"10 Computers with Leading GIS Software like Arc GIS (30 users), Map Info and Quantum GIS, Image Processing software like ERDAS/ENVI, Total Station, Differential GPS, and handheld GPS navigators.  ",
  images:[
    { src: "/cad/GIS_Lab-1.jpg", alt: "CAD Lab 1", captionTitle: "", captionText: "" },
    { src: "/cad/GIS_Lab-2.jpg", alt: "SCT Lab", captionTitle: "", captionText: "" }
  ]
}


const materialLab ={
  title:"Material Testing Lab",
  description:"Computerized Automatic Servo Controlled Universal Testing Machine (100 T) (6 Pillar Model) Computerized Automatic Digital Compression Testing Machine (100 T) for testing and other equipment to test concrete, sand, and cement",
  images:[
    { src: "/cad/cadlab1.jpg", alt: "CAD Lab 1", captionTitle: "", captionText: "" },
    { src: "/cad/ConcreteLab1.jpg", alt: "SCT Lab", captionTitle: "", captionText: "" },
    {src: "/cad/ConcreteLab2.jpg", alt: "SCT Lab", captionTitle: "", captionText: "" },
    {src: "/cad/ConcreteLab3.jpg", alt: "SCT Lab", captionTitle: "", captionText: "" }
  ]
}

const sel ={
  title:"Structural Engineering Lab",
  description:"Computerized 100 Ton Loading frame (Servo Controlled Model fully automatic) with accessories to test flexural Strength (Single and two points loading) of Slabs, Beams, and Columns.",
  images:[
    { src: "/cad/civil_Seminar_Hall.jpg", alt: "CAD Lab 1", captionTitle: "", captionText: "" },
    { src: "/cad/struct_Lab.jpg", alt: "SCT Lab", captionTitle: "", captionText: "" }
  ]
}

const geol={
  title:"Geotechnical Engineering Lab",
  description:"Laboratory facilities to carryout typical experiments to test on Soil",
  images:[
    // { src: "/cad/civil_Seminar_Hall.jpg", alt: "CAD Lab 1", captionTitle: "", captionText: "" },
  ]
}

const fac=[
{
  name:'Dr.E.S.M.Suresh,',
  pos:'M.E.,Ph.D.,',
  des:'Professor'

},
{
  name:'Dr.R.Santhakumar,',
  pos:"B.E.,M.E.,Ph.D.,",
  des:'Professor and Head'
},
{
  name:"Dr.Janardhanan,",
  pos:'M.E.,Ph.D(USA),',
  des:'Professor'
},
{
  name:"Dr.K.S.A.Dinesh Kumar,",
  pos:'M.E.,Ph.D,',
  des:'Professor'
},
{
  name:"Dr.Vinod Kumar Adigopula,,",
  pos:'M.Tech.,Ph.D,',
  des:'Assistant Professor'
}
]


const materialDev = [
  [{title:"Quality Assurance in Engineering Education"},
  {title:"Modeling & Animation using 3D Studio Max"}],
  [{title:"Construction Materials & Techniques"},
  {title:"Structural Analysis"}],
  [{title:"Engineering Drawing using AutoCAD"},
  {title:"Geographical Information Systems"}],
  [{title:"Computer Applications in Analysis and Design of Structures"},
  {title:"Instructional Objectives"}],
  [{title:"Limit State Design of Concrete structural Elements"}],
  [{title:"Computer Applications for Project Management"}],
  [{title:"Modern Surveying (Total Station and GPS)"},
  {title:"Repairs & Renovations of Structures"}],
  [{title:"Evaluation of Students"},
  {title:"Structural Steel Design using IS 800 2007"}]
];
const programs = [
  [
    { title: 'Geographical Information System and its Applications', width: 6 },
    { title: 'Computer Applications in Project Management', width: 4 }
  ],
  [
    { title: 'Modern Surveying using Total Station and GPS', width: 4 },
    { title: 'Disaster Management', width: 3 }
  ],
  [
    { title: 'Teaching Engineering Mechanics', width: 4 },
    { title: 'Free and Open Source Software in Civil Engineering', width: 6 }
  ],
  [
    { title: 'Trends in Urban Planning and SMART Cities Development', width: 6 },
    { title: 'Civil Engineering Drawing using AutoCAD', width: 4 }
  ],
  [
    { title: 'Construction Techniques and Management', width: 5 },
    { title: 'Computer Applications in Structural Engineering', width: 5 }
  ],
  [
    { title: 'Design of Steel Structures', width: 4 },
    { title: 'Geotechnical Engineering', width: 3 }
  ],
  [
    { title: 'Earthquake Resistant Structures', width: 4 },
    { title: 'Strategic Planning and Institutional Development', width: 6 }
  ],
  [
    { title: 'Design of Bridges & Irrigation Structures', width: 6 }
  ],
  [
    { title: 'Design of RCC Structures', width: 4 },
    { title: 'Outcome Based Education and Accreditation', width: 6 }
  ]
];

const graduate={
  title:"Graduate Programme (M.E/ M.Tech)",
  content : [
    'M.E (Infrastructure Engineering and Management)',
    'Infrastructure is a basic system that a country or an organization uses in order to work efficiently. The program lays emphasis on Construction/Infrastructure engineering in terms of designing, planning and environmental management of large buildings, townships, roads and bridges, transportation engineering and Infrastructure Projects. The Employment opportunities include Real Estate, Private and Public Sector Undertaking, Transportation Centres, Consultancy Firms, Industrial Plants and Housing & Urban Development Authorities. More than all the above opportunities NITTTR will provide an excellent Job opportunity to serve as a great teacher in Engineering and Polytechnic Colleges to the successful students.'
  ],
  syllabusLink :'/graduate/syllabus.pdf',
  pdfSrc:'/graduate/syllabus.pdf'

  
};



  return (
    <div className="flex flex-row md:flex-row p-10">
      <div className="tab flex flex-col w-full md:w-1/4 border-r border-gray-300">
        <button
          className={`tablinks ${activeTab === 'vision' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'vision')}
        >
          Vision &amp; Mission
        </button>
        <button
          className={`tablinks ${activeTab === 'core' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'core')}
        >
          Core Values
        </button>
        <button
          className={`tablinks ${activeTab === 'short' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'short')}
        >
          Domain of Short Term Programmes
        </button>
        <button
          className={`tablinks ${activeTab === 'long' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'long')}
        >
          Post Graduate Programme (M.E/ M.Tech)
        </button>
        <button
          className={`tablinks ${activeTab === 'research' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'research')}
        >
          Research Programme
        </button>
        <button
          className={`tablinks ${activeTab === 'training-program' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'training-program')}
        >
          International Training Program
        </button>
        <button
          className={`tablinks ${activeTab === 'curricula' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'curricula')}
        >
          Curricula Development
        </button>
        <button
          className={`tablinks ${activeTab === 'instructional-material' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'instructional-material')}
        >
          Instructional Materials Development
        </button>
        <button
          className={`tablinks ${activeTab === 'cad-lab' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'cad-lab')}
        >
          CAD & Project Management Lab
        </button>
        <button
          className={`tablinks ${activeTab === 'gis-lab' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'gis-lab')}
        >
          GIS and Modern Surveying Lab
        </button>
        <button
          className={`tablinks ${activeTab === 'mtc-lab' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'mtc-lab')}
        >
          Material Testing and Concrete Lab
        </button>
        <button
          className={`tablinks ${activeTab === 'structural-lab' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'structural-lab')}
        >
          Structural Engineering Lab
        </button>
        <button
          className={`tablinks ${activeTab === 'geotech-lab' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'geotech-lab')}
        >
          Geotechnical Engineering Lab
        </button>
        <button
          className={`tablinks ${activeTab === 'faculty' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'faculty')}
        >
          Faculty
        </button>
      </div>

      <div className="tabcontent flex-1 p-6">
        {activeTab === 'vision' && <div className="animate-slideUp"><VisionComponent vision={visionCivil} mission={missionCivil}/></div>}
        {activeTab === 'core' && <div className="animate-slideUp"><Core title="Core Values" imagePath="/images/core_civil.png"/> </div>}
        {activeTab === 'short' && <div className="animate-slideUp"><Domain title="Domain of Short Term Programme" programs={programs} /></div>}
        {activeTab === 'long' && <div className="animate-slideUp"><GraduateProgram
        title={graduate.title}
        content={graduate.content}
        syllabusLink={graduate.syllabusLink}
        pdfSrc={graduate.pdfSrc}
        />
        </div>}
        {activeTab === 'research' && <div className="animate-slideUp"><ResearchProgram title="Research Programme" researchItems={researchItems} /></div>}
        {activeTab === 'training-program' && <div className="animate-slideUp"> <Training title="International Training Programme" trainingItems={trainingItems} /></div>}
        {activeTab === 'curricula' && <div className="animate-slideUp"><Curriculum title="Curricula Developed" curriculaItems={curriculaItems} /></div>}
        {activeTab === 'instructional-material' && <div className="animate-slideUp"><Domain title="Instructions and Material Development" programs={materialDev} /></div>}
        {activeTab === 'cad-lab' && <div className="animate-slideUp"><CadLab title={cad.title} description={cad.description} images={cad.images} /></div>}
        {activeTab === 'gis-lab' && <div className="animate-slideUp"><CadLab title={gis.title} description={gis.description} images={gis.images} /></div>}
        {activeTab === 'mtc-lab' && <div className="animate-slideUp"><CadLab title={materialLab.title} description={materialLab.description} images={materialLab.images} /></div>}
        {activeTab === 'structural-lab' && <div className="animate-slideUp"><CadLab title={sel.title} description={sel.description} images={sel.images} /></div>}
        {activeTab === 'geotech-lab' && <div className="animate-slideUp"><CadLab title={geol.title} description={geol.description} images={geol.images} /></div>}
        {activeTab === 'faculty' && <div className="animate-slideUp"><Faculty faculty={fac}/></div>}
      </div>
    </div>
  );
};

export default TabComponent;
