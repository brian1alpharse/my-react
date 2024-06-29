import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import s1 from '../../../assets/1.jpg';
import s2 from '../../../assets/2.jpg';
import s3 from '../../../assets/3.jpg';
import s4 from '../../../assets/4.jpg';

export default function Slider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="h-full"
      >
        <SwiperSlide className="flex justify-center items-center">
          <img src={s1} alt="Slide 1" className="object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img src={s2} alt="Slide 2" className="object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img src={s3} alt="Slide 3" className="object-contain" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img src={s4} alt="Slide 4" className="object-contain" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
