import React from 'react'

const Director = () => {
  return (

    <div className='mt-5 bg-black' >
       <div className='w-full flex flex-col  '>
        <div className='w-full h-16 items-center text-center' style={{backgroundColor:"#ffcc00"}}>
           <h1 className='  font-grotesk text-4xl font-extrabold'> Prof. Dr. Usha Natesan, Director</h1>
        </div>
        <div className='w-full flex flex-row p-5 gap-2 items-center text-center bg-blue-800 from-stone-300 font-thin' >
            <img src='/images/dir_un5.jpg' className='w-1/4 h-64 rounded-lg'></img>
             <h3 className=''>India is one of the leading countries to address the current challenges in higher education through the formulation of the "National Education Policy 2020". The Policy emphasizes on the transformation of the "Stream-based Educational Setup" to a "Multimodal Setup" for structuring a global value adder, with a special focus on online education (to increase the Gross Enrollment Ratio), mentoring of teachers and innovative research. India is the first Country in the World to provide the Faculty Certification through the creation of 8 modules associated with Pedagogy, Research, Leadership, Technology, Professional Ethics and Evaluation. This innovative model has an immense potential to attract the other developing and developed Countries to follow our footstep. </h3>
             </div>

       </div>
        </div>


  )
}

export default Director