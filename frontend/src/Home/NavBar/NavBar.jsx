
import React, { useState } from 'react';
import './NavBar.css';
import { FaCaretRight, FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';
import Announce from '../Intro/Announce';

const Dropdown = ({ title, isOpen, handleClick, children }) => {
  return (
    <li>
      <a href="#!" onClick={handleClick}  >
        <div className='flex flex-row'>{title} <FaCaretDown /></div>
      </a>
      {isOpen && <ul className="dropdown">{children}</ul>}
    </li>
  );
};

const SubDropdown = ({ title, isOpen, handleClick, children }) => {
  return (
    <li>
      <a href="#!" onClick={handleClick} className='flex flex-row'>
      <div className='flex flex-row '> {title} <FaCaretRight /></div>
      </a>
      {isOpen && <ul className="sub-dropdown">{children}</ul>}
    </li>
  );
};

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState({});
  const [clicked, setClicked] = useState(null);
  const [cindex, setCIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubDropdown({});
    setClicked(null);
  };

  const handleSubDropdownClick = (dropdownIndex, subIndex, key) => {
    setCIndex(subIndex);
    setOpenSubDropdown((prevState) => ({
      ...prevState,
      [dropdownIndex]: prevState[dropdownIndex] === subIndex ? null : subIndex,
    }));
    setClicked(clicked === subIndex ? null : subIndex);
    console.log(clicked, subIndex);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="navigation">
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <Dropdown
          title="Institute"
          isOpen={openDropdown === 1}
          handleClick={() => handleDropdownClick(1)}
        >
          <li><a href="/institute/about">About Us</a></li>
          <li><a href="/institute/vissionMission">Vision & Mission</a></li>
          <li><a href="/institute/MOA">Memorandum of Association </a></li>
          <SubDropdown
            title="Governing Bodies"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/institute/governing-bodies/BOG">BOG</a></li>
            <li><a href="/institute/governing-bodies/Finance">Finance Commitee</a></li>
            <li><a href="/institute/governing-bodies/Senate">Senate</a></li>
          </SubDropdown>
          <li><a href="/institute/chairman">Chairman and Director</a></li>
          <li><a href="/institute/directorMessage">Director Message</a></li>
          <li><a href="/institute/Annual Report">Annual Reports</a></li>
        </Dropdown>
        <Dropdown
          title="Administration"
          isOpen={openDropdown === 2}
          handleClick={() => handleDropdownClick(2)}
        >
          <li><a href="/administration/chairman">Chairman</a></li>
          <li><a href="/administration/Director">Director</a></li>
          <li><a href="/administration/Dean">Dean</a></li>
          <SubDropdown
            title="Committees & Incharge"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/administraction/Committees & Incharge/Administration account">Office of Administration & Accounts</a></li>
            <li><a href="/administration/Committees & Incharge/Vigilance">Chief Vigilance Officer</a></li>
            <li><a href="/administraction/Committees & Incharge/Nodal officer">Nodal Officer - Public Grievance</a></li>
            <li><a href="/administraction/Committees & Incharge/Estate officer">Estate Officer</a></li>
            <li><a href="/administraction/Committees & Incharge/Grievance officer">Grievance Redressal Committee</a></li>
          </SubDropdown>
          <li><a href="/administration/Estate Officer">Estate Office</a></li>
          <li><a href="/administration/Guest House">Guest House</a></li>
          <li><a href="/administration/Stores and Purchase">Stores and Purchase</a></li>
          <li><a href="/administration/Minutes of BOG Meeting">Minutes of BOG Meeting</a></li>
          <SubDropdown
            title="Accounts Details"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/rti/2024/Pan,Tan,GSTINdetails.pdf" target='_blank'>New PAN,TAN & GSTIN Details</a></li>
          </SubDropdown>
          <li><a href="/administration/chairman">Staff of Admin & Accounts</a></li>
          <SubDropdown
            title="Policies & Rules"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/administraction/Policies & Rules/Administration Rules">Administration Rules</a></li>
            <li><a href="/administraction/Policies & Rules/Account Rules">Account Rules</a></li>
            <li><a href="/administraction/Policies & Rules/Administrationform">Administration Form </a></li>
          </SubDropdown>
          <li><a href="/administration/AnnualPR">Annual Property Returns</a></li>
          <li><a href="/administration/chairman">Past Directors & Chairman</a></li>
        </Dropdown>
        <Dropdown
          title="Academics"
          isOpen={openDropdown === 3}
          handleClick={() => handleDropdownClick(3)}
        >
          <li><a href="/academics/overview">Overview</a></li>
          <li><a href="/rti/2024/EOA Report 2024-2025.pdf" target='_blank'>AICTE-EOAReport</a></li>
          <SubDropdown
            title="Centres"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Academics/Centres/AcademicStudies">Academics studies</a></li>
            <li><a href="/Academics/Centres/InternationalAffairs">International Affairs</a></li>
            <li><a href="/Academics/FacultyDepartment/FacultyofManagement">Faculty of Management</a></li>
          </SubDropdown>
          <SubDropdown
            title="Faculty & Department"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Academics/FacultyDepartment/FacultyofEngineeringandTechnology">Faculty of Engineering and Technology</a></li>
            <li><a href="/Academics/FacultyDepartment/FacultyofEducation">Faculty of Education</a></li>
            <li><a href="/Academics/FacultyDepartment/FacultyofManagement">Faculty of Management</a></li>
          </SubDropdown>
          <li><a href="/academics/PDP">Professional Development Program</a></li>
          <li><a href="/academics/ITP">International Training Prrogram</a></li>
          <SubDropdown
            title="National Coordinators"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Academics/Nationl Coordinators/SWAYAM">SWAYAM</a></li>
            <li><a href="/Academics/National Coordinators/NITTTR">NITTT</a></li>
          </SubDropdown>
          <SubDropdown
            title="OER"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Academics/OER/LMS">LMS</a></li>
          </SubDropdown>
        </Dropdown>
        <Dropdown 
        title="Governance"
        isOpen={openDropdown === 1}
        handleClick={() => handleDropdownClick(1)}
        >
          <li><a target='_blank' href='https://www.nitttrc.ac.in/MoA/MoA.html'>Memorandum of Association</a></li>
          <li><a href='ACADEMIC-COUNCIL'>Academic Council</a></li>
          <li><a href='ADMINISTRATION'>Administration</a></li>
          <li><a href='BOGMINUTES'>BOG Minutes</a></li>
          <li><a href="/Governance/ICC">Internal Complaints Committee</a></li>
        </Dropdown>
        <Dropdown
          title="Study @ NITTTR"
          isOpen={openDropdown === 1}
          handleClick={() => handleDropdownClick(1)}
        >
          <SubDropdown
            title="Salient Features"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Study @ NITTTR/Salient Features/Fractal Mode">Fractal Mode</a></li>
            <li><a href="/Study @ NITTTR/Salient Features/Online Learning">Online Learning</a></li>
          </SubDropdown>
          <SubDropdown
            title="PG Programme"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Study @ NITTTR/PG Programme/IEM">M.Tech in Infracture Engineering and Management</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/Mech">M.Tech in Mechtronics</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/VLSI">M.Tech in VLSI Design and Embedded Systems</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/Power">M.Tech in Power Electronics and Drives</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/AIML">M.Tech in Artificial Intelligence and Machine Learning</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/AR/VR">M.Tech in Agumented and Virtual Reality</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/Engineering">M.Tech in Engineering Education </a></li>
            <li><a href="/Study @ NITTTR/PG Programme/BA">M.B.A in Business Analytics</a></li>
            <li><a href="/Study @ NITTTR/PG Programme/Management">M.B.A in Management</a></li>
          </SubDropdown>
          <SubDropdown
            title="PG Diploma"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Study @ NITTTR/PG Diploma/Guidance">PG Diploma in Guidance and counselling</a></li>
            <li><a href="/Study @ NITTTR/PG Diploma/Entrepreneurship">PG Diploma in Entrepreneurship Development</a></li>
            <li><a href="/Study @ NITTTR/PG Diploma/DiplomaAI/ML">PG Diploma in AI and ML</a></li>
          </SubDropdown>
          <SubDropdown
            title="PG Certificate"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Study @ NITTTR/PG Certificate/certificate">All Certificate</a></li>
          </SubDropdown>
          <SubDropdown
            title="Integrated Teacher Education Program"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Study @ NITTTR/Integrated Teacher Education Program/BSC">B.Sc,B.Edu</a></li>
          </SubDropdown>
          <SubDropdown
            title="Research"
            isOpen={openSubDropdown[1] === 1}
            handleClick={() => handleSubDropdownClick(1, 1)}
          >
            <li><a href="/Study @ NITTTR/Research/MTech">M. Tech. (By Research)</a></li>
            <li><a href="/Study @ NITTTR/Research/eng/tech">Ph.D. Degree in Engineering/ Technology</a></li>
            <li><a href="/Study @ NITTTR/Research/engedu">Ph.D. Degree in Engineering Education (Inter Disciplinary)</a></li>
            <li><a href="/Study @ NITTTR/Research/science/hum">Ph.D. Degree in Science and Humanities</a></li>
            <li><a href="/Study @ NITTTR/Research/managementscience">Ph.D. Degree in Management Sciences</a></li>
          </SubDropdown>
        </Dropdown>
        <Dropdown
          title="Admissions"
          isOpen={openDropdown === 1}
          handleClick={() => handleDropdownClick(1)}
        >
          <li><a href="/Admission/about">Admission Policy</a></li>
          <li><a href="https://www.nitttrc.ac.in/admissions/PG%20PROGRAMME.pdf">PG Regulations</a></li>
          <li><a href="https://www.nitttrc.ac.in/admissions/PHD%20PROGRAMME.pdf">PhD Regulations</a></li>
          <li><a href="/Admission/pgcourses">Courses offered</a></li>
        </Dropdown>
        <Dropdown
          title="Facilities"
          isOpen={openDropdown === 1}
          handleClick={() => handleDropdownClick(1)}
        >
          <li><a href="/Facilities/sports">Sports</a></li>
          <li><a href="/Facilities/computercentre">Computer Center</a></li>
          <li><a href="/Facilities/resource">Resource Center</a></li>
          <li><a href="/Facilities/hostel">Hostel</a></li>
        </Dropdown>
        <Dropdown
          title="Information Corner"
          isOpen={openDropdown === 1}
          handleClick={() => handleDropdownClick(1)}
        >
          <li><a target='_blank' href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=3755167">Fee Payment</a></li>
          <li><a target='_blank' href="https://www.nitttrc.ac.in/uploads/NITTTRc-AICTE.pdf">Mandatory Disclosure</a></li>
          <li><a target='_blank' href='https://nittt.ac.in/'>NITTT</a></li>
          <li><a target='_blank' href="https://www.nitttrc.ac.in/uploads/Equal_opportunity_policy_NISER.pdf">Equal Opportunity Policy </a></li>
          <li><a href="/InformationCorner/newsletter">News Letters</a></li>
          <li><a href="/Information Corner/about">Circular</a></li>
          <li><a href="/InformationCorner/biscorner">Bis Corner</a></li>
          <li><a href="/InformationCorner/RTIACT">RTI ACT</a></li>
          <li><a href="/InformationCorner/BROCHURE">Brochure</a></li>
          <li><a href="https://email.gov.in/" target='_blank'>Webmail</a></li>
          <li><a href='/InformationCorner/JTVE'>JTVE</a></li>
          
          
        </Dropdown>
        <Dropdown
          title="Recruitments"
          isOpen={openDropdown === 1}
          handleClick={() => handleDropdownClick(1)}
        >
          
          <li><a href="/Recruitments/facylty">Faculty</a></li>
          <li><a href="/Recruitments/staff">Staff</a></li>
          <li><a href="/Recruitments/project&contract">Projects & Contract</a></li>
        </Dropdown>

        <li><a href="/announcement">Announcements </a></li>
        <li><a href="/contact">Contact us</a></li>
      </ul>
    </nav>
    
    </>
    
  );
};

export default Navigation;
