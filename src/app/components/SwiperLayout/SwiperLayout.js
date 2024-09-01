"use client";
import Card from "../Card/Card";
import {
  Pagination,
  Mousewheel,
  A11y,
  Autoplay,
  Navigation,
} from "swiper/modules";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "./swiperlayout.css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function SwiperLayout() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Mousewheel, A11y, Autoplay, Navigation]}
      className="mySwiper"
      direction={windowWidth >= 768 ? "horizontal" : "vertical"}
      centeredSlides={true}
      freeMode={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      navigation={windowWidth >= 768 ? true : false}
    >
      <SwiperSlide>
        <Card
          buttonText="shop now"
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          mediaUrl="/images/stock1.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          buttonText="shop now"
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          mediaUrl="/images/stock2.jpg"
          altText="alt text"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          buttonText="shop now"
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          mediaUrl="/images/stock3.jpg"
          altText="alt text"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          buttonText="shop now"
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          mediaUrl="/videos/video1.mp4"
          altText="alt text"
        />
      </SwiperSlide>
    </Swiper>
  );
}
