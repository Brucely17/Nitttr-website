import React from 'react';
import './ICC.css';

const facultyData = [
    {
        img: 'https://www.nitttrc.ac.in/assets/images/malliga.jpg',
        name: 'Dr. P. Malliga',
        title: 'Chairman of the Committee',
        email: 'malliga@nitttrc.ac.in',
        phone: '93803 42066',
    },
    {
        img: 'https://www.nitttrc.ac.in/Facultyimg/gandhimathi.jpg',
        name: 'Smt A.L. Gandhimathi',
        title: 'Member',
        description: 'Advocate, Kotturpuram, Chennai Chennai',
        email: 'algadvocate@gmail.com',
        phone: '98412 77216',
    },
    {
        img: 'https://www.nitttrc.ac.in/assets/images/santh.jpg',
        name: 'Dr. R. Santhakumar',
        title: 'Member',
        email: 'rsk65@nitttrc.ac.in',
        phone: '94440 32745',
    },
    {
        img: 'https://www.nitttrc.ac.in/Facultyimg/support%20staff/sathiyapriya.jpg',
        name: 'Smt. K. Satyapriya',
        title: 'Member',
        email: 'sathvapriva2k2@vahoo.co.in',
        phone: '97907 91583',
    },
];

const documents = [
    {
        url: 'https://www.nitttrc.ac.in/files/Sexual-Harassment-at-Workplace-Act.pdf',
        title: 'The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
    },
    {
        url: 'https://www.nitttrc.ac.in/files/The Sexual Harassment of Women at Workplace.pdf',
        title: 'The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal), Rules, 2013',
    },
    {
        url: 'https://www.nitttrc.ac.in/files/Handbook on Sexual Harassment of Women at Workplace.pdf',
        title: 'Handbook on Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
    },
];

const InternalComplaintsCommittee = () => {
    return (
        <div>
            <h1>Internal Complaints Committee</h1>
            <div className="faculty-container">
                {facultyData.map((faculty, index) => (
                    <div key={index} className="faculty-card">
                        <img src={faculty.img} alt={faculty.name} />
                        <div className="faculty-card-body">
                            <h3>{faculty.name}</h3>
                            <p className="faculty-phara">{faculty.title}</p>
                            {faculty.description && <p className="faculty-phara">{faculty.description}</p>}
                            <p className="faculty-phara">Email: {faculty.email}</p>
                            <p className="faculty-phara">Phone: {faculty.phone}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="container1">
                <h1>Act, Rules and Handbook</h1>
                <div className="flex-container">
                    {documents.map((doc, index) => (
                        <div key={index} className="flex-item">
                            <a href={doc.url} target="_blank" rel="noopener noreferrer">
                                {doc.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InternalComplaintsCommittee;
