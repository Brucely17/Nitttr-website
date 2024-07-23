import React from 'react';

const Brocomp = ({img,text,link}) => {
  return (
    <>
        <div className='text-black h-[300px] w-[350px] pb-28 rounded-md overflow-hidden hover:scale-[1.05] duration-100 hover:shadow-lg'>
          <img src={img} className='h-full w-[350px] object-fill' />
          <div className='bg-gray-200 p-3 text-2xl text-center'>
           {text}
          </div>
          <a href={link} target='_blank'>
            <button className='bg-[#0ABCF1] w-full p-4 text-white text-sm rounded-b-md'>
              Download Brochure
            </button>
          </a>
        </div>
    </>
  );
}

const Brochure = () => {
  return (
    <div className='text-black flex gap-20 justify-center py-20 pb-40'>
      <Brocomp img={'https://www.nitttrc.ac.in/brochure_img/nitttr.jpg'} text={'Train at NITTTR Chennai'} link={'/brochure/Institute_brochure.pdf'}/>
      <Brocomp img={'https://www.nitttrc.ac.in/brochure_img/facility.jpg'} text={'Facility at NITTTR Chennai'} link={'/brochure/insbrochure1.pdf'}/>
      <Brocomp img={'https://www.nitttrc.ac.in/brochure_img/prospectus.jpg'} text={'NITTTR Prospectus'} link={'/brochure/NITTTR_Prospectus.pdf'}/>
      <Brocomp img={'https://www.nitttrc.ac.in/brochure_img/skill.jpg'} text={'Skill development'} link={'/brochure/skill.pdf'}/>
    </div>
  );
}

export default Brochure;
