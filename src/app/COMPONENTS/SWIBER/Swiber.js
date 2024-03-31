'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './swiber.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import { Navigation } from 'swiper/modules';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
export default function App() {
  return (
    < >
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='slide1'  >
          <div >
            <h2 >find your own <br></br> happiness <span><img src='/images/leafes.webp' /></span></h2>

            <p  >the best gift for those you love.fresh flower delivery <br></br> daily and around a clock</p>
            <button >shop now</button>
            <div className='socialicons d-flex flex-row align-content-center ' >
              <TwitterIcon className='icons' />
              <FacebookIcon className='icons' />
              <PinterestIcon className='icons' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide2'>
          <div className='flarsal'>
            <div className='innerflarsal  align-content-center align-items-center'>
              <h2>floral gala <span><img src='/images/leafes.webp' /></span></h2>
              <p>the best gift for those you love.fresh flower delivery <br></br> daily and around a clock</p>
              <button>shop now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide3'>
          <div >

            <h2 >find your own <br></br> happiness <span><img src='/images/leafes.webp' /></span></h2>

            <p>the best gift for those you love.fresh flower delivery <br></br> daily and around a clock</p>
            <button>shop now</button>
            <div className='socialicons d-flex flex-row align-content-center ' >
              <TwitterIcon className='icons' />
              <FacebookIcon className='icons' />
              <PinterestIcon className='icons' />
            </div></div>

        </SwiperSlide>

      </Swiper>
    </>
  );
}
