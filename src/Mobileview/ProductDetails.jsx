import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaShoppingCart, FaBolt } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`);
        const productData = data?.product || data;
        setProduct(productData);
      } catch (err) {
        console.error("Error loading product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first ❌");
        navigate("/login");
        return;
      }

      await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/cart/add",
        { productId: product._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Added to cart ✅");
      navigate("/cart");
    } catch {
      alert("Failed to add to cart. Please login first ❌");
      navigate("/login");
    }
  };

  const buyNow = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first ❌");
        navigate("/login");
        return;
      }

      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/orders/buynow",
        { productId: product._id, qty: 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Order Placed ✅");
      navigate("/products", { state: { order: res.data.order } });
    } catch {
      alert("Failed to place order. Please login first ❌");
      navigate("/login");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <p className="text-gray-600 text-lg mb-4">Product not found</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-400 px-6 py-2 rounded-full font-semibold"
        >
          Go Back
        </button>
      </div>
    );
  }

  const imageUrl = product.image?.startsWith("http")
    ? product.image
    : `${import.meta.env.VITE_BACKEND_URL}/uploads/${product.image}`;

  return (
    <div className="bg-gray-100 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white p-3 flex items-center gap-3 shadow-sm sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="text-xl">
          <IoIosArrowBack />
        </button>
        <h1 className="font-semibold text-sm line-clamp-1 flex-1">
          {product.title || product.name}
        </h1>
      </div>

      {/* Product Image */}
      <div className="bg-white p-4">
        <img
          src={imageUrl}
          alt={product.title || product.name}
          className="w-full h-72 sm:h-96 object-contain rounded-xl"
        />
      </div>

      {/* Product Info */}
      <div className="bg-white p-4 mt-2 rounded-xl mx-2">
        <h2 className="text-lg font-bold">{product.title || product.name}</h2>

        <div className="flex items-baseline gap-2 mt-2">
          <p className="text-2xl font-bold">₹{product.price}</p>
          {product.originalPrice && (
            <p className="text-sm text-gray-400 line-through">₹{product.originalPrice}</p>
          )}
        </div>

        {product.description && (
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">{product.description}</p>
        )}

        {product.category && (
          <div className="mt-3">
            <span className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-medium">
              {product.category}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2 mt-3">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <p className="text-green-600 font-semibold text-sm">In Stock</p>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          🚚 FREE delivery <span className="font-semibold text-gray-800">within 3-5 days</span>
        </p>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-3 flex gap-3 border-t shadow-lg z-50">
        <button
          onClick={addToCart}
          className="w-1/2 h-[48px] rounded-full border-2 border-yellow-400 font-semibold flex items-center justify-center gap-2 hover:bg-yellow-50 transition"
        >
          <FaShoppingCart className="text-sm" />
          Add to Cart
        </button>

        <button
          onClick={buyNow}
          className="w-1/2 h-[48px] rounded-full bg-yellow-400 font-semibold flex items-center justify-center gap-2 hover:bg-yellow-500 transition"
        >
          <FaBolt className="text-sm" />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
