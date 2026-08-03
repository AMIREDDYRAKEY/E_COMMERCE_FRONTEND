import React from "react";
import img1 from "../assets/Pay.jpg";
import "../App.css";
import img2 from "../assets/d.png"
import img3 from '../assets/d1.png'
const Header = () => {
  const shortcuts = [
    { name: "Pay", img: img1 },
    { name: "Fresh", img: img2 },
    { name: "Bazaar", img: img3 },
    { name: "MX Player", img: img1 },
    { name: "Pharmacy", img: img2 },
    { name: "Deals", img: img3 },
    { name: "Bazaar", img: img2 },
    { name: "MX Player", img: img1 },
    { name: "Pharmacy", img: img2 },
    { name: "Deals", img: img3 },
  ];


  return (
    <div className="bg-gradient-to-b from-red-600 to-red-400 p-5">

      <div className="max-w-5xl mx-auto">

        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 snap-x snap-mandatory md:hidden">
          {shortcuts.map((item, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[78px] bg-white rounded-xl
              px-3 py-2 flex flex-col items-center text-[11px] shadow-sm"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-9 w-9 mb-1 object-contain"
              />
              <p className="text-center leading-tight">{item.name}</p>
            </div>
          ))}
        </div>
        {/* tablet */}
        <div className="hidden md:grid 
  grid-flow-col auto-cols-max 
  gap-2 overflow-x-auto scrollbar-hide pb-1 
  snap-x snap-mandatory"
        >
          {shortcuts.map((item, i) => (
            <div
              key={i}
              className="snap-start bg-white rounded-xl
      md:h-[70px] md:w-[100px]
      lg:px-2 lg:py-3
      shadow-sm flex flex-col items-center justify-center
      md:text-xs lg:text-sm
      hover:shadow-md transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="md:h-7 md:w-7 lg:h-10 lg:w-10 mb-1 object-contain"
              />
              <p className="text-center font-medium">{item.name}</p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Header;
