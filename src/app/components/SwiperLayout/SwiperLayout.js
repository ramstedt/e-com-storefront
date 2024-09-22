'use client';
import Card from '../Card/Card';
import {
  Pagination,
  Mousewheel,
  A11y,
  Autoplay,
  Navigation,
} from 'swiper/modules';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle';
import './swiperlayout.css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

export default function SwiperLayout() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSlides() {
      const res = await fetch('/api/slides.json');
      const data = await res.json();
      const slidesArray = Object.values(data);
      setSlides(slidesArray);
      setLoading(false);
    }

    fetchSlides();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading) return <div>loading</div>;
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Mousewheel, A11y, Autoplay, Navigation]}
      className='mySwiper'
      direction={windowWidth >= 768 ? 'horizontal' : 'vertical'}
      centeredSlides={true}
      freeMode={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      navigation={windowWidth >= 768 ? true : false}
    >
      {slides &&
        slides.map((slide, key) => (
          <SwiperSlide key={key}>
            <Card
              buttonText={slide.buttonText}
              title={slide.title}
              text={slide.text}
              mediaUrl={slide.mediaUrl}
              altText={slide.alt}
              url={slide.url}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
