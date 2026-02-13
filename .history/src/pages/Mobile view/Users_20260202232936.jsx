import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaCamera, FaMicrophone, FaQrcode, FaUserCircle, FaCog, FaBell } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import img from "../../assets/flag.jpg";
import img1 from "../../assets/f1.png";
import Bottomnav from "../../Mobileview/Bottomnav";

const Users = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) setUsername(savedName);
  }, []);

  return (
    <div className=" pb-[80px]">
      <div className="bg-gradient-to-b from-teal-200 to-teal-400 p-3">
        {/* Search Bar */}
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
          {/* ⚠️ route correct cheyyi */}
          <button onClick={() => navigate("/User register")}>
            <FaUserCircle className="text-3xl text-gray-600" />
          </button>

          <p className="font-semibold text-[13px]">
            Hello, {username || "Guest"}
          </p>
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
            {/* Orders  */}
            <section className="px-4 mt-4 flex-col gap-2">
                <h2 className="font-bold text-lg">Your Orders</h2>
                <p className="text-sm mt-1">Hi! You have no recent orders.</p>

                <button className="w-full border mt-1 py-3 rounded-xl text-[15px] ">
                    Return to the Homepage
                </button>
            </section>
            {/* Buy Again */}
            <hr className="mt-5" />
            <section className="px-4 mt-6 flex  flex-col gap-2">
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
                    <div className="text-blue-600 text-[12px]"><button>Edit</button> <button> | Browsing history</button></div>
                </div>

                <div className="border rounded-xl flex flex-col justify-start mt-3 p-3 w-[150px]">
                    <img
                        src={img1}

                        className="w-[100px] h-[70px]"
                    />

                </div>
                <p className="text-sm mt-2">Men's boxer shorts</p>
                <span className="text-xs text-gray-500">1 viewed</span>
            </section>
            {/* lists */}
            <hr className="mt-5" />
            <section className="px-4 mt-6 flex  flex-col gap-2">
                <h2 className="font-bold text-lg">Your Lists</h2>
                <p className="text-sm mt-1">You haven't  Created Any lists</p>

                <button className="w-full border mt-1 py-3 rounded-xl text-[15px] ">
                    Create a List
                </button>
            </section>
            {/* Account */}
            <hr className="mt-5" />
            <section className="px-4 mt-6 flex flex-col  gap-2">
                <div className="flex justify-between  items-center">
                    <h2 className="font-bold text-lg">Your Account</h2>
                    <div className="text-blue-600 text-[12px]"><button>See all</button> </div>
                </div>
                <div className="flex pb-[20px] gap-3 mt-3 overflow-x-scroll whitespace-nowrap px-2">
                    <button className="border h-[45px] min-w-[110px] rounded-lg text-[12px]">
                        Your Order
                    </button>
                    <button className="border h-[45px] min-w-[110px] rounded-lg text-[12px]">
                        Your Address
                    </button>
                    <button className="border h-[45px] min-w-[130px] rounded-lg text-[12px]">
                        Amazon Pay UPI
                    </button>
                    <button className="border h-[45px] min-w-[110px] rounded-lg text-[12px]">
                        Subscribe
                    </button>
                </div>

            </section>

            {/* Your Diamonds */}
            <hr className="mt-5" />
            <section className="px-4 mt-6 flex flex-col  gap-2">
                <div className="flex justify-between  items-center">
                    <h2 className="font-bold text-lg">Your Diamonds</h2>
                    <div className="text-blue-600 text-[12px]"><button>See all</button> </div>
                </div>
                <div className="flex pb-[20px] gap-3 mt-3 overflow-x-scroll whitespace-nowrap px-2">
                    <button className="border h-[45px] min-w-[110px] rounded-lg text-[12px]">
                        Your Balance
                    </button>
                    <button className="border h-[45px] min-w-[110px] rounded-lg text-[12px]">
                        View Transactions
                    </button>

                </div>

            </section>

            {/* Your Rewards */}
            <hr className="mt-5" />
            <section className="px-4 mt-6 flex flex-col gap-2">

                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-lg">Your Rewards</h2>
                    <button className="text-blue-600 text-[12px]">See all</button>
                </div>

                <div className="border rounded-2xl p-4">

                    <div className="flex justify-between ">

                        <div className="flex flex-col items-center gap- w-1/3">
                            <p className="text-[11px]">Cashback earned</p>
                            <div className="flex items-center gap-1">
                                <RiMoneyRupeeCircleLine className="text-[11px]" />
                                <p className="font-semibold">231</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-1 w-1/3">
                            <p className="text-[11px]">Collected offers</p>
                            <div className="flex items-center gap-1">
                                <RiMoneyRupeeCircleLine className="text-[18px]" />
                                <p className="font-semibold">0</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-1 w-1/3">
                            <p className="text-[11px]">Scratch cards</p>
                            <div className="flex items-center gap-1">
                                <RiMoneyRupeeCircleLine className="text-[18px]" />
                                <p className="font-semibold">0</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            {/* need help */}
            <hr className="mt-5" />
            <section className="px-4 mt-6 flex flex-col  gap-2">
                <div className="flex justify-between  items-center">
                    <h2 className="font-bold text-lg">Need More Help ?</h2>
                    <div className="text-blue-600 text-[12px]"><button>See all</button> </div>
                </div>
                <div className="flex pb-[20px] gap-3 mt-3 overflow-x-scroll whitespace-nowrap px-2">
                    <button className="border h-[45px] min-w-[150px] rounded-lg text-[12px]">
                        Visit Customer Service
                    </button>


                </div>

            </section>
            {/* Menu Bars */}
            <Bottomnav />
        </div>
    );
};

export default Users;
