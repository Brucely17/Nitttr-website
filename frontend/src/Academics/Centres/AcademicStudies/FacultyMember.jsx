import React from 'react';

const FacultyMember = ({
  id,
  activeTab,
  handleTabClick,
  name,
  title,
  position,
  imgSrc,
  contact,
  specializations,
  qualifications,
  experience,
  profileLink,
}) => {
  return (
    <div className={`animated fadeInRight ${activeTab === id ? '' : 'hidden'}`}>
      <h6
        className="faculty_acc text-black cursor-pointer"
        onClick={() => handleTabClick(id)}
      >
        <strong>
          {title} - {name}, <small><strong>&nbsp;<b>{position}</b></strong></small>
        </strong>
      </h6>
      {imgSrc && (
        <div className="row">
          <div className="col-md-2">
            <div className="person_img">
              <img src={imgSrc} alt={name} />
            </div>
          </div>
          <div className="col-md-10">
            {contact && (
              <>
                <h4 className='text-blue-700 text-xl'>Contact</h4>
                <table>
                  <tbody>
                    <tr>
                      <td><i className="material-icons text-black " style={{ color: '#5da039' }}>call</i></td>
                      <td>
                        <div className='text-black'>&nbsp;&nbsp;&nbsp; {contact.phone1}</div>
                        <div className='text-black'>&nbsp;&nbsp;&nbsp; {contact.phone2}</div>
                      </td>
                    </tr>
                    <tr>
                      <td><i className="material-icons text-black " style={{ color: '#e05915' }}>email</i></td>
                      <td>
                        <div className='text-black '>&nbsp;&nbsp;&nbsp; {contact.email1}</div>
                        <div className='text-black '>&nbsp;&nbsp;&nbsp; {contact.email2}</div>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="./images/vidwanimage.JPG" height="40" width="15" alt="Vidwan" /></td>
                      <td>
                        <div style={{ verticalAlign: 'center' }}>&nbsp;&nbsp;&nbsp;
                          <a href={contact.vidwanLink} target="_blank" rel="noopener noreferrer" className='text-black '>Vidwan ID Link</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}

            {specializations && (
              <>
                <h4 className='text-blue-700 text-xl'>Specialization Area</h4>
                <table>
                  <tbody>
                    {specializations.map((specialization, index) => (
                      <tr key={index}>
                        <td><i className="fa fa-hand-o-right text-black "></i>&nbsp;&nbsp;&nbsp;</td>
                        <td><div className="justify text-black ">{specialization}</div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {qualifications && (
              <>
                <h4 className='text-blue-700 text-xl'>QUALIFICATION</h4>
                <div className="table-responsive">
                  <table className="w-full border border-gray-300">
                    <thead>
                      <tr>
                        <th className='text-blue-400'>Degree</th>
                        <th  className='text-blue-400'>Institution/University</th>
                        <th  className='text-blue-400'>Specialization</th>
                      </tr>
                    </thead>
                    <tbody>
                      {qualifications.map((qual, index) => (
                        <tr key={index}>
                          <td className="p-2 border text-black border-gray-300">{qual.degree}</td>
                          <td className="p-2 border text-black border-gray-300">{qual.institution}</td>
                          <td className="p-2 border text-black border-gray-300">{qual.specialization}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {experience && (
              <>
                <h4 className='text-blue-700 text-xl'><strong className="min_head">PROFESSIONAL EXPERIENCE</strong></h4>
                <table>
                  <tbody>
                    {experience.map((exp, index) => (
                      <tr key={index}>
                        <td><i className="fa fa-hand-o-right text-black"></i>&nbsp;&nbsp;&nbsp;</td>
                        <td><div className="justify text-black">{exp}</div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {profileLink && (
              <ul className="polytechnic_button">
                <li>
                  <a className="feed_btn feed_btnnew text-black" href={profileLink} target="_blank" rel="noopener noreferrer">
                    <em>&nbsp;&nbsp;Click Here : Download Profile</em>
                  </a>
                </li>
              </ul>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyMember;
