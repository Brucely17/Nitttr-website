import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

const GalleryItem = ({ image, title, subtitle, onClick, isActive }) => (
  <div
    className={`carousel-item ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const galleryItems = [
    { image: '/images/image1.png', title: 'Title 1', subtitle: 'Director' },
    { image: '/images/image2.png', title: 'Title 2', subtitle: 'NITTTR' },
    { image: '/images/image3.png', title: 'Title 3', subtitle: 'NITTTR Campus' },
    { image: '/images/image4.png', title: 'Title 4', subtitle: 'Vande Maataram' },
    { image: '/images/image5.png', title: 'Title 5', subtitle: 'Thamizhanagae' },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [galleryItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  }, [galleryItems.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 10 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    setFullscreenImage(galleryItems[currentIndex].image);
  }, [currentIndex, galleryItems]);

  const handleImageClick = (image, index) => {
    setFullscreenImage(image);
    setCurrentIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <h2 className="categories__title text-2xl md:text-3xl">Gallery</h2>
      <div className="carousel__container">
        {galleryItems.map((item, index) => (
          <GalleryItem
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            onClick={() => handleImageClick(item.image, index)}
            isActive={index === currentIndex}
          />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="carousel__mobile">
        <button
          className="carousel__arrow carousel__arrow--left mr-5"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <GalleryItem
          image={galleryItems[currentIndex].image}
          title={galleryItems[currentIndex].title}
          subtitle={galleryItems[currentIndex].subtitle}
          onClick={() => handleImageClick(galleryItems[currentIndex].image, currentIndex)}
          isActive={true}
        />
        <button
          className="carousel__arrow carousel__arrow--right ml-5"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="carousel__dots">
        {galleryItems.map((_, index) => (
          <span
            key={index}
            className={`carousel__dot ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>

      {/* Fullscreen Image Overlay */}
      {isFullscreen && (
        <div className="fullscreen-overlay active">
          <button className="fullscreen-button fullscreen-exit" onClick={closeFullscreen}>
            &#10005; {/* Exit button symbol */}
          </button>
          <button className="fullscreen-button fullscreen-prev" onClick={prevSlide}>
            &#10094; {/* Back button symbol */}
          </button>
          <img src={fullscreenImage} alt="Fullscreen" />
          <button className="fullscreen-button fullscreen-next" onClick={nextSlide}>
            &#10095; {/* Front button symbol */}
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
