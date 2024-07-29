import React from 'react';

// Define academic details
const AcademicDetails = {
  chairman: {
    name: 'Prof. Dr. Usha Natesan',
    position: 'Director, NITTTR, Chennai',
    role: 'CHAIRMAN'
  },
  member1: {
    name: 'Dr. A Paventhan',
    position: 'Director (R&D) ERNET India',
    role: 'MEMBER'
  },
  member2: {
    name: 'Dr. A. Ayyakkannu',
    position: 'Director & CEO (Retd) BOAT - SR Chennai',
    role: 'MEMBER'
  },
  member3: {
    name: 'Dr. C. R. Nagendra Rao',
    position: 'Professor and Head, Extension Centre Vijayawada A.P',
    role: 'MEMBER'
  },
  member4: {
    name: 'Dr. S. Renukadevi',
    position: 'Professor & Head, Department of Education',
    role: 'MEMBER'
  },
  member5: {
    name: 'Dr. G. Kulanthaivel',
    position: 'Professor and Head, Centre for International Affairs (CIA)',
    role: 'MEMBER'
  },
  member6: {
    name: 'Dr. R. Santhakumar',
    position: 'Professor & Head, Department of Civil Engineering',
    role: 'MEMBER'
  },
  member7: {
    name: 'Dr. P. Malliga',
    position: 'Professor & Head, Dept of Educational Media and Technology',
    role: 'MEMBER'
  },
  member8: {
    name: 'Dr. Umasankar Sahu',
    position: 'Professor & Head of the Department, Extension Centre Hyderabad, Telangana',
    role: 'MEMBER'
  },
  member9: {
    name: 'Er. V. Sivakumar',
    position: 'Associate Professor & Head in-Charge Extension Centre Bengaluru, Karnataka',
    role: 'MEMBER'
  },
  member10: {
    name: 'Dr. G. Janardhanan',
    position: 'Professor & Head, Centre for Academic Studies and Research (CASR)',
    role: 'MEMBER'
  },
  memberSecretary: {
    name: 'Dr. G. A. Rathy',
    position: 'Professor and Head, Dept. of Electrical and Electronics Engineering',
    role: 'MEMBER SECRETARY'
  },
  member11: {
    name: 'Dr. V. Shanmuganeethi',
    position: 'Professor & Head, Dept. of Computer Science & Engineering',
    role: 'MEMBER'
  },
  member12: {
    name: 'Dr. M. Senthilkumar',
    position: 'Professor & Head, Dept. of Curriculum & Development',
    role: 'MEMBER'
  },
  member13: {
    name: 'Dr. K. S. Giridharan',
    position: 'Professor and Head, Dept. of Rural Development',
    role: 'MEMBER'
  },
  member14: {
    name: 'Dr. P. Sivasankar',
    position: 'Professor & Head, Dept. of Electronics and Communication Engineering',
    role: 'MEMBER'
  },
  member15: {
    name: 'Dr. S. Somasundaram',
    position: 'Professor & Head, Dept. of Mechanical Engineering',
    role: 'MEMBER'
  }
};

// Define the Card component
const Card = ({ name, position, role }) => {
  return (
    <div className=' p-4 border border-gray-300 text-blue-400 rounded-md'>
      <div className='flex gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>
        <p className='text-xl font-semibold mb-2'>{name}</p>
      </div>
      <p className='text-lg text-black mb-2'>{position}</p>
      <p className='text-md italic mb-2'>{role}</p>
    </div>
  );
};

// Define the AcademicCouncil component
const AcademicCouncil = () => {
  return (
    <div className='text-black'>
      <h1 className='text-blue-400 text-2xl font-bold text-center p-4'>
        ACADEMIC COUNCIL
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-32 gap-10 pb-10 pt-15'>
        {Object.values(AcademicDetails).map((details, index) => (
          <Card
            key={index}
            name={details.name}
            position={details.position}
            role={details.role}
          />
        ))}
      </div>
    </div>
  );
};

export default AcademicCouncil;
