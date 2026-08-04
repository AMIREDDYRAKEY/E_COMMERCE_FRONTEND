import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch, FaCamera, FaMicrophone, FaQrcode,
  FaUserCircle, FaCog, FaBell, FaBoxOpen, FaHistory, FaListAlt
} from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import img from "../../assets/flag.jpg";
import img1 from "../../assets/f1.png";
import Bottomnav from "../../Mobileview/Bottomnav";
import { CiLogout } from "react-icons/ci";

const Users = () => {
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
  const [phone, setPhone] = useState(() => localStorage.getItem("phone") || "");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/users"); 
    }
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("phone");
    setUsername("");
    setPhone("");
    navigate("/");
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-[80px] lg:pb-0">
      
      {/* =========================================
          DESKTOP VIEW (hidden on mobile)
      ========================================= */}
      <div className="hidden lg:block w-full min-h-screen">
        {/* Desktop Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 shadow-md flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold tracking-wider cursor-pointer" onClick={() => navigate("/")}>
              E-COMMERCE
            </h1>
            <div className="bg-white/20 px-4 py-2 rounded-lg flex items-center gap-2 w-96 backdrop-blur-sm">
              <FaSearch className="text-white/80" />
              <input type="text" placeholder="Search orders, lists, and more..." className="bg-transparent outline-none w-full text-white placeholder-white/80" />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={img} alt="flag" className="h-4 w-6 rounded-sm" />
              <span className="font-medium">EN</span>
            </div>
            <button onClick={() => navigate("/notifications")} className="hover:text-yellow-400 transition">
              <FaBell className="text-xl" />
            </button>
            <button className="hover:text-yellow-400 transition">
              <FaCog className="text-xl" />
            </button>
            
            <div className="flex items-center gap-3 ml-4 border-l border-white/30 pl-6">
              {token ? (
                <>
                  <div className="text-right">
                    <p className="text-xs text-blue-200">Hello,</p>
                    <p className="font-bold">{username}</p>
                  </div>
                  <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-medium transition shadow-sm">
                    Logout
                  </button>
                </>
              ) : (
                <button onClick={() => navigate("/login")} className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-6 py-2 rounded-lg font-bold transition shadow-sm">
                  Login / Register
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Main Content */}
        <div className="max-w-7xl mx-auto p-8 mt-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Your Account</h2>
            <p className="text-gray-500 font-medium">Manage your orders, lists, and preferences</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Orders Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaBoxOpen className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">Your Orders</h3>
                  <p className="text-gray-500 text-sm">Track, return, or buy things again</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-50 text-sm text-gray-600">
                You have no recent orders.
              </div>
            </div>

            {/* Buy Again Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-green-50 text-green-600 rounded-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <FaHistory className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">Buy Again</h3>
                  <p className="text-gray-500 text-sm">See what others are reordering</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-4">
                <img src={img1} className="w-16 h-12 object-contain bg-gray-50 rounded" alt="Item" />
                <div>
                  <p className="text-sm font-medium">Men's boxer shorts</p>
                  <p className="text-xs text-gray-400">Purchased 2 months ago</p>
                </div>
              </div>
            </div>

            {/* Lists Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-purple-50 text-purple-600 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <FaListAlt className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">Your Lists</h3>
                  <p className="text-gray-500 text-sm">View, modify, and share your lists</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-50 text-sm text-gray-600">
                <button className="text-blue-600 font-medium hover:underline">Create a new List</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE VIEW (hidden on desktop)
      ========================================= */}
      <div className="lg:hidden">
        {/* Existing mobile code here */}
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

        {/* profile */}
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-2">
            <div className=" mt-2">
              {token ? (
                <button
                  onClick={handleLogout}
                  className=" text-black text-[25px] rounded-xl font-semibold"
                >
                  <CiLogout />
                </button>
              ) : (
                <button onClick={() => navigate("/User register")}>
                  <FaUserCircle className="text-3xl text-gray-600" />
                </button>
              )}
            </div>

            {token ? (
              <div>
                <p className="font-semibold text-[10px] w-[90px] ml-3">
                  Hello, {username}
                </p>
              </div>
            ) : (
              <p className="font-semibold text-[13px]">
                Hello, Guest
              </p>
            )}
          </div>

          <div className="flex items-center gap-4 text-xl">
            <div><FaCog className="text-[18px]" /></div>
            <div>
              <button onClick={() => navigate("/notifications")}>
                <FaBell className="text-[18px]" />
              </button>
            </div>
            <img src={img} alt="" className="h-4 w-7 object-fit" />
            <span className="text-sm font-bold">EN</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-evenly gap-1 px-1 mt-3">
          <button className="border bg-white shadow-sm h-[35px] w-[90px] rounded-full text-[12px] font-medium">Orders</button>
          <button className="border bg-white shadow-sm h-[35px] w-[90px] rounded-full text-[12px] font-medium">Buy again</button>
          <button className="border bg-white shadow-sm h-[35px] w-[90px] rounded-full text-[12px] font-medium">Accounts</button>
          <button className="border bg-white shadow-sm h-[35px] w-[90px] rounded-full text-[12px] font-medium">Lists</button>
        </div>

        {/* Orders */}
        <section className="px-4 mt-4 flex-col gap-2 bg-white p-4 mx-2 rounded-xl shadow-sm">
          <h2 className="font-bold text-lg">Your Orders</h2>
          <p className="text-sm mt-1 text-gray-500">Hi! You have no recent orders.</p>
          <button onClick={() => navigate("/")} className="w-full border mt-3 py-2 rounded-xl text-sm font-medium hover:bg-gray-50">
            Return to the Homepage
          </button>
        </section>

        {/* Buy Again */}
        <section className="px-4 mt-4 flex flex-col gap-2 bg-white p-4 mx-2 rounded-xl shadow-sm">
          <h2 className="font-bold text-lg">Buy Again</h2>
          <p className="text-sm mt-1 text-gray-500">See what others are reordering</p>
          <button className="w-full border mt-3 py-2 rounded-xl text-sm font-medium hover:bg-gray-50">
            Visit Your Buy Again
          </button>
        </section>

        {/* Keep Shopping */}
        <section className="px-4 mt-4 bg-white p-4 mx-2 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-md">Keep shopping for</h2>
            <div className="text-blue-600 text-[12px] font-medium">
              <button>Edit</button> <span className="text-gray-300 mx-1">|</span> <button>History</button>
            </div>
          </div>

          <div className="border rounded-xl flex items-center justify-center p-3 w-[120px] h-[100px]">
            <img src={img1} className="max-w-full max-h-full object-contain" />
          </div>

          <p className="text-sm mt-2 font-medium">Men's boxer shorts</p>
          <span className="text-xs text-gray-500">1 viewed</span>
        </section>

        {/* lists */}
        <section className="px-4 mt-4 flex flex-col gap-2 bg-white p-4 mx-2 rounded-xl shadow-sm mb-4">
          <h2 className="font-bold text-lg">Your Lists</h2>
          <p className="text-sm mt-1 text-gray-500">You haven't created any lists</p>
          <button className="w-full border mt-3 py-2 rounded-xl text-sm font-medium hover:bg-gray-50">
            Create a List
          </button>
        </section>

        {/* Menu Bars */}
        <Bottomnav />
      </div>
    </div>
  );
};

export default Users;
