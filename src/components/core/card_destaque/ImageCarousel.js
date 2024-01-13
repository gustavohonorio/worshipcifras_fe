// src/components/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import card1 from '../../../assets/img/card_destaque/card1.jpg'
import card2 from '../../../assets/img/card_destaque/card2.jpg'
import card3 from '../../../assets/img/card_destaque/card3.jpg'

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={card1} alt="Image 1" />
      </div>
      <div>
        <img src={card2} alt="Image 2" />
      </div>
      <div>
        <img src={card3} alt="Image 2" />
      </div>
    </Slider>
  );
};

export default ImageCarousel;
