import React from "react";
import img1 from "../assets/Pay.jpg";
import img2 from "../assets/d.png"
import img3 from '../assets/d1.png'
import img4 from '../assets/d2.jpg'
import img5 from '../assets/d3.jpg'
const Aplications = () => {
  const shortcuts = [
    { img: img3, name: "Prime Video" },
    { img: img5, name: "Prime Video" },
    { img: img1, name: "Prime Video" },
    { img: img4, name: "Prime Video" },
    { img: img5, name: "Prime Video" },
    { img: img2, name: "Prime Video" },
  ];

  return (
    <div className="bg-white mt-[-20px]">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 snap-x snap-mandatory md:hidden">
          {shortcuts.map((item, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[78px] bg-white rounded-xl px-3 py-2
              flex flex-col items-center  gap-4 text-[11px] shadow-sm"
            >
              <div><img
                src={item.img}
                alt={item.name}
                className="h-[50px] w-[50px] mb-1 object-contain"
              />
              <p className="text-center font-[14px] truncate">{item.name}</p></div>
               <div><img
                src={item.img}
                alt={item.name}
                className="h-[50px] w-[50px] mb-1 object-contain"
              />
              <p className="text-center font-[14px] truncate">{item.name}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aplications;
