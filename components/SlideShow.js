import React from 'react'
import Slider from "react-slick";
import a from '../assets/1.jpg'
import b from '../assets/2.jpg'
import c from '../assets/3.jpg'
import d from '../assets/4.jpg'
import e from '../assets/5.jpg'
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function SlideShow() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='mb-8 relativ'>
      
            <Slider {...settings}>
      <div>
          <Image src={b} alt="img b" />
          </div>
          <div>
          <Image src={a} alt="img a" />
          </div>
          <div>
          <Image src={c} alt="img c" />
          </div>
          <div>
          <Image src={d} alt="img d" />
          </div>
          <div>
          <Image src={e} alt="img e" />
      </div>
    
    </Slider>
    </div>
  )
}

export default SlideShow
