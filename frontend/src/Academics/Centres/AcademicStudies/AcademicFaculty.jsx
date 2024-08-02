import React, { useState } from 'react';
import FacultyMember from './FacultyMember'; // Reusable component for each faculty member
import 'tailwindcss/tailwind.css';

const AcademicFaculty = () => {
  const [activeTab, setActiveTab] = useState('faculty1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div id="faculty" className="tabcontent">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-12">
            <div className="text-red-500">
              <h1 className='text-blue-700 text-5xl'>Faculty</h1>
            </div>
            <br />

            <FacultyMember
              id="faculty1"
              activeTab={activeTab}
              handleTabClick={handleTabClick}
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

            <FacultyMember
              id="faculty2"
              activeTab={activeTab}
              handleTabClick={handleTabClick}
              name="Dr.Seshu Babu Pullagara"
              title="Associate Dean (Academics)"
              position="Assistant Professor DCSE"
            />

            <FacultyMember
              id="faculty3"
              activeTab={activeTab}
              handleTabClick={handleTabClick}
              name="Dr. R.Suja Mani Malar"
              title="Associate Dean (Training)"
              position="Associate Professor DEE"
            />

            <FacultyMember
              id="faculty4"
              activeTab={activeTab}
              handleTabClick={handleTabClick}
              name="Dr. M. Anil Kumar"
              title="Associate Dean (Research)"
              position="Associate Professor CRED"
            />

            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicFaculty;
