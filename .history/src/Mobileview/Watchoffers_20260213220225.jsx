import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Watchoffers = () => {
  const [products, setProducts] = useState([]);
  const navigate=useNavigate('')

  useEffect(() => {
    fetchWatchProducts();
  }, []);

  const fetchWatchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/products");
  
      console.log("API Response:", data);
  
      const allProducts = Array.isArray(data?.products)
        ? data.products
        : Array.isArray(data)
        ? data
        : [];
  
      const watches = allProducts.filter(
        (p) => p.category?.toLowerCase() === "watches"
      );
  
      setProducts(watches);
    } catch (error) {
      console.error("Error loading watches:", error);
    }
  };
  

  return (
    <div className="pb-[30px] p-4">
      <h1 className="text-md font-bold">
        Special Offers On Watches
      </h1>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mt-5">
        {products.map((product) => (
          <a
            key={product._id}
            href="#"
            className="flex flex-col items-center"
          >
          <button onClick={()=>navigate('/products')}>  <img
              src={`http://localhost:5000/uploads/${product.image}`}
              className="h-[150px] w-[185px] object-cover rounded-md"
              alt={product.name}
            /></button>

            <p className="mt-2 text-center text-sm font-medium text-gray-700">
              {product.name}
            </p>

            <p className="text-black text-sm font-bold">
              ₹{product.price}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-5">
        <a href="#" className="text-sm text-blue-600 hover:underline cursor-pointer">
          See more
        </a>
      </div>
    </div>
  );
};

export default Watchoffers;
