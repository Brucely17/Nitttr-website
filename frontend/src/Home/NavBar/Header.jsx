// import React, { useEffect, useState } from 'react';
// import NavBar from './NavBar';
// import './Header.css';
// import Head from './Head';
// import Announce from '../Intro/Announce';

// const Header = () => {
//   const [isHomePage, setIsHomePage] = useState(false);

//   useEffect(() => {
//     setIsHomePage(window.location.pathname === '/');
//   }, []);

//   return (
//     <>
//       <Head />
      
//       <header className="header__new">
//         {/* Header content */}
//       </header>

//       <div className='new__container'>
//         <NavBar />
//       </div>
      
//       {isHomePage && (
//         <div className='video__container'>
//           <video autoPlay loop muted className='background__video h-96'>
//             <source src="/images/new.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <Announce />
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import './Header.css';
import Head from './Head';
import Announce from '../Intro/Announce';

const Header = () => {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/');
  }, []);

  return (
    <>
      <Head />
      <header className="header__new">
        {/* Header content */}
      </header>
      <div className="new__container">
        <NavBar />
      </div>
      {isHomePage && (
        <div className="video__container">
          <video autoPlay loop muted className="background__video h-97">
            <source src="/images/NITTTR Chennai.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Announce />
        </div>
      )}
    </>
  );
};

export default Header;
