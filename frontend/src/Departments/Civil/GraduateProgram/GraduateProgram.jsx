import React from 'react';
// import './Grad.css'; // Import the CSS file for custom styles

const GraduateProgram= ({ title, content, syllabusLink, pdfSrc }) => {
  return (
    <div id="long" className="tabcontent">
      <div className="mx-auto px-4 py-6">
        <div className="row">
          <div className="col-md-12">
            <h2 className=" text-blue-700  font-bold text-xl">{title}</h2>

              <table className="w-full mt-6">
                {content.map((item, index) => (
                  <tr key={index}>
                    <td className="pr-3 text-black">
                      <i className="fa fa-hand-o-right icon-bullet"></i>
                    </td>
                    <td>
                      <p className="justify text-black font-light">
                        <em>{item}</em>
                      </p>
                    </td>
                  </tr>
                ))}
              </table>
              <br />
              <br />
              <center>
                <a
                  className="feed_btn feed_btnnew text-blue-700 underline"
                  href={syllabusLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;&nbsp;&nbsp;Click Here: Download Curriculum and Syllabus
                </a>
                <br />
              </center>
              <br />
              <iframe
                src={pdfSrc}
                width="100%"
                height="700px"
                title="Graduate Program PDF"
              ></iframe>
              <br />
              <br />

          </div>
        </div>
      </div>
    </div>
  );
};

export default GraduateProgram;
