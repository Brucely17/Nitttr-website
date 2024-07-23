import React from 'react';
import './Faculty.css'; 

const CardComponent = ({ imgSrc, name, position, institute, email, phone, vidwanLink }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-blue-100 rounded-lg shadow-lg overflow-hidden mb-5 max-w-2xl mx-auto transform transition-transform hover:scale-105 relative">
      <div className="relative m-5">
        <img src={imgSrc} alt={name} className="w-32 h-32 object-fill rounded-full border-6 border-gray-400 glow-effect" />
      </div>
      <div className="flex flex-col justify-center p-4 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-lg font-semibold text-gray-700">{position}</p>
        <p className="text-sm text-gray-600">{institute}</p>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            <i className="fa fa-envelope" aria-hidden="true"></i> {email}
          </p>
          <p className="text-sm text-gray-500">
            <i className="fa fa-phone" aria-hidden="true"></i> {phone}
          </p>
          <a href={vidwanLink} className="text-sm text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-lightbulb-o" aria-hidden="true" style={{ fontSize: '16px' }}></i> Vidwan-Link
          </a>
        </div>
        <div className="mt-4 text-right">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            View more...
          </a>
        </div>
      </div>
    </div>
  );
};

const Feducation = () => {
  const facultyData = [
    {
      imgSrc: '/images/Sasirekha.jpeg',
      name: 'Dr. S. Sasirekha',
      position: 'Associate Professor',
      institute: "Dept. of Computer Science and Engineering",
      email: 'sasirekha@nitttrc.edu.in',
      phone: '044-2254 5505',
      vidwanLink: 'https://vidwan.inflibnet.ac.in/profile/140775'
    },
    {
        imgSrc: '/images/Sasirekha.jpeg',
        name: 'Dr. S. Sasirekha',
        position: 'Associate Professor',
        institute: "Dept. of Computer Science and Engineering",
        email: 'sasirekha@nitttrc.edu.in',
        phone: '044-2254 5505',
        vidwanLink: 'https://vidwan.inflibnet.ac.in/profile/140775'
      },
      
      {
        imgSrc: '/images/Sasirekha.jpeg',
        name: 'Dr. S. Sasirekha',
        position: 'Associate Professor',
        institute: "Dept. of Computer Science and Engineering",
        email: 'sasirekha@nitttrc.edu.in',
        phone: '044-2254 5505',
        vidwanLink: 'https://vidwan.inflibnet.ac.in/profile/140775'
      },
      
      {
        imgSrc: '/images/Sasirekha.jpeg',
        name: 'Dr. S. Sasirekha',
        position: 'Associate Professor',
        institute: "Dept. of Computer Science and Engineering",
        email: 'sasirekha@nitttrc.edu.in',
        phone: '044-2254 5505',
        vidwanLink: 'https://vidwan.inflibnet.ac.in/profile/140775'
      },
      
      {
        imgSrc: '/images/Sasirekha.jpeg',
        name: 'Dr. S. Sasirekha',
        position: 'Associate Professor',
        institute: "Dept. of Computer Science and Engineering",
        email: 'sasirekha@nitttrc.edu.in',
        phone: '044-2254 5505',
        vidwanLink: 'https://vidwan.inflibnet.ac.in/profile/140775'
      },
      
      {
        imgSrc: '/images/Sasirekha.jpeg',
        name: 'Dr. S. Sasirekha',
        position: 'Associate Professor',
        institute: "Dept. of Computer Science and Engineering",
        email: 'sasirekha@nitttrc.edu.in',
        phone: '044-2254 5505',
        vidwanLink: 'https://vidwan.inflibnet.ac.in/profile/140775'
      },
      
      {
        imgSrc: '/images/Sasirekha.jpeg',
        name: 'Dr. S. Sasirekha',
        position: 'Associate Professor',
        institute: "Dept. of Computer Science and Engineering",
        email: 'sasirekha@nitttrc.edu.in',
        phone: '044-2254 5505',
        vidwanLink: 'https://vidwan.inflibnet.ac.in/profile/140775'
      },
      

      {
      imgSrc: '/images/Sasirekha.jpeg',
      name: 'Dr. S. Sasirekha',
      position: 'Associate Professor',
      institute: "Dept. of Computer Science and Engineering",
      email: 'sasirekha@nitttrc.edu.in',
      phone: '044-2254 5505',
      vidwanLink: 'https://vidwan.inflibnet.ac.in/profile/140775'
    },
    
    {
      imgSrc: '/images/Sasirekha.jpeg',
      name: 'Dr. S. Sasirekha',
      position: 'Associate Professor',
      institute: "Dept. of Computer Science and Engineering",
      email: 'sasirekha@nitttrc.edu.in',
      phone: '044-2254 5505',
      vidwanLink: 'https://vidwan.inflibnet.ac.in/profile/140775'
    },
    
    // Add more faculty data here
  ];

  return (
    <div className="p-5 relative" style={{ zIndex: "-10" }}>
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10 animate-fade-in" style={{ zIndex: "-10" }}>Faculty of Engineering and Technology</h1>
      <div className="card-container" style={{ zIndex: "-10" }}>
        {facultyData.map((faculty, index) => (
          <div key={index} className="card-wrapper">
            <CardComponent {...faculty} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feducation;
