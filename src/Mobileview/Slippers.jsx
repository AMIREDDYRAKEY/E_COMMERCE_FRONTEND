import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Slippers = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchFootwearProducts = async () => {
    try {
      const { data } = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products");

      const allProducts = Array.isArray(data?.products)
        ? data.products
        : Array.isArray(data)
          ? data
          : [];

      const footwear = allProducts.filter(
        (p) => p.category?.toLowerCase() === "footwear"
      );

      setProducts(footwear);
    } catch (error) {
      console.error("Error loading footwear:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchFootwearProducts();
  }, []);


  return (
    <div className="pb-[90px] p-4">
      <h1 className="text-md font-bold">
        Special Offers On FootWears
      </h1>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mt-5">
        {products.length === 0 ? (
          <p className="col-span-full text-gray-500 text-sm">
            No footwear products found.
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              onClick={() => navigate(`/product/${product._id}`)}
              className="flex flex-col items-center cursor-pointer hover:shadow-md transition rounded-lg p-2"
            >
              <img
                src={
                  product.image?.startsWith("http")
                    ? product.image
                    : `${import.meta.env.VITE_BACKEND_URL}/uploads/${product.image}`
                }
                className="h-[150px] w-[185px] object-cover rounded-md"
                alt={product.name || product.title}
              />

              <p className="mt-2 text-center text-sm font-medium text-gray-700">
                {product.name || product.title}
              </p>

              <p className="text-black text-sm font-bold">
                ₹{product.price}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="mt-5">
        <button
          onClick={() => navigate("/products")}
          className="text-sm text-blue-600 hover:underline cursor-pointer"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default Slippers;
