// import React from 'react';

// const CadLab = ({ title, description, images }) => {
//   return (
//     <div id="cad-lab" className="tabcontent">
//       <div className=" mx-auto px-4 py-6">
//         <div className="row flex justify-center">
//           <div className="col-md-12">
//             <h2 className="text-blue-700 text-2xl font-bold mb-4">{title}</h2>
//             <div className="animated fadeInRight">
//               <table className="w-full">
//                 <tbody>
//                   <tr>
//                     <td className="pr-3">
//                       <i className="fa fa-hand-o-right text-black"></i>
//                     </td>
//                     <td>
//                       <p className="justify text-black text-lg">
//                         <em>{description}</em>
//                       </p>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <br />
//             <div className="container">
//               <div id="myCarousel" className="carousel slide" data-ride="carousel">
//                 <ol className="carousel-indicators">
//                   {images.map((_, index) => (
//                     <li
//                       key={index}
//                       data-target="#myCarousel"
//                       data-slide-to={index}
//                       className={index === 0 ? 'active' : ''}
//                     ></li>
//                   ))}
//                 </ol>
//                 <div className="carousel-inner">
//                   {images.map((image, index) => (
//                     <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//                       <img src={image.src} alt={image.alt} className="w-full" />
//                       <div className="carousel-caption">
//                         <h3>{image.captionTitle}</h3>
//                         <p>{image.captionText}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <a className="left carousel-control" href="#myCarousel" data-slide="prev">
//                   <span className="glyphicon glyphicon-chevron-left"></span>
//                   <span className="sr-only">Previous</span>
//                 </a>
//                 <a className="right carousel-control" href="#myCarousel" data-slide="next">
//                   <span className="glyphicon glyphicon-chevron-right"></span>
//                   <span className="sr-only">Next</span>
//                 </a>
//               </div>
//             </div>
//             <br />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CadLab;
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CadLab = ({ title, description, images }) => {
  return (
    <div id="cad-lab" className="tabcontent">
      <div className="mx-auto px-4 py-6">
        <div className="row flex justify-center">
          <div className="col-md-12">
            <h2 className="text-blue-700 text-2xl font-bold mb-4">{title}</h2>
            <div className="animated fadeInRight">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="pr-3">
                      <i className="fa fa-hand-o-right text-black"></i>
                    </td>
                    <td>
                      <p className="justify text-black text-lg">
                        <em>{description}</em>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <div className="container">
              <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image.src} alt={image.alt} className="w-full" />
                    <div className="carousel-caption">
                      <h3>{image.captionTitle}</h3>
                      <p>{image.captionText}</p>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadLab;
