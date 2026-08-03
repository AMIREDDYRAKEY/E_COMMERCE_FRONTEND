import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation ,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import image from "../assets/i1.jpg";
import img1 from "../assets/slider1.jpg";
import img2 from "../assets/slider2.jpg";
import img3 from "../assets/slider3.jpg";
import img4 from "../assets/slider4.jpg";
import img5 from "../assets/slider5.jpg";
// import img6 from "../assets/slider6.jpg";
import img7 from "../assets/slider7.jpg";
const data = {
  slide: [
    {
      // id: 1,
      // title: "Up to 50% Off",
      // offer: "Electronics Sale",
      image: img1,
    },
     {
      image: img2,
    },
      {
      image: img3,
    },
      {
      image: img4,
    },
       {
      image: img5,
    },
     
       {
      image: img7,
    },
   
  ],
};

const Slider = () => {
  return (
    <Swiper
       modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 1000,          
              disableOnInteraction: true, 
            }}
            
            loop={true}
            slidesPerView={1}
             
      className="  w-full lg:h-[420px] h-[220px]"
    >
      {data.slide.map((item) => (
        <SwiperSlide key={item.id} className="">
          
          {/* Background Image */}
          <img
            src={item.image}
            className="w-full h-[300px] lg:h-[680px] lg:object-fit object-cover lg:mt-[0px] "
          />

          {/*  */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

          {/* Left Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="ml-14 max-w-xl text-white">
              <h2 className="text-4xl font-bold">
                {item.title}
              </h2>
              <p className="text-xl mt-2">
                {item.offer}
              </p>

              <button className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-sm font-semibold">
                Shop now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
