import React from "react";
import img1 from "../assets/e1.jpg";
import img2 from "../assets/e2.jpg";
import img3 from "../assets/e3.jpg";
import img4 from "../assets/w4.jpg";
import img5 from "../assets/w5.jpg";

const Bluetooth = () => {

  const data = [
    { img: img1, name: "Special Bluetooths", price: "₹2,399", offer: "40%OFF" },
    { img: img2, name: "Special Bluetooths", price: "₹2,399", offer: "40%OFF" },
    { img: img3, name: "Special Bluetooths", price: "₹2,399", offer: "40%OFF" },
   
  ];

  return (
    <div className="pb-[30px] p-4">
       <h1 className="text-md font-bold  ">
                Special Offers On Speakers & Bluetooth
            </h1>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mt-5">

        {data.map((product, index) => (
          <a
            key={index}
            href={ "#"}
            className="flex flex-col justify-center items-center"
          >

            <img
              src={product.img}
              className="h-[150px] w-[185px] object-fit rounded-md"
            />

            <p className="mt-2 text-center text-sm font-medium text-gray-700">
              {product.name}
            </p>

            <p className="text-green-600 text-sm font-semibold">
              {product.offer}
            </p>

            <p className="text-black text-sm font-bold">
              {product.price}
            </p>

          </a>
        ))}

      </div>
      <div className="mt-5">
        <a href='#' className="text-sm text-blue-600  hover:underline cursor-pointer mt-3">
                See more
              </a>
      </div>
    </div>
  );
};

export default Bluetooth;
