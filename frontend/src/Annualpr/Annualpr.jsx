import React from 'react';
import './Annualpr.css'
const data = [
  {
    sNo: 1,
    name: 'Prof. Dr. Usha Natesan',
    designation: 'Director',
    years: [null, null, null, 'https://example.com/2021.pdf', 'https://example.com/2022.pdf', 'https://example.com/2023.pdf'],
  },
  {
    sNo: 2,
    name: 'Prof. Dr. C.R. Nagendra Rao',
    designation: 'Professor Extension Centre, vijayawada(ECV), A.P',
    years: ['https://example.com/2018.pdf', 'https://example.com/2019.pdf', 'https://example.com/2020.pdf', 'https://example.com/2021.pdf', 'https://example.com/2022.pdf', 'https://example.com/2023.pdf'],
  },
  {
    sNo: 3,
    name: 'Prof. Dr. E.S.M Suresh',
    designation: 'Professor & Head Dept. of Engineering Education',
    years: ['https://example.com/2018.pdf', 'https://example.com/2019.pdf', 'https://example.com/2020.pdf', 'https://example.com/2021.pdf', 'https://example.com/2022.pdf', 'https://example.com/2023.pdf'],
  },
  {
    sNo: 4,
    name: 'Prof. Dr. S.Renukadevi',
    designation: 'Professor & Head CASR',
    years: ['https://example.com/2018.pdf', 'https://example.com/2019.pdf', 'https://example.com/2020.pdf', 'https://example.com/2021.pdf', 'https://example.com/2022.pdf', 'https://example.com/2023.pdf'],
  },
  {
    sNo: 5,
    name: 'Prof. Dr. G.Kulanthaivel',
    designation: 'Professor & Head CIA',
    years: ['https://example.com/2018.pdf', 'https://example.com/2019.pdf', 'https://example.com/2020.pdf', 'https://example.com/2021.pdf', 'https://example.com/2022.pdf', 'https://example.com/2023.pdf'],
  },
  {
    sNo: 6,
    name: 'Prof. Dr. R.Santhakumar',
    designation: 'Professor & Head',
    years: ['https://example.com/2018.pdf', 'https://example.com/2019.pdf', 'https://example.com/2020.pdf', 'https://example.com/2021.pdf', 'https://example.com/2022.pdf', 'https://example.com/2023.pdf'],
  },
];

const TableComponent = () => (
  <div className="table-container">
    <div className="table-header">
      <h1>INFORMATION UNDER RIGHT TO INFORMATION ACT 2005</h1>
      <p>Audit of Proactive disclosure by Third Party<br />Objective of the right to Information Act - 2005</p>
      <button>Click Here to Download the Application</button>
    </div>
    <table className="styled-table">
      <thead>
        <tr>
          <th>S No</th>
          <th>Name</th>
          <th>Designation</th>
          <th>2018</th>
          <th>2019</th>
          <th>2020</th>
          <th>2021</th>
          <th>2022</th>
          <th>2023</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.sNo}</td>
            <td>{row.name}</td>
            <td>{row.designation}</td>
            {row.years.map((year, i) => (
              <td key={i}>{year ? <a href={year} target="_blank" rel="noopener noreferrer" className="pdf-button">PDF</a> : null}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableComponent;
