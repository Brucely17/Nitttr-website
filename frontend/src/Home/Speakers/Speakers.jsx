import React from 'react'
import ProfileCard from './ProfileCard/ProfileCard'
import './Speaker.css'

function Speakers() {
  return (
    <>   
      <div className='about_nittr'>
      <h1 className='text-2xl md:text-4xl ' >About NITTTR</h1>
      <p className='text-sm md:text-lg'>
        NITTTR is a student run organization that aims to provide a platform for students to showcase their
      
        technical skills and knowledge. We organize events like workshops, hackathons, coding competitions,
        etc. to help students learn and grow. We also provide a platform for students to showcase their
        projects and ideas. We believe that learning should be fun and interactive, and we strive to create
        an environment that encourages creativity and innovation. We are committed to providing a safe and
        inclusive space for all students, regardless of their background or experience. We hope that you will

          join us in our mission to create a community of learners and innovators.


      </p>
      </div>
      <div className="speakerMain w-[85%] mx-auto">
        <div className="speakerCards flex-col gap-20 md:flex-row">
        <ProfileCard 
            imageUrl={"/images/dir_un5.jpg"} 
            Name="Prof. Dr. Usha Natesan"
            Proficiency="Director National Institute of Technical Teacher's Training & Research" 
            Description="Research Advisor of the Asia-Pacific Science Center (APACSCI), Singapore, 2020
                      Academic Advisory Board Member of Cyberjaya Skill International College (CYSIC),
                      Conferred with the Honorary Degree of Doctor of Letters (D.Litt.) by the Lincoln
                      University College, Kuala Lumpur, Malaysia, 2019
                     Organizing Committee Member of the International Conference on Oceanography, OMICS
                      International, Miami, USA, 2013
                     Recipient of the Young Scientist Project Award from the International Foundation for
                      Science (IFS), Sweden, 2004
                     Recipient of the Japanese Government Scholarship from the Ministry of Human Resource
                      Development (MHRD), Government of India for pursuing Ph.D. at Japan, 1990 (Did not accept
                      the offer as I had already enrolled for Ph.D. at IIT Madras, Chennai) "
      />
        </div>
        {/* <div className="speakerCards">
          <ProfileCard 
            imageUrl={"/images/speakers/Balasubramanian.png"} 
            Name="Balasubramaniyan Munnuswamy"
            Proficiency="Skill Development, SDG,CSR, ESG, Incubation & Impact investment| NSDC,UNDP,FCDO (DFID),Fullerton, DRF|" 
            Description="Dynamic professional backed by 20+ years of verifiable year after year success in large development projects. 
            Systemic Private Sector led Development approaches like CSR& Sustainability, Making Markets work for the Poor (M4P)"
          />
        </div> */}
      </div>
    </>
  )
}

export default Speakers
