import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { DataBannerNike } from "../../../Data/DataBannerNikeFull";

const BannerNike = () => {
  return (
    <article>
      <Swiper
        pagination={true}
        loop={true}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper h-[70vh] w-[100%] "
      >
        {DataBannerNike.map((e, i) => (
          <SwiperSlide key={i} className="relative ">
            <img
              c
              className="h-[100%]  object-cover  w-[100%] "
              src={e.link}
              alt=""
            />
            <div className="absolute bottom-28 text-center   text-white  ">
              <h2 className="text-7xl font-[900] font-Archivo">{e.name}</h2>
              <p className="font-light text-sm py-5 text-gray-200">
                {e.tittle}
              </p>
              <div className="flex-center w-[100vw] ">
                <button className="text-gray-900 bg-white py-2 px-6 rounded-3xl border-none outline-none">
                  Shop
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default BannerNike;
