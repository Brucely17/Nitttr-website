import React from 'react';
import './PgCourse.css';
// import sample from './public/images/sample.jpg'
const courses = [
    { image: '/images/cse.png', title: 'M.Tech ARTIFICIAL INTELLIGENCE & MACHINE LEARNING'},
    { image: '/images/arvr.jpeg', title: 'M. Tech. AUGMENTED AND VIRTUAL REALITY', pdfLink: './images/MEDIA AND TECHNOLOGY_V2.pdf' },
    { image: '/images/education.jpeg', title: 'M.Tech. ENGINEERING EDUCATION', pdfLink: './images/EDUCATION_02.pdf' },
    { image: '/images/civil.jpeg', title: 'M. Tech. INFRASTRUCTURE ENGINEERING AND MANAGEMENT', pdfLink: './images/SCHOOL OF CIVIL_03.pdf' },
    { image: '/images/industry.jpeg', title: 'M. Tech. MECHATRONICS', pdfLink: './images/MECHATRONICS_v2.pdf' },
    { image: '/images/pe.jpeg', title: 'M. Tech. POWER ELECTRONICS AND DRIVES', pdfLink: './images/POWER ELECTRONICS_V4.pdf' },
    { image: '/images/VLSI.jpeg', title: 'M. Tech. VLSI DESIGN AND EMBEDDED SYSTEMS', pdfLink: './images/VLSI ECE_v4.pdf' },
    { image: '/images/mba.jpeg', title: 'M.B.A. (BUSINESS ANALYTICS)', pdfLink: './images/CRED_V2.pdf' },
];

const PgCourse = () => {
    return (
        <div className="cont mx-auto p-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-500">Courses Offered @ NITTTR</h2>
            </div>
            <div className="flex flex-wrap justify-center">
                {courses.map((course, index) => (
                    <div key={index} className="card col-md-3 mb-4 p-4 shadow-lg m-4">
                        <img src={course.image} alt="Card" className="card-img-top w-full h-48 object-cover" />
                        <div className="card-body p-4">
                            <h4 className="card-text text-lg text-blue-700 font-semibold mb-4">{course.title}</h4>
                            <a href={course.pdfLink} className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded" target="_blank" rel="noopener noreferrer">Download PDF</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PgCourse;
