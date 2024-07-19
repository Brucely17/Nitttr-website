import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Overseas = () => {
  const programs2024_25 = [
    { title: 'Course Title 1', duration: '2 Weeks', from: '01-01-2024', to: '15-01-2024' },
    // Add more programs as needed
  ];

  const programs2023_24 = [
    { title: 'Course Title 2', duration: '3 Weeks', from: '01-01-2023', to: '21-01-2023' },
    // Add more programs as needed
  ];

  const programs2022_23 = [
    { title: 'Course Title 3', duration: '4 Weeks', from: '01-01-2022', to: '28-01-2022' },
    // Add more programs as needed
  ];

  const programs2021_22 = [
    { title: 'Course Title 4', duration: '1 Week', from: '01-01-2021', to: '07-01-2021' },
    // Add more programs as needed
  ];

  return (
    <>
      <style jsx>{`
        .animate-charcter {
          text-transform: uppercase;
          background-image: linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%);
          background-size: 200% auto;
          color: #fff;
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textclip 2s linear infinite;
          display: inline-block;
          font-size: 30px;
        }

        @keyframes textclip {
          to {
            background-position: 200% center;
          }
        }
      `}</style>

      <div className="mt-12 bg-gray-100 py-4">
        <div className="acontainer mx-auto">
          <ul className="flex space-x-4">
            <li><a href="index.php" className="text-blue-600"><i className="fa fa-home"></i></a></li>
            <li><a href="overseas.php" className="text-blue-600">International Training Programmes</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-white py-8">
        <div className="acontainer mx-auto">
          <div className="text-center mb-8">
            <h3 className="animate-charcter">International Training Programmes</h3>
          </div>

          <div className="acontainer mx-auto">
            <div className="degree_inner mb-12">
              <h3 className="text-2xl font-semibold mb-4">Programme for the Year 2024-25 @ NITTTR, Chennai</h3>
              <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                <table className="table-auto w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2">Sl.no</th>
                      <th className="px-4 py-2">Name of the Course</th>
                      <th className="px-4 py-2">Duration<br/>(Weeks)</th>
                      <th className="px-4 py-2">From</th>
                      <th className="px-4 py-2">To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs2024_25.map((program, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{program.title}</td>
                        <td className="border px-4 py-2">{program.duration}</td>
                        <td className="border px-4 py-2">{program.from}</td>
                        <td className="border px-4 py-2">{program.to}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="degree_inner mb-12">
              <h3 className="text-2xl font-semibold mb-4">Programme for the Year 2023-24 @ NITTTR, Chennai</h3>
              <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                <table className="table-auto w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2">Sl.no</th>
                      <th className="px-4 py-2">Name of the Course</th>
                      <th className="px-4 py-2">Duration<br/>(Weeks)</th>
                      <th className="px-4 py-2">From</th>
                      <th className="px-4 py-2">To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs2023_24.map((program, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{program.title}</td>
                        <td className="border px-4 py-2">{program.duration}</td>
                        <td className="border px-4 py-2">{program.from}</td>
                        <td className="border px-4 py-2">{program.to}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="degree_inner mb-12">
              <h3 className="text-2xl font-semibold mb-4">Programme for the Year 2022-23 @ NITTTR, Chennai</h3>
              <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                <table className="table-auto w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2">Sl.no</th>
                      <th className="px-4 py-2">Name of the Course</th>
                      <th className="px-4 py-2">Duration<br/>(Weeks)</th>
                      <th className="px-4 py-2">From</th>
                      <th className="px-4 py-2">To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs2022_23.map((program, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{program.title}</td>
                        <td className="border px-4 py-2">{program.duration}</td>
                        <td className="border px-4 py-2">{program.from}</td>
                        <td className="border px-4 py-2">{program.to}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="degree_inner mb-12">
              <h3 className="text-2xl font-semibold mb-4">Programme for the Year 2021-22 @ NITTTR, Chennai</h3>
              <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                <table className="table-auto w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2">Sl.no</th>
                      <th className="px-4 py-2">Name of the Course</th>
                      <th className="px-4 py-2">Duration<br/>(Weeks)</th>
                      <th className="px-4 py-2">From</th>
                      <th className="px-4 py-2">To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs2021_22.map((program, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{program.title}</td>
                        <td className="border px-4 py-2">{program.duration}</td>
                        <td className="border px-4 py-2">{program.from}</td>
                        <td className="border px-4 py-2">{program.to}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mb-12">
              <a href="https://nitttrc.ac.in/international.php#top" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 px-4 py-2 rounded-md text-lg">Centre for International Affairs</a>
            </div>

            <div className="degree_inner mb-12">
              <h3 className="text-2xl font-semibold mb-4">Programme for the Year 2020-21 @ NITTTR, Chennai</h3>
              <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
                <table className="table-auto w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2">Sl.no</th>
                      <th className="px-4 py-2">Name of the Course</th>
                      <th className="px-4 py-2">Duration<br/>(Weeks)</th>
                      <th className="px-4 py-2">From</th>
                      <th className="px-4 py-2">To</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">1</td>
                      <td className="border px-4 py-2">Course Title 5</td>
                      <td className="border px-4 py-2">6 Weeks</td>
                      <td className="border px-4 py-2">01-01-2020</td>
                      <td className="border px-4 py-2">11-02-2020</td>
                    </tr>
                    {/* Add more programs as needed */}
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Overseas;
