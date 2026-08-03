import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/b1.png";
import img2 from "../assets/b2.png";
import img3 from "../assets/b3.png";
import img4 from "../assets/b4.png";

const data = {
  slide: [
    { img: img1 },
    { img: img2 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img1 },
  ],
};

const Bikeslider = () => {
  return (
    <div className="bg-white w-[98%] group overflow-hidden ml-[10px]">
      <h2 className="text-[20px] font-semibold lg:ml-6 mt-2 ">
        Best Sellers in Clothing & Accessories
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        spaceBetween={6}
        allowTouchMove
        grabCursor
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 6 },
          480: { slidesPerView: 3, spaceBetween: 6 },
          640: { slidesPerView: 4, spaceBetween: 8 },
          1024: { slidesPerView: 5, spaceBetween: 10 },
          1280: { slidesPerView: 6, spaceBetween: 10 },
        }}
        className="
              h-[170px]
    
              [&_.swiper-button-prev]:opacity-0
              [&_.swiper-button-next]:opacity-0
              group-hover:[&_.swiper-button-prev]:opacity-100
              group-hover:[&_.swiper-button-next]:opacity-100
    
              [&_.swiper-button-prev]:transition-opacity
              [&_.swiper-button-next]:transition-opacity
              [&_.swiper-button-prev]:duration-300
              [&_.swiper-button-next]:duration-300
    
              [&_.swiper-button-prev]:w-[34px]
              [&_.swiper-button-next]:w-[34px]
              [&_.swiper-button-prev]:h-[34px]
              [&_.swiper-button-next]:h-[34px]
    
              [&_.swiper-button-prev]:bg-white/90
              [&_.swiper-button-next]:bg-white/90
              [&_.swiper-button-prev]:rounded-full
              [&_.swiper-button-next]:rounded-full
    
              [&_.swiper-button-prev]:text-black
              [&_.swiper-button-next]:text-black
    
              [&_.swiper-button-prev]:left-[6px]
              [&_.swiper-button-next]:right-[6px]
    
              [&_.swiper-button-prev::after]:text-[16px]
              [&_.swiper-button-next::after]:text-[16px]
    
              max-md:[&_.swiper-button-prev]:hidden
              max-md:[&_.swiper-button-next]:hidden
            "
      >
        {data.slide.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center"
          >
            <img
              src={item.img}
              alt="product"
              className="h-[140px] w-full max-w-[220px] object-contain cursor-pointer mt-4"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bikeslider;
