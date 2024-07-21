import React, { useState } from 'react';
import './TabComponent.css'; // Import the CSS file for custom styles
import VisionComponent from '../VisionComponent/VisionComponent.jsx';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const handleTabClick = (event, tabName) => {
    setActiveTab(tabName);
  };

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

  return (
    <div className="flex flex-col md:flex-row p-10">
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
        {activeTab === 'core' && <div className="animate-slideUp">Core Values Content</div>}
        {activeTab === 'short' && <div className="animate-slideUp">Domain of Short Term Programmes Content</div>}
        {activeTab === 'long' && <div className="animate-slideUp">Post Graduate Programme (M.E/ M.Tech) Content</div>}
        {activeTab === 'research' && <div className="animate-slideUp">Research Programme Content</div>}
        {activeTab === 'training-program' && <div className="animate-slideUp">International Training Program Content</div>}
        {activeTab === 'curricula' && <div className="animate-slideUp">Curricula Development Content</div>}
        {activeTab === 'instructional-material' && <div className="animate-slideUp">Instructional Materials Development Content</div>}
        {activeTab === 'cad-lab' && <div className="animate-slideUp">CAD & Project Management Lab Content</div>}
        {activeTab === 'gis-lab' && <div className="animate-slideUp">GIS and Modern Surveying Lab Content</div>}
        {activeTab === 'mtc-lab' && <div className="animate-slideUp">Material Testing and Concrete Lab Content</div>}
        {activeTab === 'structural-lab' && <div className="animate-slideUp">Structural Engineering Lab Content</div>}
        {activeTab === 'geotech-lab' && <div className="animate-slideUp">Geotechnical Engineering Lab Content</div>}
        {activeTab === 'faculty' && <div className="animate-slideUp">Faculty Content</div>}
      </div>
    </div>
  );
};

export default TabComponent;
