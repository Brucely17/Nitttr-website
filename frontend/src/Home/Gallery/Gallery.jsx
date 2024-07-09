
import React from 'react';
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
    </div>
  );
};

export default Gallery;
