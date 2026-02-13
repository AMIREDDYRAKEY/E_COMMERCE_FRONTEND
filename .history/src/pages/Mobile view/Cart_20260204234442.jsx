import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiShare2 } from "react-icons/fi";
import { FaSearch, FaCamera, FaMicrophone, FaQrcode } from "react-icons/fa";
import Bottomnav from "../../Mobileview/Bottomnav";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "http://localhost:5000"; // change if needed

  // ✅ Fetch Cart Products from Backend
  const fetchCart = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.get(`${BASE_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCartItems(res.data.cartItems);
    } catch (err) {
      console.log("Fetch Cart Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ✅ Update Qty
  const updateQty = async (id, change) => {
    const item = cartItems.find((x) => x._id === id);
    if (!item) return;

    const newQty = Math.max(1, item.qty + change);

    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `${BASE_URL}/api/cart/update/${id}`,
        { qty: newQty },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // update UI
      setCartItems((items) =>
        items.map((x) => (x._id === id ? { ...x, qty: newQty } : x))
      );
    } catch (err) {
      console.log("Update Qty Error:", err);
    }
  };

  // ✅ Delete Item
  const deleteItem = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${BASE_URL}/api/cart/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCartItems((items) => items.filter((x) => x._id !== id));
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };

  // ✅ Price Calculation
  const itemsTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = 0;
  const promo = itemsTotal * 0.05; // example 5%
  const orderTotal = itemsTotal + delivery - promo;

  return (
    <div className="bg-gray-100 min-h-screen pb-24">
      {/* Search Bar */}
      <div className="bg-gradient-to-b from-teal-200 to-teal-400 p-3">
        <div className="bg-white rounded-full flex items-center px-4 py-2 gap-3 shadow-md">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search or ask a question"
            className="flex-1 outline-none text-sm text-gray-700"
          />
          <FaCamera className="text-gray-600" />
          <FaMicrophone className="text-gray-600" />
          <FaQrcode className="text-gray-700" />
        </div>
      </div>

      {loading && (
        <p className="text-center mt-4 font-semibold text-gray-600">Loading Cart...</p>
      )}

      {/* cart items */}
      {cartItems.map((item) => (
        <div key={item._id} className="bg-white mt-3 p-3">
          <div className="flex gap-3">
            {/* Image */}
            <div className="h-24 w-24 rounded-xl bg-gray-200 overflow-hidden">
              <img
                src={item.image}
                alt="product"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Products */}
            <div className="flex-1">
              <p className="font-semibold">{item.title}</p>

              <p className="text-blue-500 text-sm mt-1">10 days Returnable</p>

              <p className="text-lg font-bold mt-1">₹{item.price}.00</p>

              <p className="text-green-600 text-sm">In stock</p>

              <p className="text-sm mt-1">
                FREE delivery <span className="font-semibold">Fri, 2 Jan</span>
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center border-2 border-yellow-400 rounded-full px-3 py-1 gap-3">
              <button className="text-lg" onClick={() => updateQty(item._id, -1)}>
                −
              </button>

              <span className="font-semibold">{item.qty}</span>

              <button className="text-lg" onClick={() => updateQty(item._id, 1)}>
                +
              </button>
            </div>

            <button
              onClick={() => deleteItem(item._id)}
              className="border rounded-full px-4 py-1 text-[12px]"
            >
              Delete
            </button>

            <button className="border rounded-full px-4 py-1 text-[12px]">
              Save for later
            </button>
          </div>

          <div className="flex gap-3 mt-3">
            <button className="border rounded-full px-4 py-1">
              See more like this
            </button>

            <button className="border rounded-full px-4 py-1 flex items-center gap-1">
              <FiShare2 />
              Share
            </button>
          </div>
        </div>
      ))}

      {/* PRICE  */}
      <div className="bg-white mt-3 p-3">
        <p>
          Items: <span className="float-right">₹{itemsTotal.toFixed(2)}</span>
        </p>
        <p>
          Delivery: <span className="float-right">₹{delivery.toFixed(2)}</span>
        </p>
        <p>
          Total: <span className="float-right">₹{(itemsTotal + delivery).toFixed(2)}</span>
        </p>

        <p className="text-green-600">
          Promotion Applied:{" "}
          <span className="float-right">−₹{promo.toFixed(2)}</span>
        </p>

        <h2 className="font-bold text-lg mt-2">
          Order Total:
          <span className="float-right">₹{orderTotal.toFixed(2)}</span>
        </h2>

        <p className="text-green-700 mt-2 font-semibold">
          ₹{promo.toFixed(2)} saved
        </p>
      </div>

      {/* buy */}
      <div className="bg-yellow-400 text-center h-[45px] w-[300px] ml-3 flex items-center justify-center font-semibold rounded-3xl mt-3">
        Proceed to Buy ({cartItems.length} items)
      </div>

      <Bottomnav />
    </div>
  );
};

export default Cart;
