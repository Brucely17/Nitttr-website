import React from 'react';

const FlipBoxItem = ({ frontImage, backImage, header, backContent }) => {
  return (
    <div className="box-item">
      <div className="flip-box">
        <div
          className="flip-box-front text-center"
          style={{ backgroundImage: `url(${frontImage})` }}
        >
          <div className="inner color-white">
            <h3 className="flip-box-header">{header}</h3>
          </div>
        </div>
        <div
          className="flip-box-back text-center"
          style={{ backgroundImage: `url(${backImage})` }}
        >
          {<div className="inner color-white">
            {backContent}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default FlipBoxItem;
