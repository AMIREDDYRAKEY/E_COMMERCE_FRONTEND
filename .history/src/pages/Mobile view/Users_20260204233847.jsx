import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch, FaCamera, FaMicrophone, FaQrcode,
  FaUserCircle, FaCog, FaBell
} from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import img from "../../assets/flag.jpg";
import img1 from "../../assets/f1.png";
import Bottomnav from "../../Mobileview/Bottomnav";
import { CiLogout } from "react-icons/ci";
const Users = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // token check
  const token = localStorage.getItem("token");

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    const savedPhone = localStorage.getItem("phone");

    if (savedName) setUsername(savedName);
    if (savedPhone) setPhone(savedPhone);

    // if no token => go to register/login
    if (!token) {
      navigate("/users"); // or "/User register"
    }
  }, [token, navigate]);

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("phone");

    setUsername("");
    setPhone("");
 
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
          <div className="px-2 mt-2">

            {/* if token exists show  else register icon */}
            {token ? (
              <button
                onClick={handleLogout}
                className=" text-black text- rounded-xl font-semibold"
              >
                <CiLogout />
              </button>
            ) : (
              <button onClick={() => navigate("/User register")}>
                <FaUserCircle className="text-3xl text-gray-600" />
              </button>
            )}
          </div>

          {/*  show name & phone only if logged in */}
          {token ? (
            <div>
              <p className="font-semibold text-[13px]">
                Hello, {username}
              </p>
              {/* <p className="text-[11px] text-gray-600">
                Phone: {phone}
              </p> */}
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
        <button className="border h-[35px] w-[90px] rounded-full text-[12px]">Orders</button>
        <button className="border h-[35px] w-[90px] rounded-full text-[12px]">Buy again</button>
        <button className="border h-[35px] w-[90px] rounded-full text-[12px]">Accounts</button>
        <button className="border h-[35px] w-[90px] rounded-full text-[12px]">Lists</button>
      </div>

      {/* Orders */}
      <section className="px-4 mt-4 flex-col gap-2">
        <h2 className="font-bold text-lg">Your Orders</h2>
        <p className="text-sm mt-1">Hi! You have no recent orders.</p>

        <button className="w-full border mt-1 py-3 rounded-xl text-[15px] ">
          Return to the Homepage
        </button>
      </section>

      {/* Buy Again */}
      <hr className="mt-5" />
      <section className="px-4 mt-6 flex flex-col gap-2">
        <h2 className="font-bold text-lg">Buy Again</h2>
        <p className="text-sm mt-1">See What Others are reordering on Buy Again</p>

        <button className="w-full border mt-1 py-3 rounded-xl text-[15px] ">
          Vist You Buy Again
        </button>
      </section>

      {/* Keep Shopping */}
      <hr className="mt-5" />
      <section className="px-4 mt-6 ">
        <div className="flex justify-between">
          <h2 className="font-bold text-md">Keep shopping for</h2>
          <div className="text-blue-600 text-[12px]">
            <button>Edit</button> <button> | Browsing history</button>
          </div>
        </div>

        <div className="border rounded-xl flex flex-col justify-start mt-3 p-3 w-[150px]">
          <img src={img1} className="w-[100px] h-[70px]" />
        </div>

        <p className="text-sm mt-2">Men's boxer shorts</p>
        <span className="text-xs text-gray-500">1 viewed</span>
      </section>

      {/* lists */}
      <hr className="mt-5" />
      <section className="px-4 mt-6 flex flex-col gap-2">
        <h2 className="font-bold text-lg">Your Lists</h2>
        <p className="text-sm mt-1">You haven't Created Any lists</p>

        <button className="w-full border mt-1 py-3 rounded-xl text-[15px] ">
          Create a List
        </button>
      </section>

      {/* Menu Bars */}
      <Bottomnav />
    </div>
  );
};

export default Users;
