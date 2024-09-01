'use client';
import Card from '../Card/Card';
import { Pagination, Mousewheel } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiperlayout.css';
export default function SwiperLayout() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Mousewheel]}
      className='mySwiper'
      direction='vertical'
      mousewheel
      centeredSlides={true}
    >
      <SwiperSlide>
        <Card
          buttonText='shop now'
          title='Test title'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          mediaUrl='/images/stock1.jpg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          buttonText='shop now'
          title='Test title'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          mediaUrl='/images/stock2.jpg'
          altText='alt text'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          buttonText='shop now'
          title='Test title'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          mediaUrl='/images/stock3.jpg'
          altText='alt text'
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          buttonText='shop now'
          title='Test title'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          mediaUrl='/videos/video1.mp4'
          altText='alt text'
        />
      </SwiperSlide>
    </Swiper>
  );
}
