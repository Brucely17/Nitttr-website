import React, { useState } from 'react';

const Card = ({ imgPath = '', name, role, phone, email, altphone = '' }) => (
  <div className='flex items-start border border-gray-400 p-4 mb-4 rounded-lg shadow-md'>
    {imgPath && (
      <img src={imgPath} alt={name} className='w-40 h-36 object-cover rounded-lg mr-4' />
    )}
    <div className='flex flex-col'>
      <h2 className='text-2xl font-bold'>{name}</h2>
      <p className='text-xl'>{role}</p>
      {phone && <p className='text-md'>Phone: {phone}</p>}
      {email && <p className='text-md'>Email: {email}</p>}
      {altphone && <p className='text-md'>Alternate Phone: {altphone}</p>}
    </div>
  </div>
);

const Administration = () => {
  const [listIndex, setListIndex] = useState(0);

  const listItems = [
    "DIRECTORS OFFICE",
    "Office of Admin & Accounts",
    "Chief Vigilance Officer",
    "Nodal Officer - Public Grievance",
    "Ombudsperson",
    "Guest House & Hotel",
    "Estate Officer",
    "Grievance Redressal Committee - Internal",
    "Members of (All HoDs/HoCs)"
  ];

  const personnel = [
    { name: 'Dr. R. Santhakumar', role: 'Professor & Head, Dept. of Civil Engineering' },
    { name: 'Dr. V. Shanmuganeethi', role: 'Associate Professor & Head, Dept. of Computer Science Engineering' },
    { name: 'Dr. M. Senthil Kumar', role: 'Professor & Head, Dept. of Curriculum Development' },
    { name: 'Dr. G. A. Rathy', role: 'Professor & Head, Dept. of Electrical & Electronics Engineering' },
    { name: 'Dr. P. Sivasankar', role: 'Professor & Head, Dept. of Electronics & Communication Engineering' },
    { name: 'Dr. P. Malliga', role: 'Professor & Head, Dept. of Media & Technology' },
    { name: 'Dr. S. Somasundaram', role: 'Professor & Head, Dept. of Mechanical Engineering' },
    { name: 'Dr. K. S. Giridharan', role: 'Professor & Head, Dept. of Rural & Entrepreneurship Engineering' },
    { name: 'Dr. G. Janardhanan', role: 'Professor & Head, Centre for Academic Studies and Research' },
    { name: 'Dr. G. Kulanthaivel', role: 'Professor & Head, Centre for International Affairs' },
    { name: 'Mr. G. Gunabalan', role: 'Student Nominee: ME 1st Year Student' }
  ];

  const cardDetails = {
    'DIRECTORSOFFICE': [
      {
        imgPath : '/images/dir_un5.jpg',
        name : 'Prof. Dr. Usha Natesan',
        role : 'Director',
        phone : '044-2254 5405',
        email : 'director@nitttrc.ac.in',
        altphone : '044-2254 1126'
      },
      {
        imgPath : '/images/dir_un5.jpg',
        name : 'Ms. S. Indumathi',
        role : 'PA to Director',
        phone : '044-2254 5406',
        email : 'directoroffice@nitttrc.ac.in',
      }
    ],
    'OfficeofAdmin&Accounts': [
      {
        imgPath : '/images/officeofadmins.jpg',
        name : 'M. Ramesh, B.Sc., M.A. (HRM)',
        role : 'Senior Administrative Officer',
        phone : '044-2254 5435',
        email : 'nitttrcadmin@nitttrc.ac.in'
      }
    ],
    'ChiefVigilanceOfficer': [
      {
        imgPath : '/images/chief.jpg',
        name : 'Dr.R. Santhakumar, B.E., M.E., Ph.D.',
        role : 'Professor and Head Department of Civil and Environmental Engineering',
        phone : '044-2254 5426',
        email : 'rsk65@nitttrc.ac.in',
      }
    ],
    'NodalOfficer-PublicGrievance': [
      {
        imgPath : '/images/Nodalofficer.jpg',
        name : 'M. Ramesh, B.Sc., M.A. (HRM)',
        role : 'Senior Administrative Officer',
        phone : '044-2254 5435',
        email : 'nitttrcadmin@nitttrc.ac.in'
      }
    ],
    'Ombudsperson': [
      {
        imgPath : '',
        name : 'Dr. L. Karunamoorthy',
        role : 'Professor, Former Professor, Department of Mechanical Engineering, Former Registrar, Anna University'
      }
    ],
    'GuestHouse&Hotel': [
      {
        imgPath : '',
        name : 'Dr. S. Rajasekar',
        role : 'Warden',
        phone : '044-2254 5446',
        email : 'srajasekar@nitttrc.ac.in',
      }
    ],
    'EstateOfficer': [
      {
        imgPath : '/images/estate.jpg',
        name : 'Dr. Vinod Kumar Adigopula',
        role : 'Assistant Professor - Department of Civil and Environmental Engineering',
        phone : '044-2254 5486',
        email: 'vinod@nitttrc.edu.in'
      }
    ],
    'GrievanceRedressalCommittee-Internal': [
      {
        imgPath : '/images/redressal.jpg',
        name : 'Dr. S. Renukadevi',
        role : 'Chairman of the Committee - Professor & Head, Dept. of Education',
        phone : '044-2254 5464',
        email : 'bmrenuka@gmail.com',
        altphone : '98402 89459'
      }
    ]
  };

  const standardizedKey = listItems[listIndex].replace(/\s+/g, '').replace(/'/g, '');

  return (
    <div className='text-black'>
      <div>
        <h1 className='text-center text-blue-600 text-2xl font-bold underline'>
          NITTR - ADMINISTRATION
        </h1>
      </div>
      <div className='flex flex-col md:flex-row p-8 md:p-28'>
        <div className='w-full md:w-1/3 border border-gray-400'>
          <ul>
            {listItems.map((item, index) => (
              <li 
                key={index} 
                onClick={() => setListIndex(index)} 
                className='cursor-pointer p-4 border border-gray-300 hover:bg-[#2EE59D] hover:text-white duration-500 transition-transform transform hover:scale-105'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-2/3 p-4 flex flex-col border-2 border-gray-300 border-l-0'>
          <h1 className='p-5 text-2xl'>{listItems[listIndex]}</h1>
          
          {listItems[listIndex] == 'Members of (All HoDs/HoCs)' ?  
          <div className='p-4'>
            {personnel.map((person, index) => (
                <div key={index} className='p-2'>
                  <strong>{person.name}</strong>: {person.role}
                </div>
              ))}
          </div>
          : 
          <div className='p-4'>
            {cardDetails[standardizedKey]?.map((person, index) => (
              <Card 
                key={index}
                imgPath={person.imgPath}
                name={person.name}
                role={person.role}
                phone={person.phone}
                email={person.email}
                altphone={person.altphone}
              />
            ))}
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Administration;
