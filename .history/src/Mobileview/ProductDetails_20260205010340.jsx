import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  const addToCart = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/cart/add",
        { productId: product._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Added to cart ✅");
      navigate("/cart");
    } catch (err) {
      alert("Login required ❌");
    }
  };

  const buyNow = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/orders/buynow",
        { productId: product._id, qty: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Order Placed ✅");
      navigate("/buyproducts", { state: { order: res.data.order } });
    } catch (err) {
      alert("Login required ❌");
    }
  };

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-3 pb-24">
      <img src={product.image} alt="" className="w-full h-72 object-cover rounded-xl" />

      <div className="bg-white p-3 rounded-xl mt-3">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-xl font-bold mt-1">₹{product.price}</p>

        <p className="text-sm text-gray-600 mt-2">{product.description}</p>

        <p className="text-green-600 font-semibold mt-2">In Stock</p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-3 flex gap-3 border-t">
        <button
          onClick={addToCart}
          className="w-1/2 h-[45px] rounded-full border font-semibold"
        >
          Add to Cart
        </button>

        <button
          onClick={buyNow}
          className="w-1/2 h-[45px] rounded-full bg-yellow-400 font-semibold"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
