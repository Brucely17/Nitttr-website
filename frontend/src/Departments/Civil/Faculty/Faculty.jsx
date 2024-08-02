import React from 'react';

export const Faculty = ({ faculty }) => {
  return (
    <div id="faculty" className="p-6 bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-blue-700 text-3xl font-bold">Faculty</h1>
      </div>
      <div className="flex flex-col items-center space-y-6">
        {faculty.map((f, index) => (
          <div
            key={index}
            className="w-full md:w-2/3 lg:w-1/2 p-4 border-2 border-gray-400 rounded-lg shadow-lg bg-white"
          >
            <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
              <h4 className="text-blue-700 text-xl font-semibold">{f.name}</h4>
              <h4 className="text-blue-500 text-lg">{f.pos}</h4>
            </div>
            <h5 className="text-gray-600 mt-2">{f.des}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
