import React from 'react';
import QuickLinks from '../Quicklinks/Quicklinks';

function Announcements() {
  return (
    <>
      <div className='w-[90%] mb-10 mx-auto h-full border border-gray-300 text-gray-600 bg-gray-50 shadow-lg rounded-lg'>
        <div className='w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white border border-gray-300 p-4 col-span-full md:col-span-1 rounded-lg'>
            {/* <div className='mt-4'> */}
            <QuickLinks/>
            {/* </div> */}
          </div>

          <div className='col-span-2 bg-white border border-gray-300 p-4 rounded-lg'>
            <span className='text-blue-800 hover:text-yellow-300 text-xl'>
              Latest From Campus
            </span>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
              <div className='bg-gray-100 border border-gray-300 p-4 rounded-lg'>
                <span className='text-blue-800 underline hover:text-yellow-300 font-semibold'>Announcements</span>
                <div className='mt-2'>
                  <ul className='list-disc ml-4 md:p-4 leading-10'>
                    <li>Semester starts on September 1st</li>
                    <li>Guest lecture on AI by Dr. Smith on September 10th</li>
                    <li>Library will be closed on September 15th</li>
                    <li>Semester starts on September 1st</li>
                    <li>Guest lecture on AI by Dr. Smith on September 10th</li>
                    <li>Library will be closed on September 15th</li>
                    <li>Semester starts on September 1st</li>
                    <li>Guest lecture on AI by Dr. Smith on September 10th</li>
                    <li>Library will be closed on September 15th</li>
                  </ul>
                </div>
              </div>
              <div className='bg-gray-100 border border-gray-300 p-4 rounded-lg'>
                <span className='text-blue-800 underline hover:text-yellow-300 font-semibold'>Achievements</span>
                <div className='mt-2'>
                  <ul className='list-disc ml-4 md:p-4 leading-10'>
                    <li>John Doe won the national chess championship</li>
                    <li>Research paper by Jane Smith published in Science Journal</li>
                    <li>Basketball team won the intercollegiate tournament</li>
                    <li>John Doe won the national chess championship</li>
                    <li>Research paper by Jane Smith published in Science Journal</li>
                    <li>Basketball team won the intercollegiate tournament</li>
                    <li>John Doe won the national chess championship</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Announcements;
