import React from 'react'

const Buyorders = () => {
  return (
    <div>Buyorders</div>
  )
}

export default Buyordersimport React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Buyorders = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // cartItems coming from Cart.jsx
  const cartItems = location.state?.cartItems || [];

  // total
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-lg font-bold">No Product Selected</h2>
        <button
          onClick={() => navigate("/cart")}
          className="mt-3 bg-yellow-400 px-6 py-2 rounded-full font-semibold"
        >
          Go Back to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-3 pb-24">
      <h2 className="text-xl font-bold mb-3">Order Summary</h2>

      {/* Selected Products */}
      {cartItems.map((item) => (
        <div key={item.id} className="bg-white p-3 rounded-xl mb-3 shadow-sm">
          <div className="flex gap-3">
            {/* Image */}
            <div className="h-24 w-24 rounded-xl bg-gray-200 overflow-hidden">
              <img
                src={item.img}
                alt="product"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <p className="font-semibold">{item.title}</p>
              <p className="text-lg font-bold mt-1">₹{item.price}.00</p>
              <p className="text-sm text-gray-600 mt-1">
                Quantity: <span className="font-semibold">{item.qty}</span>
              </p>

              <p className="text-green-600 text-sm mt-1">In stock</p>
            </div>
          </div>
        </div>
      ))}

      {/* Price Details */}
      <div className="bg-white p-3 rounded-xl shadow-sm">
        <p className="font-semibold text-lg">Price Details</p>

        <p className="mt-2 text-sm">
          Items Total:
          <span className="float-right font-semibold">₹{totalAmount}.00</span>
        </p>

        <p className="mt-2 text-sm">
          Delivery:
          <span className="float-right font-semibold text-green-600">FREE</span>
        </p>

        <hr className="my-2" />

        <p className="font-bold text-lg">
          Order Total:
          <span className="float-right">₹{totalAmount}.00</span>
        </p>
      </div>

      {/* Place Order */}
      <button
        className="bg-yellow-400 w-full mt-4 h-[45px] rounded-full font-semibold"
        onClick={() => alert("Order Placed Successfully ✅ (Frontend only)")}
      >
        Place Order
      </button>
    </div>
  );
};

export default Buyorders;
