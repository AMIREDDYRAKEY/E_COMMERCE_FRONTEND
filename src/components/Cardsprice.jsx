import React from "react";
import img1 from "../assets/b1.png";
import img2 from "../assets/b2.png";
import img3 from "../assets/b3.png";
import img4 from "../assets/b4.png";
import img5 from "../assets/f1.png";

const Cardsprice = () => {
  const data = [
    {
      title: "Continue Shopping Deals",
      products: [
        {
          img: img1,
          name: "Stylish Shoes",
          desc: "Comfortable and trendy running shoes perfect for everyday wear.",
          price: "$49.99",
          link: "#",
        },
      ],
    },
    {
      title: "Continue Shopping Deals",
      products: [
        {
          img: img2,
          name: "Stylish Shoes",
          desc: "Comfortable and trendy running shoes perfect for everyday wear.",
          price: "$49.99",
          link: "#",
        },
      ],
    },
    {
      title: "Continue Shopping Deals",
      products: [
        {
          img: img3,
          name: "Stylish Shoes",
          desc: "Comfortable and trendy running shoes perfect for everyday wear.",
          price: "$49.99",
          link: "#",
        },
      ],
    },
    {
      title: "Continue Shopping Deals",
      products: [
        {
          img: img3,
          name: "Stylish Shoes",
          desc: "Comfortable and trendy running shoes perfect for everyday wear.",
          price: "$49.99",
          link: "#",
        },
      ],
    },
    {
      title: "Continue Shopping Deals",
      products: [
        {
          img: img4,
          name: "Stylish Shoes",
          desc: "Comfortable and trendy running shoes perfect for everyday wear.",
          price: "$49.99",
          link: "#",
        },
      ],
    },
    {
      title: "Continue Shopping Deals",
      products: [
        {
          img: img5,
          name: "Stylish Shoes",
          desc: "Comfortable and trendy running shoes perfect for everyday wear.",
          price: "$49.99",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#E3E6E6] pb-10 mt-[-30px]">
      <div className="px-3 sm:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white w-full max-w-[320px] rounded-md p-4 hover:shadow-lg transition flex flex-col"
            >
              {/* Title */}
              <p className="text-lg font-semibold">{item.title}</p>

              {/* Products */}
              {item.products.map((product, i) => (
                <a key={i} href={product.link} className="flex flex-col mt-2">
                  {/* Image */}
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-contain rounded-md"
                  />
                  <div className="mt-2">
                    {/* Name */}
                    <p className="text-sm font-semibold">{product.name}</p>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mt-1 leading-snug">
                      {product.desc}
                    </p>

                    {/* Price */}
                    <p className="text-sm text-gray-800 font-semibold mt-2">
                      {product.price}
                    </p>
                  </div>
                </a>
              ))}

              {/* See more link */}
              <p className="text-sm text-blue-600 mt-auto hover:underline cursor-pointer">
                See more
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardsprice;
