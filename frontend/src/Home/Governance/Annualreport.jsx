import React from 'react';

const Annualreport = () => {

  const academicReports = {
    1: {
      year: "2011-12",
      reports: [
        { description: "Annual Report - English Version", pdf: "2011-12-English.pdf" },
        { description: "Annual Report - Hindi Version", pdf: "2011-12-Hindi.pdf" }
      ]
    },
    2: {
      year: "2012-13",
      reports: [
        { description: "Annual Report - English Version", pdf: "2012-13-English.pdf" },
        { description: "Annual Report - Hindi Version", pdf: "2012-13-Hindi.pdf" }
      ]
    },
    3: {
      year: "2013-14",
      reports: [
        { description: "Annual Report - English Version", pdf: "2013-14-English.pdf" },
        { description: "Annual Report - Hindi Version", pdf: "2013-14-Hindi.pdf" }
      ]
    },
    4: {
      year: "2014-15",
      reports: [
        { description: "Annual Report - English Version", pdf: "2014-15-English.pdf" },
        { description: "Annual Report - Hindi Version", pdf: "2014-15-Hindi.pdf" }
      ]
    },
    5: {
      year: "2015-16",
      reports: [
        { description: "Annual Report - English Version", pdf: "2015-16-English.pdf" },
        { description: "Annual Report - Hindi Version", pdf: "2015-16-Hindi.pdf" }
      ]
    },
    6: {
      year: "2016-17",
      reports: [
        { description: "Annual Report - English Version", pdf: "2016-17-English.pdf" },
        { description: "Annual Report - Hindi Version", pdf: "2016-17-Hindi.pdf" }
      ]
    },
    7: {
      year: "2017-18",
      reports: [
        { description: "Annual Report - English Version", pdf: "2017-18-English.pdf" },
        { description: "Annual Report - Hindi Version", pdf: "2017-18-Hindi.pdf" }
      ]
    },
    8: {
      year: "2018-19",
      reports: [
        { description: "Annual Report - English Version", pdf: "2018-19-English.pdf" },
        { description: "Annual Report - Hindi Version", pdf: "2018-19-Hindi.pdf" }
      ]
    },
    9: {
      year: "2019-20",
      reports: [
        { description: "Annual Report - English Version", pdf: "2019-20-English.pdf" },
        { description: "Annual Report - Hindi Version", pdf: "2019-20-Hindi.pdf" }
      ]
    },
    10: {
      year: "2020-21",
      reports: [
        { description: "Annual Report - English Version", pdf: "2020-21-English.pdf" },
        { description: "Annual Report - Hindi Version", pdf: "2020-21-Hindi.pdf" }
      ]
    },
    11: {
      year: "2021-22",
      reports: [
        { description: "Annual Report - English Version", pdf: "2021-22-English.pdf" },
        { description: "Annual Report - Hindi Version", pdf: "2021-22-Hindi.pdf" }
      ]
    },
    12: {
      year: "2022-23",
      reports: [
        { description: "Annual Report - English Version", pdf: "2022-23-English.pdf" },
        { description: "Annual Report - Hindi Version", pdf: "2022-23-Hindi.pdf" }
      ]
    }
  };

  return (
    <div className='text-black p-8'>
      <h1 className='text-center text-blue-600 text-2xl font-bold underline mb-6'>
        Academic Reports
      </h1>
      <table className='w-full border-collapse border border-gray-200'>
        <thead>
          <tr className='bg-gray-100 text-gray-600'>
            <th className='px-6 py-3 border-b'>SL.NO</th>
            <th className='px-6 py-3 border-b'>Academic Year</th>
            <th className='px-6 py-3 border-b'>Description</th>
            <th className='px-6 py-3 border-b'>View</th>
          </tr>
        </thead>
        <tbody>
        {Object.keys(academicReports).map(key => (
            <React.Fragment key={key}>
              {academicReports[key].reports.map((report, index) => (
                <tr key={`${key}-${index}`} className='hover:bg-gray-50'>
                  {index === 0 && (
                    <td rowSpan={academicReports[key].reports.length} className='px-6 py-4 border-b text-center border-r-2 align-middle'>
                      {key}
                    </td>
                  )}
                  <td className='px-6 py-4 border-2 text-center'>{academicReports[key].year}</td>
                  <td className='px-6 py-4 border-2 text-center'>{report.description}</td>
                  <td className='px-6 py-4 border-2 text-center'>
                    <a 
                      href={`path/to/pdf/${report.pdf}`} 
                      className='inline-block px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600'
                      download
                    >
                      PDF
                    </a>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Annualreport;
