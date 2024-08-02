import React, { useState } from 'react';
import './Centres.css'; // Make sure to include your CSS styles

const Centers = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <header className="inr_top_bar">
        <div className="">
          
        </div>
      </header>

      <div className="ml5">
        <center>
          <span className="text-wrapper">
            <span className="line line1"></span>
            <span className="letters letters-left">Centre for Academic</span>
            <span className="letters letters-right"> Studies and Research</span>
            <span className="line line2"></span>
          </span>
        </center>
      </div>

      <div className="tab">
        <div className="">
          <div className="row">
            <div className="col-md-12">
              <button className={`tablinks ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')} id="defaultOpen">Home</button>
              <button className={`tablinks ${activeTab === 'aicte-approval' ? 'active' : ''}`} onClick={() => handleTabClick('aicte-approval')}>AICTE Approval</button>
              <button className={`tablinks ${activeTab === 'faculty' ? 'active' : ''}`} onClick={() => handleTabClick('faculty')}>Faculty</button>
            </div>
          </div>
        </div>
      </div>

      <div id="home" className={`tabcontent ${activeTab === 'home' ? 'active' : ''}`}>
        <div className="">
          <div className="row">
            <div className="col-md-12">
              <div className="animated fadeInRight">
                <div id="1">
                  <h>Home</h>
                  <br /><br />
                  <table>
                    <tr>
                      <td><i className="fa fa-hand-o-right"></i></td>
                      <td>
                        <p className="justify"><em>Centre for Academic Studies and Research (CASR) established in the year 2018 is a Centre of
                          Excellence, which aims at providing high quality solutions to the problems in core Engineering and
                          Engineering Education through research, development and extension activities.</em></p>
                      </td>
                    </tr>
                    <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
                    <tr>
                      <td><i className="fa fa-hand-o-right"></i>&nbsp;&nbsp;&nbsp;</td>
                      <td>
                        <p className="justify"><em>This centre is facilitating the various Departments / courses in core engineering and engineering
                          education masters and research programmes with the objectives.</em></p>
                      </td>
                    </tr>
                    <tr><td>&nbsp;&nbsp;&nbsp;</td></tr>
                  </table>
                  <br />
                  <br /><br /><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="aicte-approval" className={`tabcontent ${activeTab === 'aicte-approval' ? 'active' : ''}`}>
        <div className="animated fadeInRight">
          <div className="">
            <div className="row">
              <div className="col-md-12">
                <h>Approval from AICTE</h>
                <br /><br />
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src="./uploads/EOA%20Report%202024-2025.pdf#toolbar=0"></iframe>
                </div>
                <br /><br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="faculty" className={`tabcontent ${activeTab === 'faculty' ? 'active' : ''}`}>
        <div className="">
          <div className="row">
            <div className="col-md-12">
              <div style={{ color: 'red' }}>
                <h>Faculty</h>
              </div>
              <br />
              <div className="animated fadeInRight">
                <h6 className="faculty_acc">
                  <strong>Dean (Academics & Research) - Dr.G.Janardhanan, M.E., Ph.D (USA),
                    <small><strong>&nbsp;<b>Professor DCEE & Head CASR</b></strong></small></strong>
                </h6>
                <div className="faculty_ctn ful_wid">
                  <p className="justify">Centre for Academic Studies and Research (CASR) established in the year 2018...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centers;
