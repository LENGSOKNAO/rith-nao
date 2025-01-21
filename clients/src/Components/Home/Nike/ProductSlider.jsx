import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  const shoes = [
    {
      id: "1",
      name: "jordan1",
      link: "./src/assets/ProductSlider/nike-just-do-it (8).jpg",
    },
    {
      id: "2",
      name: "dunk",
      link: "./src/assets/ProductSlider/nike-just-do-it (9).jpg",
    },
    {
      id: "3",
      name: "force",
      link: "./src/assets/ProductSlider/nike-just-do-it (10).jpg",
    },
    {
      id: "4",
      name: "vomero",
      link: "./src/assets/ProductSlider/nike-just-do-it (11).jpg",
    },
    {
      id: "5",
      name: "max",
      link: "./src/assets/ProductSlider/nike-just-do-it (13).jpg",
    },
    {
      id: "6",
      name: "blazer",
      link: "./src/assets/ProductSlider/nike-just-do-it (14).jpg",
    },
    {
      id: "7",
      name: "blazer",
      link: "./src/assets/ProductSlider/nike-just-do-it (14).jpg",
    },
  ];

  return (
    <>
      {/* screen sm */}
      <div className="  sm:hidden md:hidden lg:hidden xl:hidden">
        <div className="mx-10 my-[100px] ">
          <h2 className="text-2xl font-Archivo py-2 px-3 ">SHOP BY CLASSICE</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            watchSlidesProgress={true}
            slidesPerView={1}
            navigation={true}
            loop={true}
            className="mySwiper"
          >
            {shoes.slice(0, 7).map((e, i) => (
              <SwiperSlide key={i}>
                <Link to={`/prodcut/${e.name}`}>
                  <img className="px-3 object-cover" src={e.link} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* screen sm */}
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden">
        <div className="mx-10 my-[100px] ">
          <h2 className="text-3xl font-Archivo py-2 px-3 ">SHOP BY CLASSICE</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            watchSlidesProgress={true}
            slidesPerView={1}
            navigation={true}
            loop={true}
            className="mySwiper"
          >
            {shoes.slice(0, 7).map((e, i) => (
              <SwiperSlide key={i}>
                <Link to={`/prodcut/${e.name}`}>
                  <img className="px-3 object-cover" src={e.link} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* screen md */}
      <div className="hidden sm:hidden md:block lg:hidden xl:hidden">
        <div className="mx-10 my-[100px] ">
          <h2 className="text-3xl font-Archivo py-2 px-3 ">SHOP BY CLASSICE</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            watchSlidesProgress={true}
            slidesPerView={2}
            navigation={true}
            loop={true}
            className="mySwiper"
          >
            {shoes.slice(0, 7).map((e, i) => (
              <SwiperSlide key={i}>
                <Link to={`/prodcut/${e.name}`}>
                  <img className="px-3 object-cover" src={e.link} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* screen lg */}
      <div className="hidden sm:hidden md:hidden lg:block xl:hidden">
        <div className="mx-10 my-[100px] ">
          <h2 className="text-4xl font-Archivo py-2 px-3 ">SHOP BY CLASSICE</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            watchSlidesProgress={true}
            slidesPerView={3}
            navigation={true}
            loop={true}
            className="mySwiper"
          >
            {shoes.slice(0, 7).map((e, i) => (
              <SwiperSlide key={i}>
                <Link to={`/prodcut/${e.name}`}>
                  <img className="px-3 object-cover" src={e.link} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* screen xl */}
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
        <div className="mx-10 my-[100px] ">
          <h2 className="text-4xl font-Archivo py-2 px-3 ">SHOP BY CLASSICE</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            watchSlidesProgress={true}
            slidesPerView={6}
            navigation={true}
            loop={true}
            className="mySwiper"
          >
            {shoes.slice(0, 7).map((e, i) => (
              <SwiperSlide key={i}>
                <Link to={`/prodcut/${e.name}`}>
                  <img className="px-3 object-cover" src={e.link} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
