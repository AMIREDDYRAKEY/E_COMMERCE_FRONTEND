import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Bottomnav from "./Bottomnav";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/products");
        const allProducts = Array.isArray(data?.products)
          ? data.products
          : Array.isArray(data)
            ? data
            : [];
        setProducts(allProducts);
      } catch (err) {
        console.error("Error loading products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-3 bg-gray-100 min-h-screen pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => navigate(-1)} className="text-xl">
          <IoIosArrowBack />
        </button>
        <h2 className="text-xl font-bold">All Products</h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white p-2 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/product/${p._id}`)}
            >
              <img
                src={
                  p.image?.startsWith("http")
                    ? p.image
                    : `http://localhost:5000/uploads/${p.image}`
                }
                alt={p.title || p.name}
                className="h-32 sm:h-40 w-full rounded-lg object-cover"
              />
              <p className="font-semibold text-sm mt-2 line-clamp-2">
                {p.title || p.name}
              </p>
              <p className="font-bold text-lg mt-1">₹{p.price}</p>
              {p.category && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  {p.category}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      <Bottomnav />
    </div>
  );
};

export default Products;
