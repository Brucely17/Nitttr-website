import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "./DepDisplay.css";

const departments = [
  {
    name: "Department of Civil and Environmental Engineering",
    image: "/departments/civil.jpg",
    link: "/Departments/Civil",
  },
  {
    name: "Department of Civil",
    image: "/departments/civil.jpg",
    link: "/Departments/Civil",
  },
  // Add more departments as needed
];

const DepDisplay = () => {
  const history = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Slider className="mb-10 " {...settings}>
      {departments.map((department, index) => (
        <div
          key={index}
          className="carousel-slide "
          onClick={() => history(department.link)}
        >
          <img
            src={department.image}
            // alt={department.name}
            className="carousel-image"
          />
          <div className="carousel-caption ">
            <h1 className='text-white gap-2 flex font-bold'>{department.name}</h1>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default DepDisplay;
