import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/f1.png";
import img2 from "../assets/f2.png";
import img3 from "../assets/f3.png";
import img4 from "../assets/f5.png";

const data = {
  slide: [
    { img: img1 }, { img: img2 }, { img: img2 },
    { img: img3 }, { img: img4 }, { img: img1 },
    { img: img1 }, { img: img2 }, { img: img2 },
    { img: img3 }, { img: img4 },
  ],
};

const Fashionslider = () => {
  return (
    <div className="bg-white px-4 py-2 w-[98%] lg:ml-[12px] group overflow-hidden">

      <h2 className="text-[18px] lg:text-[20px] font-semibold lg:ml-6 mb-2">
        Best Sellers in Clothing & Accessories
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        loop
        grabCursor
        allowTouchMove
        spaceBetween={8}

        /* ⭐ RESPONSIVE SLIDES */
        breakpoints={{
          0:   { slidesPerView: 2, spaceBetween: 6 },   // small phones
          480: { slidesPerView: 3, spaceBetween: 6 },   // phones
          640: { slidesPerView: 4, spaceBetween: 8 },   // tablets
          1024:{ slidesPerView: 5, spaceBetween: 10 },  // laptops
          1280:{ slidesPerView: 6, spaceBetween: 10 },  // large screens
        }}

        className="
          h-[160px] sm:h-[190px]

          [&_.swiper-button-prev]:opacity-0
          [&_.swiper-button-next]:opacity-0
          group-hover:[&_.swiper-button-prev]:opacity-100
          group-hover:[&_.swiper-button-next]:opacity-100

          [&_.swiper-button-prev]:transition-opacity
          [&_.swiper-button-next]:transition-opacity

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

          /* hide nav buttons on mobile */
          max-md:[&_.swiper-button-prev]:hidden
          max-md:[&_.swiper-button-next]:hidden
        "
      >
        {data.slide.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={item.img}
              alt="product"
              className="
                h-[130px] sm:h-[150px]
                w-full max-w-[220px]
                object-contain cursor-pointer
              "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Fashionslider;
