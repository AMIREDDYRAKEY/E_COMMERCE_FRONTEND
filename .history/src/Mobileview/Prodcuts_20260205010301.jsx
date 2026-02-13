import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="p-3 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-3">Products</h2>

      <div className="grid grid-cols-2 gap-3">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white p-2 rounded-xl shadow cursor-pointer"
            onClick={() => navigate(`/product/${p._id}`)}
          >
            <img src={p.image} alt="" className="h-32 w-full rounded-lg object-cover" />
            <p className="font-semibold text-sm mt-2">{p.title}</p>
            <p className="font-bold text-lg">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
