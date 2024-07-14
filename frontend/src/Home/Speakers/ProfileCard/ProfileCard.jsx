// import React from 'react'
// import "./ProfileCard.css"
// function ProfileCard({imageUrl,Name,Proficiency,Description}) {
//     const img = document.querySelector("img");
//     const icons = document.querySelector(".icons");
//     img.onclick = function(){
//       this.classList.toggle("active");
//       icons.classList.toggle("active");
//     }
//   return (
//     <div class="profilecontainer">
//     <div class="profilewrapper">
//        <a href="#">
//        <img src={imageUrl} alt={Name}/>
//        </a>
//        <div class="profiletitle">
//           {Name}
//        </div>
//        {/* <div class="profileplace">
//           {Proficiency}
//        </div> */}
//     </div>
//     <div class="profilecontent">
//        <p>
//           {Description}
//        </p>
       
//     </div>
    
//  </div>
//   )
// }

// export default ProfileCard;
import React, { useState } from 'react';
import "./ProfileCard.css"

function ProfileCard({ imageUrl, Name, Proficiency, Description }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="profilecontainer">
      <div className="profilewrapper">
        <a href="#">
          <img src={imageUrl} alt={Name} />
        </a>
        <div className="profiletitle text-md md:text-2xl text-center">{Name}</div>
        < h4 className="profileplace text-sm md:text-lg px-3">{Proficiency}</h4>
      </div>
      <div className="profilecontent">
        <p className={showMore ? 'show-more text-sm md:text-lg p-5 text-justify' : 'show-less text-sm md:text-lg p-5 text-justify'}>{Description}</p>
        {!showMore && (
          <button className="read-more pl-5 mt-5" onClick={() => setShowMore(!showMore)}>
            Read More
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
