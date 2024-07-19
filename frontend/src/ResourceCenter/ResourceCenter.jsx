import React from 'react';

const ResourceCentre = () => {
  return (
    <div className="p-4 bg-white">
      <div className="text-sm text-gray-600 mb-4">
        <a href="/" className="hover:underline">Home</a> &gt; <span>Resource Centre</span>
      </div>
      <div className="border-b-2 border-gray-300 pb-2 mb-4">
        <h1 className="text-3xl font-bold text-pink-600">Resource Centre</h1>
      </div>
      <div className="flex">
        <div className="w-1/4 bg-green-300 p-4 mr-4">
          <h2 className="text-lg font-bold">ABOUT</h2>
          <ul className="mt-2">
            <li className="mt-2">
              <a href="#" className="text-gray-800 hover:underline">Vision & Mission</a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-gray-800 hover:underline">Rules</a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-gray-800 hover:underline">Timings & Holidays</a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-gray-800 hover:underline">Collections</a>
            </li>
          </ul>
        </div>
        <div className="w-3/4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-pink-600">History</h2>
            <p className="text-gray-700 mt-2">In the year 1966, Library was established in the institute...</p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-pink-600">Automation with RFID</h2>
            <p className="text-gray-700 mt-2">A comprehensive range of videos, DVDs, CD-ROMs...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceCentre;
