import React from 'react';

const CourseTable = ({ year, courses }) => {
  return (
    <div className="container mx-auto p-8 mt-16">
      <div className="animate__animated animate__fadeInLeft">
        <h2 className="text-3xl font-bold underline text-blue-600 pb-10 text-center">Programme for the Year {year} @ NITTTR, Chennai</h2>
      </div>

      <div className="animate__animated animate__fadeInRight text-black">
        <div className="">
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full bg-gray-100 shadow-md border border-gray-400 rounded-xl">
              <thead className="bg-gray-100 border border-gray-400 p-2">
                <tr>
                  <th className="px-4 py-4 text-center border border-gray-400">Sl.no</th>
                  <th className="px-4 py-4 text-center border border-gray-400">Name of the Course</th>
                  <th className="px-4 py-4 text-center border border-gray-400">Duration (Weeks)</th>
                  <th className="px-4 py-4 text-center border border-gray-400">From</th>
                  <th className="px-4 py-4 text-center border border-gray-400">To</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={index} className="border-b border-gray-400">
                    <td className="px-4 py-2 text-center border border-gray-400">{index + 1}</td>
                    <td className="px-4 py-2 text-center border border-gray-400">{course.name}</td>
                    <td className="px-4 py-2 text-center border border-gray-400">{course.duration}</td>
                    <td className="px-4 py-2 text-center border border-gray-400">{course.from}</td>
                    <td className="px-4 py-2 text-center border border-gray-400">{course.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Table = () => {
  const courseData = [
    {
      year: '2024-25',
      courses: [
        {
          name: 'Integrating Industry 4.0 Competency and Twenty First (21st) Century Skills in Educational Institutions',
          duration: '4',
          from: '26th June, 2024',
          to: '23rd July, 2024',
        },
        {
          name: 'Design of Educational Applications using Web Technologies',
          duration: '4',
          from: '07th August, 2024',
          to: '3rd September, 2024',
        },
        {
          name: 'Information and Communication Technology in Education and Training',
          duration: '4',
          from: '01st October, 2024',
          to: '28th October, 2024',
        },
        {
          name: 'Total Solution for Integrated Library System',
          duration: '2',
          from: '16th October, 2024',
          to: '29th October, 2024',
        },
        {
          name: 'Empowering Women Entrepreneurs for Rural Development (Women only)',
          duration: '2',
          from: '22nd January, 2025',
          to: '04th February, 2025',
        },
        {
          name: 'Strengthening Technical and Vocational Education & Training (TVET) Systems to meet the Sustainable Development Goals (SDGs) of United Nations',
          duration: '4',
          from: '22nd January, 2025',
          to: '18th February, 2025',
        },
        {
          name: 'Accreditation on Enhancing Technical Education',
          duration: '2',
          from: '12th February, 2025',
          to: '26th February, 2025',
        },
        {
          name: 'Skill Development in Electronics for TVET Trainers and Planners',
          duration: '2',
          from: '19th February, 2025',
          to: '04th March, 2025',
        },
      ],
    },
    {
      year: '2023-24',
      courses: [
        {
          name: 'Integrating Industry 4.0 Competency and Twenty First (21st) Century Skills in Educational Institutions',
          duration: '4',
          from: '26th July, 2023',
          to: '22nd August, 2023',
        },
        {
          name: 'Educational Media Production for E-Learning',
          duration: '4',
          from: '30th August, 2023',
          to: '26th September, 2023',
        },
        {
          name: 'Certificate Course on Total Solution for Integrated Library System',
          duration: '2',
          from: '24th January, 2024',
          to: '20th February, 2024',
        },
        {
          name: 'Quality Assurance Through Accreditation in Higher Education in Developing Countries',
          duration: '4',
          from: '15th November, 2023',
          to: '12th December, 2023',
        },
        {
          name: 'Strengthening Technical and Vocational Education & Training (TVET) Systems to meet the Sustainable Development Goals (SDGs) of United Nations',
          duration: '4',
          from: '24th January, 2024',
          to: '20th February, 2024',
        },
        {
          name: 'Sustainable Rural Development Through Entrepreneurship and Innovation',
          duration: '4',
          from: '24th January, 2024',
          to: '20th February, 2024',
        },
        {
          name: 'Skill Development in Electronics for TVET Trainers and Planners',
          duration: '4',
          from: '24th February, 2024',
          to: '20th March, 2024',
        },
      ],
    },
    {
      year: '2022-23',
      courses: [
        {
          name: 'Advanced Certificate Course on "Skill Development in Electronics for TVET Trainers and Planners"',
          duration: '4',
          from: '22nd February, 2023',
          to: '21st March, 2023',
        },
        {
          name: 'Advanced Certificate Course on "Strengthening Technical and Vocational Education & Training (TVET) Systems to Meet the Sustainable Development Goals (SDGS) of United Nations"',
          duration: '4',
          from: '25th January, 2023',
          to: '21st February, 2023',
        },
        {
          name: 'Advanced Certificate Course on "Design of Educational Applications using Web Technologies"',
          duration: '4',
          from: '16th November, 2022',
          to: '13th December, 2022',
        },
        {
          name: 'Online (e-ITEC) Teachers\' Training Program on "Basic Science for Teachers of Papua New Guinea"',
          duration: '2',
          from: '14th November, 2022',
          to: '25th November, 2022',
        },
        {
          name: 'Certificate Course on "Redefining Engineering Education through Innovative Curriculum for Industry 4.0"',
          duration: '2',
          from: '17th August, 2022',
          to: '30th August, 2022',
        },
      ],
    },
    {
      year: '2021-22',
      courses: [
        {
          name: 'Curriculum Design & Evaluation and Instructional Material Development for Administrators and Curriculum Developers',
          duration: '2',
          from: '14th March, 2022',
          to: '25th March, 2022',
        },
        {
          name: 'Enhancing Leadership Skills and Managerial Skills of School Heads',
          duration: '2',
          from: '16th March, 2022',
          to: '29th March, 2022',
        },
        {
          name: 'Design of Educational Applications using Web Technologies',
          duration: '2',
          from: '16th March, 2022',
          to: '29th March, 2022',
        },
        {
          name: 'IT tools for effective administration',
          duration: '2',
          from: '16th March, 2022',
          to: '29th March, 2022',
        },
        {
          name: 'Technical and Vocational Education and Training (TVET) for Administrators',
          duration: '2',
          from: '28th March, 2022',
          to: '8th April, 2022',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8">
        {courseData.map((data, index) => (
          <CourseTable key={index} year={data.year} courses={data.courses} />
        ))}
      </div>
    </div>
  );
};

export default Table;
