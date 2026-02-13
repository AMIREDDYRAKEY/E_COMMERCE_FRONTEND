import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaCamera,
  FaMicrophone,
  FaQrcode,
  FaUserCircle,
  FaCog,
  FaBell,
} from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import img from "../../assets/flag.jpg";
import img1 from "../../assets/f1.png";
import Bottomnav from "../../Mobileview/Bottomnav";

const Users = () => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token")); // ✅ state token
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    const savedToken = localStorage.getItem("token");

    if (savedName) setUsername(savedName);
    if (savedToken) setToken(savedToken);

    // if no token redirect login
    if (!savedToken) navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername("");
    setToken(null);
    navigate("/login");
  };

  return (
    <div className="pb-[80px]">
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
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-semibold"
            >
              Logout
            </button>
          ) : (
            <button onClick={() => navigate("/register")}>
              <FaUserCircle className="text-3xl text-gray-600" />
            </button>
          )}

          <p className="font-semibold text-[13px]">
            Hello, {username || "Guest"}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xl">
          <div>
            <FaCog className="text-[18px]" />
          </div>
          <div>
            <button onClick={() => navigate("/notifications")}>
              <FaBell className="text-[18px]" />
            </button>
          </div>
          <img src={img} alt="" className="h-4 w-7 object-fit" />
          <span className="text-sm font-bold">EN</span>
        </div>
      </div>

      {/* Rest UI */}
      <div className="flex justify-evenly gap-1 px-1 mt-3">
        <button className="border h-[35px] w-[90px] rounded-full text-[12px]">
          Orders
        </button>
        <button className="border h-[35px] w-[90px] rounded-full text-[12px]">
          Buy again
        </button>
        <button className="border h-[35px] w-[90px] rounded-full text-[12px]">
          Accounts
        </button>
        <button className="border h-[35px] w-[90px] rounded-full text-[12px]">
          Lists
        </button>
      </div>

      {/* Keep remaining UI same */}
      <Bottomnav />
    </div>
  );
};

export default Users;
