import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductSlider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        watchSlidesProgress={true}
        slidesPerView={7}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
            

            <img src="./" alt="" />


        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductSlider;
