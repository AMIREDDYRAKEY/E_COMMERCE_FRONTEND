import React from "react";
import { FaHome, FaUser, FaWallet, FaShoppingCart, FaBars } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Bottomnav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isActive = (path) =>
    pathname === path ? "text-teal-600 font-semibold" : "text-gray-700";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 text-sm z-50">

      <button onClick={() => navigate("/")} className={`flex flex-col items-center ${isActive("/")}`}>
        <FaHome />
        Home
      </button>

      <button onClick={() => navigate("/users")} className={`flex flex-col items-center ${isActive("/users")}`}>
        <FaUser />
        You
      </button>

      <button onClick={() => navigate("/wallet")} className={`flex flex-col items-center ${isActive("/wallet")}`}>
        <FaWallet />
        Wallet
      </button>

      <button onClick={() => navigate("/cart")} className={`flex flex-col items-center ${isActive("/cart")}`}>
        <FaShoppingCart />
        Cart
      </button>

      <button onClick={() => navigate("/menu")} className={`flex flex-col items-center ${isActive("/menu")}`}>
        <FaBars />
        Menu
      </button>

    </div>
  );
};

export default Bottomnav;
