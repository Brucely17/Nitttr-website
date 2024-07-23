import React from 'react';
import './VisionComponent.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
const VisionComponent = ({ vision, mission }) => {
  return (
    <div id="vision" className="tabcontent">
      <div className="container mx-auto px-4 py-6">
        <div className="row">
          <div className="col-md-12">
            <div className="animated fadeInRight">
              <div id="1">
                <h2 className="section-title">Vision</h2>
                <table className="mb-8">
                  <tr>
                    <td><i className="fas fa-hand-point-right icon-bullet"></i></td>
                    <td>
                      <p className="text-content"><em>{vision}</em></p>
                    </td>
                  </tr>
                </table>

                <h2 className="section-title">Mission</h2>
                <table>
                  {mission.map((missionItem, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td><i className="fas fa-hand-point-right icon-bullet"></i></td>
                        <td>
                          <p className="text-content"><em>{missionItem}</em></p>
                        </td>
                      </tr>
                      <tr><td className="py-2"></td></tr>
                    </React.Fragment>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionComponent;
