// src/CityCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cities = [
  {
    name: "New York",
    image:
      "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
  },
  { name: "Paris", image: "https://via.placeholder.com/300?text=Paris" },
  { name: "Tokyo", image: "https://via.placeholder.com/300?text=Tokyo" },
  { name: "Sydney", image: "https://via.placeholder.com/300?text=Sydney" },
  { name: "London", image: "https://via.placeholder.com/300?text=London" },
];

const CityCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container mx-auto mt-10">
      <Slider {...settings}>
        {cities.map((city, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{city.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "orange",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "orange",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default CityCarousel;
