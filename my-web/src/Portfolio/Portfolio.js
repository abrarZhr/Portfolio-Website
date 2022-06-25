import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Disney from '../images/Disney.jpeg';
import store from '../images/store.jpeg';
import saudi from '../images/saudi.jpeg';
import hype from '../images/hype.jpeg';
import my from '../images/my.jpeg';

import './Portfolio.css';
import "swiper/css";
import Carousel  from 'react-bootstrap/Carousel'


const Portfolio = () => {
  return (

    <div className='Portfolio' id='Portfolio'>
    <div>
        <span>React Projects</span>
        </div>

        <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className='Portfolio-slider' 
        >

        <SwiperSlide>
        <img src={Disney}/>
        </SwiperSlide>

        <SwiperSlide>
        <img src={saudi}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={store}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={hype}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={my}/>
        </SwiperSlide>
      
        </Swiper>


{/* 
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Disney}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={saudi}
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={store}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}










    </div>
    
  )
}

export default Portfolio