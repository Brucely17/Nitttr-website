import React from 'react';
import './Domain.css'; 

const Domain = ({ title, programs }) => {
  return (
    <div id="short" className="tabcontent">
      <div className="animated fadeInRight">
        <div className="container mx-auto px-4 py-6">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title">{title}</h2>
              <div className="container-fluid">
                {programs.map((row, rowIndex) => (
                    
                  <div className="row mt-6" key={rowIndex}>
                    {row.map((program, colIndex) => (
                      <div
                        key={colIndex}
                        className={`col-sm-${program.width} animated ${
                          colIndex % 2 === 0 ? 'fadeInRight' : 'fadeInLeft'
                        }`}
                      >
                        <div className="well bg-lavender">
                          <em>
                            <center>{program.title}</center>
                          </em>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
