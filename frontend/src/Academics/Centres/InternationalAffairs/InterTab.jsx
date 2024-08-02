import React, { useState } from 'react';
import './InterTab.css'; // Import the CSS file for custom styles
import { Faculty } from '../../../Departments/Civil/Faculty/Faculty.jsx';
import ResearchProgram from '../../../Departments/Civil/ResearchProgram/ResearchProgram.jsx';
import Table from './Table.jsx';

const InterTab = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const handleTabClick = (event, tabName) => {
    setActiveTab(tabName);
  };
 
  const fac = [
    {
      name: 'Dr.G.Kulanthaivel,',
      pos: 'M.E., PGDCA., Ph.D., MIEEE(USA),',
      des: 'Professor and Head'
    },
    {
      name: 'Er. DV. Suryanarayana, ',
      pos: "",
      des: 'Programmer'
    }
  ];


  
  const About = [
    "NITTTR, Chennai has been meticulously planning and executing teacher training activities as well as educational research, since its inception decades ago. It has expanded its wings to overseas trainees too, incorporating technical teachers, researchers, administrative and HRD personnel, trainers and so on since 1982. The training courses for overseas professionals commenced with one such programme in 1982 and grown to the level, wherein, this prestigious institution organizes around eight such programmes per year, each of two months duration of intensive training, to achieve the set objectives in this sphere of the task.",
    "In addition, special training programmes are also conducted for Bangladesh teachers for the past couple of years. More such programmes are also on the anvil, depending upon the requests from various countries. All of these programmes are fully sponsored by the Ministry of External Affairs, Govt. of India. Centre for International Affairs (CIA) plans, coordinates with the various academic departments and centers of the Institute, liaise with Ministry of External Affairs (MEA), Govt. of India, Indian Embassies in various countries to obtain the eligible participants, works with various academic departments and centers, in the organization of various programmes for overseas participants. ",
    "CIA, also Obtains the accounts for the various courses, conducted by various departments and centers of NITTTR, Chennai, examines them, consolidates the final accounts and submits to MEA, for obtaining the grants. CIA processes the necessary course advances and submits them to MEA for advance grants.In addition, making necessary entries, online, in all forms, to MEA as well as to Foreigners Regional Registration Office (FRRO), from time to time, for all courses.All Logistic activities are coordinated by the CIA, in respect of all courses for overseas programmes, right through, from beginning to end."
  ];

  const Activity=[
    "Prepares the list of courses every year depending upon the needs by contacting NITTTR Departments and Centres, as well as the Indian Embassies in various countries.",
    "Pursues with MEA, for the approval of the courses, in respect of regular courses, as well as special courses.",
    "Conducts Board of Studies Meetings for Overseas Programmes.",
    "Processes the applications of overseas participants.",
    "Obtains the clearance from MEA for the selected participants.",
    "Organizes three days orientation programmes for all courses at the beginning of each course.",
    "Processing Living allowances and distributing them as per the MEA norms.",
    "Coordinates with the office of the NITTTR Guest House, for comfortable accommodation and boarding for overseas participants.",
    "Faculty Member of CIA handles appropriate classes in the Overseas Training Courses.",
    "Faculty Member of CIA handles appropriate classes in other training programmes, for polytechnic and engineering college teachers, as per the request of other academic departments and centers.",
    "Submits the proposals for necessary training course advances to MEA and follows it up.",
    "Obtains accounts from various academic coordinators, scrutinizes the final accounts, submits to MEA and pursues the final settlement.",
    "Prepares the course certificates for the overseas participants.",
    "Liaises with the Indian Embassies, for the Air Tickets for onward and return journey.",
    "Makes necessary entries in all forms, online, for all participants, for all courses, concerning FRRO and MEA.",
    "Arranges and coordinates airport pickup and drop for all participants, of all courses, at the beginning and end of the programme.",
    "Prepares reports, photographs and submits the same to MEA, for governing body and for the academic council from time to time, depending upon the requirements.",
    "Does all logistic activities for all programmes."


  ]

  const Programme=[
    " The Indian Technical and Economic Cooperation (ITEC) Programme was instituted by a decision of the Indian Cabinet on 15 September 1964 as a bilateral programme of assistance of the Government of India. The ITEC Programme, born out of the vision of our first Prime Minister Jawahar Lal Nehru, was formally launched under the premiership of Lal Bahadur Shastri. The decision regarding setting up the ITEC programme was predicated on the underlying belief that it was necessary to establish relations of mutual concern and inter-dependence based not only on commonly held ideals and aspirations, but also on solid economic foundations. Technical and economic cooperation was considered to be one of the essential functions of an integrated and imaginative foreign policy."
  ]

  return (
    <div className="flex flex-row md:flex-row p-10">
      <div className="tab flex flex-col w-full md:w-1/4 border-r border-gray-300">
        <button
          className={`tablinks ${activeTab === 'vision' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'vision')}
        >
          About
        </button>
        <button
          className={`tablinks ${activeTab === 'core' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'core')}
        >
          Activities
        </button>
        <button
          className={`tablinks ${activeTab === 'short' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'short')}
        >
         Programmes
        </button>
        
        <button
          className={`tablinks ${activeTab === 'faculty' ? 'active' : ''} px-2 py-1 text-left focus:outline-none`}
          onClick={(event) => handleTabClick(event, 'faculty')}
        >
          Faculty
        </button>
      </div>

      <div className="tabcontent flex-1 p-6">
        {activeTab === 'vision' && <div className="animate-slideUp">
        <ResearchProgram title="About" researchItems={About} />
        </div>}


        {activeTab === 'core' && <div className="animate-slideUp">
            <ResearchProgram title="About" researchItems={Activity} />
        </div>}

        {activeTab === 'short' && <div className="animate-slideUp flex flex-col">
        <h1 className='text-blue-700  font-sans text-5xl'>International Training Programmes</h1>
            <ResearchProgram title="

Indian Technical Economic Cooperation (ITEC)
 " researchItems={Programme} />
 <Table/>
        </div>}
       
        {activeTab === 'faculty' && <div className="animate-slideUp"><Faculty faculty={fac}/></div>}
      </div>
    </div>
  );
};

export default InterTab;
