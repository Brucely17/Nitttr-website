// import React from 'react';
// import './Research.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// const ResearchProgram = ({ title, researchItems }) => {
//   return (
//     <div id="research" className="tabcontent">
//       <div className="mx-auto px-4 py-6">
//         <div className="flex justify-center">
//           <div className="w-full md:w-3/4 lg:w-2/3">
//             <h2 className="section-title">{title}</h2>
//             <table className="w-full mt-6">
//               {researchItems.map((item, index) => (
//                 <React.Fragment key={index}>
//                   <tr>
//                     <td className="pr-3">
//                       <i className="fa fa-hand-o-right icon-bullet"></i>
//                     </td>
//                     <td>
//                       <p className="justify">
//                         <em>{item}</em>
//                       </p>
//                     </td>
//                   </tr>
//                   <tr><td className="py-2"></td></tr>
//                 </React.Fragment>
//               ))}
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResearchProgram;
import React from 'react';
import './Research.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const ResearchProgram = ({ title, researchItems }) => {
  return (
    <div id="research" className="tabcontent">
      <div className="mx-auto px-4 py-6">
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <h2 className="section-title text-blue-700">{title}</h2>
            <table className="w-full mt-6">
              {researchItems.map((item, index) => (
                <div key={index}>
                  <tr>
                    <td className="pr-3 text-blue-700">
                      <i className="fas fa-hand-point-right icon-bullet"></i>
                    </td>
                    <td>
                      <p className="justify text-black">
                        <em>{item}</em>
                      </p>
                    </td>
                  </tr>
                  <tr><td className="py-2"></td></tr>
                </div>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchProgram;
