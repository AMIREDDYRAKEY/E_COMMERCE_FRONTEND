import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Menuitems = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products");
        const allProducts = Array.isArray(data?.products) ? data.products : Array.isArray(data) ? data : [];
        const uniqueCategories = [...new Set(allProducts.map(p => p.category).filter(Boolean))];
        
        // Add a few hardcoded ones at the end to keep the Amazon feel if backend is empty
        const finalCategories = uniqueCategories.length > 0 
          ? uniqueCategories 
          : ["Fresh", "MX Player", "Sell", "Bestsellers", "Mobiles"];

        setCategories(finalCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategories(["Fresh", "MX Player", "Sell", "Bestsellers", "Mobiles"]); // fallback
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="bg-[#232f3e] text-white text-sm font-semibold h-[45px] flex items-center px-4">
      <div className="flex items-center gap-6 w-full overflow-x-auto whitespace-nowrap no-scrollbar">

        {/* All Menu */}
        <div 
          onClick={() => navigate("/products")}
          className="flex items-center gap-2 cursor-pointer border border-transparent hover:border-white px-2 py-1 rounded-sm transition"
        >
          <FaBars />
          <span>All Products</span>
        </div>

        {/* Dynamic Categories */}
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => navigate("/products")}
            className="cursor-pointer border border-transparent hover:border-white px-2 py-1 rounded-sm transition capitalize"
          >
            {category}
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Menuitems;