  import React from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Autoplay } from "swiper/modules";
  import "swiper/css";

  import img1 from "../assets/mb1.jpg";
  import img2 from "../assets/mb2.jpg";
  import img3 from "../assets/mb3.jpg";
  import img4 from "../assets/mb5.jpg";

  const data = {
    slide: [
      { image: img1 },
      { image: img2 },
      { image: img3 },
      { image: img4 },
    ],
  };

  const Mobileslider = () => {
    return (
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        spaceBetween={2}
        centeredSlides={false}
        breakpoints={{
          0: { slidesPerView: 1 },      
          640: { slidesPerView: 3 },    
          768: { slidesPerView: 2 },    
          1024: { slidesPerView: 3 }, 
          1280: { slidesPerView: 4 },   
        }}

        className="mt-4 mb-3"
      >
        {data.slide.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center sm:px-10 px-4">
            <div className="bg-white shadow-lg rounded-lg w-[290px] sm:w-[350px] h-[390px] sm:h-[460px] overflow-hidden">
              <img
                src={item.image}

                className="w-[290px] sm:w-[350px] h-full  object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  export default Mobileslider;
