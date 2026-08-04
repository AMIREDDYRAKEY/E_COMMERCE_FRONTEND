import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Bluetooth = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data } = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/api/products"
        );

        const allProducts = Array.isArray(data?.products)
          ? data.products
          : Array.isArray(data)
            ? data
            : [];

        const bluetoothProducts = allProducts.filter(
          (p) => p.category?.toLowerCase() === "bluetooth"
        );

        setProducts(bluetoothProducts);
      } catch (error) {
        console.error("Error loading bluetooth products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="pb-8 p-4">
      <h1 className="text-lg font-bold">
        Special Offers On Speakers & Bluetooth
      </h1>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mt-5">

        {products.length === 0 ? (
          <p className="col-span-full text-gray-500 text-sm">
            No Bluetooth products found.
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              onClick={() => navigate(`/product/${product._id}`)}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-3 hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={
                  product.image?.startsWith("http")
                    ? product.image
                    : `${import.meta.env.VITE_BACKEND_URL}/uploads/${product.image}`
                }
                className="h-[150px] w-[185px] object-cover rounded-md"
                alt={product.title || product.name}
              />

              <p className="mt-2 text-center text-sm font-medium text-gray-700">
                {product.title || product.name}
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

export default Bluetooth;