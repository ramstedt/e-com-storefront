"use client";
import Card from "../Card/Card";
import { Navigation, Pagination, Mousewheel, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiperlayout.css";
export default function SwiperLayout() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Mousewheel]}
      className="mySwiper"
      direction="vertical"
      mousewheel
    >
      <SwiperSlide>
        <Card
          buttonText="shop now"
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imageUrl="/images/stock1.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          buttonText="shop now"
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imageUrl="/images/stock2.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          buttonText="shop now"
          title="Test title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imageUrl="/images/stock3.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}
