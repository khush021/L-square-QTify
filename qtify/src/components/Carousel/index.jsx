import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";
import cn from "classnames";
import s from "./Carousel.module.css";

import "swiper/css";
import "swiper/css/navigation";

export const Carousel = ({ children, type }) => {
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
        className={cn(
          `arrow-left-${type} arrow`,
          s[`arrow-left-${type}`]
        )}
      >
        <LeftArrow />
      </div>
      <Swiper
        slidesPerView={slidesToShow}
        navigation={{
          enabled: true,
          nextEl: `.arrow-right-${type}`,
          prevEl: `.arrow-left-${type}`,
        }}
        // navigation={true}
        modules={[Navigation]}
        className={s.mySwiper}
      >
        {children?.map((item, id) => (
          <SwiperSlide key={`${id}#${type}`}>{item}</SwiperSlide>
        ))}
      </Swiper>

      <div className={cn(`arrow-right-${type}`, s[`arrow-right-${type}`])}>
        <RightArrow />
      </div>
    </>
  );
};
