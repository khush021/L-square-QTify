import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import cn from "classnames";
import s from "./Carousel.module.css";

import "swiper/css";
import "swiper/css/navigation";

export const Carousel = ({ children, id }) => {
  const calculateSlidesPerView = () => {
    const slideWidth = 160;
    const gap = 40;
    const screenWidth = window.innerWidth;
    const totalSlideWidth = slideWidth + gap;
    const slidesPerView = Math.floor(screenWidth / totalSlideWidth);
    return slidesPerView;
  };

  const slidesToShow = calculateSlidesPerView();

  return (
    <>
      <div
        className={cn(`arrow-left-${id} arrow`, s[`arrow-left-${id}`])}
        style={{
          height: "232px",
          display: "flex",
          alignItems: "center",
          paddingRight: '30px'
        }}
      >
        <LeftArrow />
      </div>
      <Swiper
        slidesPerView={slidesToShow}
        navigation={{
          enabled: true,
          nextEl: `.arrow-right-${id}`,
          prevEl: `.arrow-left-${id}`,
        }}
        modules={[Navigation]}
        className={s.mySwiper}
      >
        {children?.map((item, id) => (
          <SwiperSlide key={`${id}#${id}`}>{item}</SwiperSlide>
        ))}
      </Swiper>

      <div
        className={cn(`arrow-right-${id}`, s[`arrow-right-${id}`])}
        style={{
          height: "232px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <RightArrow />
      </div>
    </>
  );
};
