import React from 'react';
import FlipBoxItem from './FlipBoxItem';
import './Expertise.css'; // Assuming you have the styles in FlipBox.css

const Expertise = () => {
  const flipBoxData = [
    {
      frontImage: '/images/I1.png',
      backImage: '/images/I1.png',
      header: 'Training Programme',
      backContent: (
        <div>
          <h3>Learn More</h3>
          <ul>
            <li><a href="#Short Term Programme">Short Term Programme</a></li>
            <li><a href="#Long Term Programme">Long Term Programme</a></li>
            <li><a href="#Overseas Programme">Overseas Programme</a></li>
          </ul>
        </div>
      ),
    },
    {
      frontImage: '/images/i2.png',
      backImage: '/images/i2.png',
      header: 'Curriculum Development',
      backContent: (
        <div>
          <h3>Learn More</h3>
          <ul>
            <li><a href="#Need Analysis">Need Analysis</a></li>
            <li><a href="#Curriculum Design">Curriculum Design</a></li>
            <li><a href="#Curriculum Evluation">Curriculum Evluation</a></li>
          </ul>
        </div>
      ),
    },
    {
      frontImage: '/images/i3.png',
      backImage: '/images/i3.png',
      header: 'Instruction Resource Development',
      backContent: (
        <div>
          <h3>Learn More</h3>
          <ul>
            <li><a href="#Text Material">Text Material</a></li>
            <li><a href="#Video Materail">Video Materail</a></li>
            <li><a href="#Online MOOCS">Online MOOCS</a></li>
            <li><a href="#Traning thro' LMS">Training thro' LMS</a></li>
          </ul>
        </div>
      ),
    },
    {
      frontImage: '/images/i4.png',
      backImage: '/images/i4.png',
      header: 'Research and Development',
      backContent: (
        <div>
          <h3>Learn More</h3>
          <ul>
            <li><a href="#link10">Research Projects</a></li>
            <li><a href="#link11">Research Programme</a></li>
            <li><a href="#link12">Consultancy Projects</a></li>
          </ul>
        </div>
      ),
    },
    {
      frontImage: '/images/i5.png',
      backImage: '/images/i5.png',
      header: 'Extension Service',
      backContent: (
        <div>
          <h3>Learn More</h3>
          <ul>
            <li><a href="#link13">Entreperneurship Programme</a></li>
            <li><a href="#link14">Community Development Through Polytechnic</a></li>
            <li><a href="#link15">Person With Disability Scheme</a></li>
          </ul>
        </div>
      ),
    }
  ];

  return (
    <>
      <h1 className="exph1">Expertise</h1>
      <div className="box-container">
        {flipBoxData.map((item, index) => (
          <FlipBoxItem
            key={index}
            frontImage={item.frontImage}
            backImage={item.backImage}
            header={item.header}
            backContent={item.backContent}
          />
        ))}
      </div>
    </>
  );
};

export default Expertise;
