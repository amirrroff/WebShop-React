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
import Link from 'next/link';


function SlideShow() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='mb-8 relative '>
      <div className='flex- '>
        <Link href="/shop">
      <button className='border-2 border-black rounded-sm px-16 py-4 mt-36 z-40 ml-10 bg-black text-white absolute sm:mt-48 sm:ml-20 md:ml-48 lg:left-24 lg:mt-72 xl:left-56 2xl:mt-80 2xl:left-48 2xl:px-48 2xl:py-24 2xl:text-xl '>Herren</button>
      </Link>
      <Link href="/shop">
      <button className='border-2 border-black rounded-sm px-16 py-4 mt-36 z-40 ml-72 bg-black text-white absolute sm:mt-48 sm:ml-96 md:right-64 lg:right-72 lg:mt-72 xl:right-96 2xl:mt-80 2xl:right-96 2xl:px-48 2xl:py-24 2xl:text-xl'>Damen</button>
      </Link>
      </div>
      
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
