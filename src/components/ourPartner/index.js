import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const sliderSettings = {
  dots: false, // Hide navigation dots
  infinite: true, // Enable infinite scrolling
  speed: 300, // Animation speed
  slidesToShow: 4, // Number of images to display
  slidesToScroll: 1, // Number of images to scroll
  autoplay: true, // Enable automatic scrolling
  autoplaySpeed: 4000, // Delay between scrolls (ms)
  responsive: [
    {
      breakpoint: 768, // Adjust for smaller screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PartnerContainer = ({ imgName }) => (
  <div className="image-container">
    <img src={process.env.PUBLIC_URL + "assets/image/" + imgName} alt="img" />
  </div>
);

export function OurPartner() {
  return (
    <Slider {...sliderSettings}>
      <PartnerContainer imgName="accelalpha.png" />
      <PartnerContainer imgName="axiom.png" />
      <PartnerContainer imgName="agilian.png" />
      <PartnerContainer imgName="socialwise.png" />
    </Slider>
  );
}
