import React from 'react';
import './Staffrec.css';

const StaffRecruitment = () => {
  return (
    <div>
      <h2 className="header-text">Staff Recruitment</h2>

      <div className="table-container">
        <table className="table table-condensed table-bordered">
          <thead>
            <tr>
              <th>Post Name</th>
              <th>GROUP A/B/C</th>
              <th>Exam Pattern</th>
              <th>Corrigendum</th>
              <th>Syllabus for Phase 1</th>
              <th>Syllabus for Phase 2</th>
              <th>List of Shortlisted Candidates</th>
              <th>List of Rejected Candidates</th>
              <th>Results</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Technical Officer (Computer Programmer)</td>
              <td>Group A</td>
              <td> - </td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/Corrigendum_Tech_Officer(Comp.Pgmr).pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td> - </td>
              <td> - </td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/Shortlisted_Candidate_Tech_Off(Comp%20Progmr).pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/Rejected_Candidates_Tech_Off(Comp%20pgrmr).pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/TO(Comp.Pgmr.)-Final_Result.pdf" target="_blank" rel="noreferrer">PDF</a><img src="https://www.iiitdm.ac.in/_app/immutable/assets/new.ad5ec888.gif" alt="New Icon" className="new-icon" /></td>
            </tr>
            <tr>
              <td>Technical Officer (Editor)</td>
              <td>Group A</td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
            </tr>
            <tr>
              <td>Technical Officer (Production Assistant)</td>
              <td>Group A</td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
            </tr>
            <tr>
              <td>Section Officer Grade – I (Senior PA to Director)</td>
              <td>Group B</td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/Shortlisted_List_GroupB_PA_Dir.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/Rejected_List_GroupB_PA_Dir.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td> - </td>
            </tr>
            <tr>
              <td>Section Officer Grade - I (Accounts Officer)</td>
              <td>Group B</td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/Shortlisted_List_GroupB_SO_AO.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/Rejected_List_GroupB_SO_AO.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td> - </td>
            </tr>
            <tr>
              <td>Technical Assistant Grade - I (Junior Engineer - Civil)</td>
              <td>Group B</td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/Technical_Assistant_Grade-I(JE-Civil)-Final_Result.pdf" target="_blank" rel="noreferrer">PDF</a><img src="https://www.iiitdm.ac.in/_app/immutable/assets/new.ad5ec888.gif" alt="New Icon" className="new-icon" /></td>
            </tr>
            <tr>
              <td>Section Officer Grade - II (Admin. & Accounts)</td>
              <td>Group B</td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/Shortlisted_List_GroupB_Admin_Acct.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/Rejected_List_GroupB_SO_Admin_Acct.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td> - </td>
            </tr>
            <tr>
              <td>Technical Assistant Grade - I (Cameraman)</td>
              <td>Group B</td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
            </tr>
            <tr>
              <td>Junior Secretariat Assistant (JSA)</td>
              <td>Group C</td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/JSA_Exam_Pattern.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td> - </td>
              <td><a href="https://www.nitttrc.ac.in/groupcsyllabus/phase1_jsa.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/JSA%20Result%202023.pdf" target="_blank" rel="noreferrer">PDF</a><img src="https://www.iiitdm.ac.in/_app/immutable/assets/new.ad5ec888.gif" alt="New Icon" className="new-icon" /></td>
            </tr>
            <tr>
              <td>Senior Secretariat Assistant (Sergeant)</td>
              <td>Group C</td>
              <td> - </td>
              <td> - </td>
              <td><a href="https://www.nitttrc.ac.in/groupcsyllabus/phase1_sergeant.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td><a href="https://www.nitttrc.ac.in/groupcsyllabus/phase2_sergeant.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/SSA_Sergeant_Shortlisted.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/SSA_Sergeant_Rejected.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td> - </td>
            </tr>
            <tr>
              <td>Assistant Section Officer (Hindi Translator)</td>
              <td>Group C</td>
              <td> - </td>
              <td> - </td>
              <td><a href="https://www.nitttrc.ac.in/groupcsyllabus/phase1_aso_hindi.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td> - </td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/Shortlisted_GroupC_Hindi_ASO.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td><a href="https://www.nitttrc.ac.in/rec2023/recdoc2023/Rejected_List_GroupC_Hindi_ASO.pdf" target="_blank" rel="noreferrer">PDF</a></td>
              <td> - </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffRecruitment;
