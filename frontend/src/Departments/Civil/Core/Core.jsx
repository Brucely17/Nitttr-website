import React from 'react';
import './Core.css'; 

const Core = ({ title, imagePath }) => {
  return (
    <div id="core" className="tabcontent">
      <div className="animated fadeInRight">
        <div className="container mx-auto px-4 py-6">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title">{title}</h2>
              <div className="row mt-16">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                  <div className="image-container">
                    <img className="img-responsive" src={imagePath} alt="Core Values" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core;
