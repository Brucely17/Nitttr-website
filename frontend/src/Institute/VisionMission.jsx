
import React from 'react';


const MainContainer = () => {
  return (
    <div className="relative bg-cover bg-center  " style={{ zIndex:'-1' }}>
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 flex justify-center items-center p-4">
        <div className="flex gap-5 text-white">
          <div className="icon">Vision</div><span>|</span>
          <div className="icon">Mission</div><span>|</span>
          <div className="icon">Core Values</div><span>|</span>
          <div className="icon">Moto</div>
        </div>
      </div>
    </div>
  );
};

// Column.js


const Column = ({ image, title, content }) => {
  return (
    <div className="w-full md:w-1/4 p-1 border border-gray-300 text-center">
      <img src={image} alt={title} className="w-20 mx-auto" />
      <h2 className="text-2xl mt-4 text-color-5">{title}</h2>
      <div className="mt-4 text-lg text-black " dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};





const VisionMission = () => {
  const columnsData = [
    {
      image: "/images/Vision.png",
      title: "Vision",
      content: "To serve as a “One-Stop Institute of Excellence” and create an indelible mark in the fields of Multidisciplinary Education, Training, Research and Innovation at the Global Level",
    },
    {
      image: "/images/Mission.png",
      title: "Mission",
      content: `
        <ul>
          <li>To address the current challenges in the field of Technical Education and fulfill the evolving needs and expectations of the changing world by renewing the principles of the Teaching Learning process.</li>
          <hr style="opacity: 0.2;">
          <li>To anchor teaching in the quality culture of the Technical Institutions and articulate pedagogical competence to satisfy the demand for “Lifelong Learning”.</li>
          <hr style="opacity: 0.2;">
          <li>To transform the traditional “One Size Fits All” Model to “Skills over Degrees” Model.</li>
        </ul>
      `,
    },
    {
      image: "/images/Core.png",
      title: "Core Values",
      content: `
        <ul>
          <li>Quality</li>
          <li>Innovation</li>
          <li>Collaboration</li>
          <li>Ethics</li>
          <li>Excellence</li>
        </ul>
      `,
    },
    {
      image: "/images/Moto.png",
      title: "Moto",
      content: "“Innovate to Educate and Educate to Innovate”",
    },
  ];

  return (
    <div>
      
      <MainContainer />
      <div className=" mx-auto flex md:flex-row mt-8 sm:flex-col flex-wrap ">
        {columnsData.map((col, index) => (
          <Column key={index} image={col.image} title={col.title} content={col.content} />
        ))}
      </div>
  
    </div>
  );
};

export default VisionMission;
