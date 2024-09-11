import React from 'react';
import './Carousel.css'; // Import custom styles for the animation

const Carousel = () => {
  return (
    <div className="relative h-48 overflow-hidden bg-blue-900">
      {/* Marquee content */}
      <div className="marqueeCarousel">
        <div className="text-white text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl">Geometric Dimensioning and Tolerancing</h2>
          <p className="text-sm sm:text-md md:text-lg">10/02/2025 - 14/02/2025</p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">Silver</h3>
        </div>
        <div className="border-t border-white w-1/6 mx-auto mt-4"></div>

        {/* Additional moving content */}
        <div className="text-white text-center mt-8">
          <h2 className="text-lg sm:text-xl md:text-2xl">Additional Course: Advanced Tolerancing</h2>
          <p className="text-sm sm:text-md md:text-lg">17/02/2025 - 21/02/2025</p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">Gold</h3>
        </div>
        <div className="border-t border-white w-1/6 mx-auto mt-4"></div>
      </div>
    </div>
  );
};

export default Carousel;
