import React, { useState, useEffect } from 'react';
import './BisCorner.css';

const BisCorner = () => {
  const [response, setResponse] = useState([]);
  // let res = [];
  useEffect(() => {
    async function fetchData() {
      const formData = new FormData();
      formData.append('Instemailid', 'ks.giridharan@nitttrc.ac.in');
      formData.append('Loginid', 'bisscmd');
      formData.append('Loginpwd', 'SNr@12#$%&!Rk');

      try {
        const response = await fetch('https://www.services.bis.gov.in/php/BIS_2.0/dgdashboard/Standards_master/get_academic_dashboard_banner_scroll_items', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        const result = await response.json();
        console.log(result);
        console.log(result.banner_scroll_data.length)
        if (result.banner_scroll_data.length > 0) {
          setResponse(result.banner_scroll_data);
          // res.append(result);
          // console.log('djfbdkfb');
        }
      } catch (error) {
        console.error('Fetch error:', error.message);
      }
    }

    fetchData();
  }, []); 

  console.log(response);

  return (
    <div className='text-gray-900 text-xs w-[85%] mx-auto border border-gray-600 mb-10'>
      {response.length > 0 ? (
        <table className="table table-bordered border border-gray-600">
          <thead className='border border-gray-600'>
            <tr className='border border-gray-600'>
              <th scope="col" className='border border-gray-600 p-2'>S.No</th>
              <th scope="col" className='border border-gray-600 p-2'>Title</th>
              <th scope="col" className='border border-gray-600 p-2'>Description</th>
              <th scope="col" className='border border-gray-600 p-2'>URL</th>
              <th scope="col" className='border border-gray-600 p-2'>Created At</th>
            </tr>
          </thead>
          <tbody className='border border-gray-600'>
            {response.map((item, index) => (
              <tr className='border border-gray-600' key={item.id}>
                <td className='border border-gray-600 p-2'>{index + 1}</td>
                <td className='border border-gray-600 p-2'>{item.title}</td>
                <td className='border border-gray-600 p-2'>{item.description}</td>
                <td className='border border-gray-600 p-2'>{item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">Link</a> : 'N/A'}</td>
                <td className='border border-gray-600 p-2'>{item.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default BisCorner;
