import React from 'react'
import { useState } from 'react';

const Bogminutes = () => {

  const [listIndex, setListIndex] = useState(0);

  let table;

  

  const listItems = [
    "BOARD MINUTES",
    "FINANCE COMMITTE",
    "SOCEITY",
  ];

  const boardMinutes = {
    1: {
        title: "Minutes of 31st BOG Meeting",
        date: "12th November 2014",
        pdf: "1.pdf"
    },
    2: {
        title: "Minutes of 32nd BOG Meeting",
        date: "24th August 2015",
        pdf: "2.pdf"
    },
    3: {
        title: "Minutes of 33rd BOG Meeting",
        date: "19th September 2015",
        pdf: "3.pdf"
    },
    4: {
        title: "Minutes of 34th BOG Meeting",
        date: "23rd April 2016",
        pdf: "4.pdf"
    },
    5: {
        title: "Minutes of the 37th Meeting",
        date: "22nd September 2017",
        pdf: "5.pdf"
    },
    6: {
        title: "Minutes of the 38th Meeting",
        date: "29th May 2018",
        pdf: "6.pdf"
    },
    7: {
        title: "Minutes of the 38th Meeting - Supplementary",
        date: "29th May 2018",
        pdf: "7.pdf"
    },
    8: {
        title: "Minutes of the 39th Meeting",
        date: "20th February 2019",
        pdf: "8.pdf"
    },
    9: {
        title: "Minutes of the 40th Meeting",
        date: "4th October 2019",
        pdf: "9.pdf"
    },
    10: {
        title: "Minutes of the 41st Meeting",
        date: "7th January 2020",
        pdf: "10.pdf"
    },
    11: {
        title: "Minutes of the 42nd Meeting",
        date: "18th March 2020",
        pdf: "11.pdf"
    },
    12: {
        title: "Minutes of the 43rd Meeting",
        date: "15th June 2020",
        pdf: "12.pdf"
    },
    13: {
        title: "Minutes of the 44th Meeting",
        date: "29th October 2020",
        pdf: "13.pdf"
    },
    14: {
        title: "Minutes of the 45th Meeting",
        date: "26th March 2021",
        pdf: "14.pdf"
    },
    15: {
        title: "45th Revised resolution item No.10 Board",
        date: "26th March 2021",
        pdf: "15.pdf"
    },
    16: {
        title: "Minutes of the 46th Meeting",
        date: "25th June 2021",
        pdf: "16.pdf"
    },
    17: {
        title: "Minutes of the 47th Meeting",
        date: "28th October 2021",
        pdf: "17.pdf"
    },
    18: {
        title: "Minutes of the 48th Meeting",
        date: "19th May 2022",
        pdf: "18.pdf"
    },
    19: {
        title: "Minutes of the 49th Meeting",
        date: "23rd September 2022",
        pdf: "19.pdf"
    },
    20: {
        title: "Minutes of the 50th Meeting",
        date: "23rd January 2023",
        pdf: "20.pdf"
    },
    21: {
        title: "Minutes of the 51st Meeting",
        date: "24th April 2023",
        pdf: "21.pdf"
    },
    22: {
        title: "Minutes of the 52nd Meeting",
        date: "4th August 2023",
        pdf: "22.pdf"
    },
    23: {
        title: "Minutes of the 54th Meeting",
        date: "27th December 2023",
        pdf: "23.pdf"
    },
    24: {
        title: "Minutes of the 55th Meeting",
        date: "22nd February 2024",
        pdf: "24.pdf"
    }
};

const financeMinutes = {
  1: {
    title: "Minutes of the 29th Meeting of Finance Committee",
    date: "28th April 2014",
    pdf: "1.pdf"
  },
  2: {
    title: "Minutes of the 34th Meeting of Finance Committee",
    date: "23rd July 2016",
    pdf: "2.pdf"
  },
  3: {
    title: "Minutes of the 35th Meeting of Finance Committee",
    date: "22nd December 2016",
    pdf: "3.pdf"
  },
  4: {
    title: "Minutes of the 36th Meeting of Finance Committee",
    date: "22nd September 2017",
    pdf: "4.pdf"
  },
  5: {
    title: "Minutes of the 37th Meeting of Finance Committee",
    date: "29th May 2018",
    pdf: "5.pdf"
  },
  6: {
    title: "Minutes of the 38th Meeting of Finance Committee",
    date: "20th February 2019",
    pdf: "6.pdf"
  },
  7: {
    title: "Minutes of the 39th Meeting of Finance Committee",
    date: "4th October 2019",
    pdf: "7.pdf"
  },
  8: {
    title: "Minutes of the 40th Meeting of Finance Committee",
    date: "7th January 2020",
    pdf: "8.pdf"
  },
  9: {
    title: "Minutes of the 41st Meeting of Finance Committee",
    date: "18th March 2020",
    pdf: "9.pdf"
  },
  10: {
    title: "Minutes of the 42nd Meeting of Finance Committee",
    date: "29th October 2020",
    pdf: "10.pdf"
  },
  11: {
    title: "Minutes of the 43rd Meeting of Finance Committee",
    date: "26th March 2021",
    pdf: "11.pdf"
  },
  12: {
    title: "Minutes of the 44th Meeting of Finance Committee",
    date: "25th June 2021",
    pdf: "12.pdf"
  },
  13: {
    title: "Minutes of the 45th Meeting of Finance Committee",
    date: "28th October 2021",
    pdf: "13.pdf"
  },
  14: {
    title: "Minutes of the 46th Meeting of Finance Committee",
    date: "19th May 2022",
    pdf: "14.pdf"
  },
  15: {
    title: "Minutes of the 47th Meeting of Finance Committee",
    date: "23rd September 2022",
    pdf: "15.pdf"
  },
  16: {
    title: "Minutes of the 48th Meeting of Finance Committee",
    date: "23rd January 2023",
    pdf: "16.pdf"
  },
  17: {
    title: "Minutes of the 49th Meeting of Finance Committee",
    date: "24th April 2023",
    pdf: "17.pdf"
  },
  18: {
    title: "Minutes of the 50th Meeting of Finance Committee",
    date: "4th August 2023",
    pdf: "18.pdf"
  },
  19: {
    title: "Minutes of the 51st Meeting of Finance Committee",
    date: "27th December 2023",
    pdf: "19.pdf"
  },
  20: {
    title: "Minutes of the 52nd Meeting of Finance Committee",
    date: "22nd February 2024",
    pdf: "20.pdf"
  }
};

const annualMeetings = {
  1: {
    title: "13th Annual General Meeting",
    date: "22nd September 2017",
    pdf: "1.pdf"
  },
  2: {
    title: "14th Annual General Meeting",
    date: "20th February 2019",
    pdf: "2.pdf"
  },
  3: {
    title: "15th Annual General Meeting",
    date: "29th October 2020",
    pdf: "3.pdf"
  },
  4: {
    title: "16th Annual General Meeting",
    date: "28th October 2021",
    pdf: "4.pdf"
  },
  5: {
    title: "17th Annual General Meeting",
    date: "23rd January 2023",
    pdf: "5.pdf"
  },
  6: {
    title: "18th Annual General Meeting",
    date: "4th August 2023",
    pdf: "6.pdf"
  },
  7: {
    title: "19th Annual General Meeting",
    date: "27th December 2023",
    pdf: "7.pdf"
  }
};


  if (listItems[listIndex] === 'BOARD MINUTES') {
    table = (
      <table className='w-full border-collapse border border-gray-200'>
      <thead>
        <tr className='bg-gray-100 text-gray-600'>
          <th className='px-6 py-3 border-b'>S.NO</th>
          <th className='px-6 py-3 border-b'>BOG MINUTES</th>
          <th className='px-6 py-3 border-b'>DATE</th>
          <th className='px-6 py-3 border-b'>VIEW</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(boardMinutes).map(key => (
          <tr key={key} className='hover:bg-gray-50'>
            <td className='px-6 py-4 border-b'>{key}</td>
            <td className='px-6 py-4 border-b'>{boardMinutes[key].title}</td>
            <td className='px-6 py-4 border-b'>{boardMinutes[key].date}</td>
            <td className='px-6 py-4 border-b'>
              <a 
                href={`path/to/pdf/${boardMinutes[key].pdf}`} 
                className='inline-block px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600'
                download
              >
                View PDF
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  } else if(listItems[listIndex] == 'FINANCE COMMITTE'){
    table = (
      <table className='w-full border-collapse border border-gray-200'>
      <thead>
        <tr className='bg-gray-100 text-gray-600'>
          <th className='px-6 py-3 border-b'>S.NO</th>
          <th className='px-6 py-3 border-b'>BOG MINUTES</th>
          <th className='px-6 py-3 border-b'>DATE</th>
          <th className='px-6 py-3 border-b'>VIEW</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(financeMinutes).map(key => (
          <tr key={key} className='hover:bg-gray-50'>
            <td className='px-6 py-4 border-b'>{key}</td>
            <td className='px-6 py-4 border-b'>{financeMinutes[key].title}</td>
            <td className='px-6 py-4 border-b'>{financeMinutes[key].date}</td>
            <td className='px-6 py-4 border-b'>
              <a 
                href={`path/to/pdf/${financeMinutes[key].pdf}`} 
                className='inline-block px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600'
                download
              >
                View PDF
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    )
  } else if (listItems[listIndex] == 'SOCEITY'){
    table = (
      <table className='w-full border-collapse border border-gray-200'>
      <thead>
        <tr className='bg-gray-100 text-gray-600'>
          <th className='px-6 py-3 border-b'>S.NO</th>
          <th className='px-6 py-3 border-b'>BOG MINUTES</th>
          <th className='px-6 py-3 border-b'>DATE</th>
          <th className='px-6 py-3 border-b'>VIEW</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(annualMeetings).map(key => (
          <tr key={key} className='hover:bg-gray-50'>
            <td className='px-6 py-4 border-b'>{key}</td>
            <td className='px-6 py-4 border-b'>{annualMeetings[key].title}</td>
            <td className='px-6 py-4 border-b'>{annualMeetings[key].date}</td>
            <td className='px-6 py-4 border-b'>
              <a 
                href={`path/to/pdf/${annualMeetings[key].pdf}`} 
                className='inline-block px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600'
                download
              >
                View PDF
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    )
  }

  


  return (
    <div className='text-black'>
      <div>
        <h1 className='text-center text-blue-600 text-2xl font-bold underline'>
          NITTR - BOG MINUTES
        </h1>
      </div>
      <div className='flex flex-col md:flex-row p-8 md:p-28'>
        <div className='w-full md:w-1/3 border border-gray-400'>
          <ul>
            {listItems.map((item, index) => (
              <li
                key={index}
                onClick={() => setListIndex(index)}
                className='cursor-pointer p-4 border border-gray-300 hover:bg-[#2EE59D] hover:text-white duration-500 transition-transform transform hover:scale-105'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-2/3 p-4 flex flex-col border-2 border-gray-300 border-l-0'>
          <h1 className='p-5 text-2xl'>{listItems[listIndex]}</h1>
          {table}
        </div>
      </div>
    </div>
  )
}

export default Bogminutes
