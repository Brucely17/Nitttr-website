// import React, { useState } from 'react';
// import './Gallery.css';

// const GalleryItem = ({ image, title, subtitle }) => (
//   <div className="carousel-item">
//     <img src={image} alt={title} className="carousel-item__img" />
//     <div className="carousel-item__details">
//       <div className="controls">
//         <span className="carousel-item__details--title">{title}</span>
//         <span className="carousel-item__details--subtitle">{subtitle}</span>
//       </div>
//     </div>
//   </div>
// );

// const Gallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const galleryItems = [
//     {
//       image: '/images/image1.png',
//       subtitle: 'Director'
//     },
//     {
//       image: '/images/image2.png',
//       subtitle: 'NITTTR'
//     },
//     {
//       image: '/images/image3.png',
//       subtitle: 'NITTTR Campus'
//     },
//     {
//       image: '/images/image4.png',
//       subtitle: 'Vande Maataram'
//     },
//     {
//       image: '/images/image5.png',
//       subtitle: 'Thamizhanagae'
//     }
//   ];

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="carousel">
//       <h2 className="categories__title">Gallery</h2>
//       <div className="carousel__container">
//         {galleryItems.map((item, index) => (
//           <GalleryItem
//             key={index}
//             image={item.image}
//             title={item.title}
//             subtitle={item.subtitle}
//           />
//         ))}
//       </div>
//       <div className="carousel__mobile">
//         <button className="carousel__arrow carousel__arrow--left" onClick={handlePrev}>
//           &#10094;
//         </button>
//         <GalleryItem
//           image={galleryItems[currentIndex].image}
//           title={galleryItems[currentIndex].title}
//           subtitle={galleryItems[currentIndex].subtitle}
//         />
//         <button className="carousel__arrow carousel__arrow--right" onClick={handleNext}>
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

const GalleryItem = ({ image, title, subtitle }) => (
  <div className="carousel-item">
    <img src={image} alt={title} className="carousel-item__img" />
    <div className="carousel-item__details">
      <div className="controls">
        <span className="carousel-item__details--title">{title}</span>
        <span className="carousel-item__details--subtitle">{subtitle}</span>
      </div>
    </div>
  </div>
);

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryItems = [
    {
      image: '/images/image1.png',
      subtitle: 'Director'
    },
    {
      image: '/images/image2.png',
      subtitle: 'NITTTR'
    },
    {
      image: '/images/image3.png',
      subtitle: 'NITTTR Campus'
    },
    {
      image: '/images/image4.png',
      subtitle: 'Vande Maataram'
    },
    {
      image: '/images/image5.png',
      subtitle: 'Thamizhanagae'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [galleryItems.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="carousel">
      <h2 className="categories__title">Gallery</h2>
      <div className="carousel__container">
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
      <div className="carousel__mobile">
        <button className="carousel__arrow carousel__arrow--left" onClick={prevSlide}>
          &#10094;
        </button>
        <GalleryItem
          image={galleryItems[currentIndex].image}
          title={galleryItems[currentIndex].title}
          subtitle={galleryItems[currentIndex].subtitle}
        />
        <button className="carousel__arrow carousel__arrow--right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Gallery;