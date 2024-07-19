import React from 'react';
import {motion} from 'framer-motion';

const CardComponent = ({ img, name, year }) => {
  return (
    <motion.div
    whileHover={{scale:1.05}}
    whileTap={{scale:0.95}}
    className='flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-sm transition-all duration-300'>
      <img src={img} alt={name} className='w-3/4 h-auto rounded-lg ' />
      <div className='w-3/4 flex flex-col items-center text-center rounded-lg bg-yellow-400 mt-2 p-3 shadow-inner'>
        <p className='font-medium text-base'>{name}</p>
        <p className='font-light text-sm text-gray-600'>{year}</p>
      </div>
    </motion.div>
  );
};


const SectionComponent = ({ cards }) => {
  return (
    <div className='flex flex-col mt-8'>
        <div className='flex justify-center items-center '>
       <div className='h-px bg-black flex-grow'></div>
      <h1 className='text-center text-black text-2xl font-bold '>{cards[0].designation}</h1>
      <div className='h-px bg-black flex-grow'></div>
      </div>
      <div className='flex flex-wrap justify-center mt-5'>
        {cards.map((card, index) => (
          <CardComponent key={index} img={card.img} name={card.name} year={card.year} />
        ))}
      </div>
    </div>
  );
};

// First column cards data , you can add similarly fo rothers 
const first_row_data = [
  {
    designation:'Chairman, Board of Governors (BoG) and Director',
    img: '/images/director.jpg',
    name: 'Shri. G K Chandramani',
    year: '1967-1968'
  },
  {
     designation:'Chairman, Board of Governors (BoG) and Director',
    img: '/images/director.jpg',
    name: 'Shri. G K Chandramani',
    year: '1967-1968'
  },
  {
     designation:'Chairman, Board of Governors (BoG) and Director',
    img: '/images/director.jpg',
    name: 'Shri. G K Chandramani',
    year: '1967-1968'
  },
  {
     designation:'Chairman, Board of Governors (BoG) and Director',
    img: '/images/director.jpg',
    name: 'Shri. G K Chandramani',
    year: '1967-1968'
  }
];




const Chairman = () => {
  return (
    <motion.div
     className='flex flex-col items-center p-4'
     initial={{opacity:0,y:-20}}
     animate={{opacity:1 ,y:0}}
     transition={{duration:1}}
     >




      <h1 className='text-3xl sm:text-4xl text-blue-700 text-center'>
        Chairman, Board of Governors (BoG) and Director
      </h1>


      {/* This is for first row ,similarly c;one of rother rows */}
      <SectionComponent
   
        cards={first_row_data}
      />


<SectionComponent
   
   cards={first_row_data}
 />
 <SectionComponent
   
   cards={first_row_data}
 />
 <SectionComponent
   
   cards={first_row_data}
 />

 <SectionComponent
   
        cards={first_row_data}
      />
    </motion.div>
  );
};

export default Chairman;
