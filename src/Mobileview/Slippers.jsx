import React from "react";
import img1 from "../assets/s1.jpg";
import img2 from "../assets/s2.jpg";
import img3 from "../assets/s3.jpg";
import img4 from "../assets/s4.jpg";
 

const Slippers = () => {

  const data = [
    { img: img1, name: " Shoes & footwear", price: "₹1,499",  },
    { img: img2, name: " Shoes & footwear", price: "₹1,499",  },
    { img: img3, name: " Shoes & footwear", price: "₹1,499",  },
    { img: img4, name: " Shoes & footwear", price: "₹1,499",  },
 
  ];

  return (
    <div className="pb-[90px] p-4">
       <h1 className="text-md font-bold  ">
                Special Offers On FootWears
            </h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mt-5">

        {data.map((product, index) => (
          <a
            key={index}
            href={ "#"}
            className="flex flex-col items-center"
          >

            <img
              src={product.img}
              className="h-[150px] w-[185px] object-fit rounded-md"
            />

            <p className="mt-2 text-center text-sm font-medium text-gray-700">
              {product.name}
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

export default Slippers;
