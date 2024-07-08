import React, { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import './Quicklink.css';

const Card = ({ title, imageUrl, content, links, buttonText }) => (
  <div className="card">
    <div className="card-header">
      <img src={imageUrl} alt={title} className="card-image" />
      <h2>{title}</h2>
    </div>
    <div className="card-content">
      {content}
    </div>
    <div className="card-links">
      {links.map((link, index) => (
        <div key={index} className="link-item">
          <span className="new-tag">New</span>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        </div>
      ))}
    </div>
    <div className="card-footer">
      <button>{buttonText}</button>
    </div>
  </div>
);

function QuickLinks() {
  const cardData = [
    {
      title: "SWAYAM",
      imageUrl: "/images/swayam.png",
      content: "SWAYAM Examination schedule (January 2024 Semester)",
      links: [
        { text: "Course flyer for SWAYAM", url: "#" },
        { text: "Extension of Registration Dates", url: "#" }
      ],
      buttonText: "READ MORE"
    },
    {
      title: "NITTT Exam Registration",
      imageUrl: "/images/nitttr.png",
      content: "NITTT Examination Registration Will Start Soon. Kindly visit: nittt.ac.in",
      links: [],
      buttonText: "READ MORE"
    },
    {
      title: "PDP PROGRAMME 2024 - 25",
      imageUrl: "/images/pdp.png",
      content: "Professional Development Programme 2024-25 Training calendar",
      links: [
        { text: "Professional Development Programme Schedule", url: "#" }
      ],
      buttonText: "READ MORE"
    },
    {
      title: "ADMISSION",
      imageUrl: "/images/ad.png",
      content: "Admission will start soon ",
      links: [],
      buttonText: "READ MORE"
    },
    {
      title: "CAREER",
      imageUrl: "/images/career.png",
      content: "Career forms",
      links: [],
      buttonText: "READ MORE"
    }
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  return (
    <div className="quick-links-container">
      <h2 className="quick-links-heading">Quick Links</h2>
      <div className="card-navigation">
        <MdKeyboardArrowUp className="arrow-icon" onClick={handlePrevious} />
        <div className="card-list-container">
          <Card 
            key={currentCardIndex}
            title={cardData[currentCardIndex].title}
            imageUrl={cardData[currentCardIndex].imageUrl}
            content={cardData[currentCardIndex].content}
            links={cardData[currentCardIndex].links} 
            buttonText={cardData[currentCardIndex].buttonText}
          />
        </div>
        <MdKeyboardArrowDown className="arrow-icon" onClick={handleNext} />
      </div>
    </div>
  );
}

export default QuickLinks;
