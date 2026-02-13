import React, { useEffect, useState } from "react";
import axios from "axios";

const Bluetooth = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchBluetoothProducts();
  }, []);

  const fetchBluetoothProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/products");

      // filter footwear products
      const footwear = data.products.filter(
        (p) => p.category?.toLowerCase() === "footwear"
      );

      setProducts(footwear);
    } catch (error) {
      console.error("Error loading footwear:", error);
    }
  };

  return (
    <div className="pb-[30px] p-4">
      <h1 className="text-md font-bold">
        Special Offers On Speakers & Bluetooth
      </h1>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mt-5">

        {products.map((product) => (
          <a
            key={product._id}
            href="#"
            className="flex flex-col justify-center items-center"
          >
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              className="h-[150px] w-[185px] object-cover rounded-md"
              alt={product.name}
            />

            <p className="mt-2 text-center text-sm font-medium text-gray-700">
              {product.name}
            </p>

            <p className="text-green-600 text-sm font-semibold">
              {product.status}
            </p>

            <p className="text-black text-sm font-bold">
              ₹{product.price}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-5">
        <a href="#" className="text-sm text-blue-600 hover:underline cursor-pointer mt-3">
          See more
        </a>
      </div>
    </div>
  );
};

export default Bluetooth;
