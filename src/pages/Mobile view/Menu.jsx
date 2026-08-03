import React from "react";
import { FaSearch, FaCamera, FaMicrophone, FaQrcode, FaUserCircle, FaCog, FaBell, } from "react-icons/fa";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import f5 from "../../assets/f5.png";

import p1 from "../../assets/p1.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png";
import p9 from "../../assets/p9.png";
import p10 from "../../assets/p10.png";
import Bottomnav from "../../Mobileview/Bottomnav"
const Menu = () => {
    const leftMenu = [
        { img: f1, name: "Amazon Pay" },
        { img: f2, name: "Mobiles & Electronics" },
        { img: f3, name: "Deals & Savings" },
        { img: f4, name: "Fashion & Beauty" },
        { img: f5, name: "Home & Furniture" },
        { img: p1, name: "Groceries & Pet Supplies" },

    ];

    const topCategories = [
        { img: p3, name: "Mobiles" },
        { img: p4, name: "Fashion" },
        { img: p5, name: "Electronics" },
        { img: p6, name: "Travel" },
        { img: p7, name: "Deals" },
        { img: p8, name: "Home" },
        { img: p9, name: "Everyday Needs" },
        { img: p10, name: "Bills & Recharges" },
        { img: p3, name: "Mobiles" },
        { img: p4, name: "Fashion" },
        { img: p5, name: "Electronics" },
        { img: p6, name: "Travel" },
        { img: p3, name: "Mobiles" },
        { img: p4, name: "Fashion" },
        { img: p5, name: "Electronics" },
        { img: p6, name: "Travel" },
    ];

 const exploreMore = [
    { img: f1, name: "Prime" },
    { img: f2, name: "Prime Video" },
    { img: f3, name: "Business" },
    { img: f4, name: "Customer Service" },
    { img: f5, name: "Budget Picks" },
  ];
    return (
        <div className="bg-white min-h-screen">

            <div className="bg-gradient-to-b from-teal-200 to-teal-400 p-3" >
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

            <div className="grid grid-cols-3 mt-2">

                {/* LEFT SIDE MENU */}
                <div className="bg-gray-100 border-r">
                    {leftMenu.map((item, i) => (
                        <div key={i} className="flex flex-col gap-3 p-4 border-b">
                            <img src={item.img} alt="" className="h-10 w-10" />
                            <p className="text-[12px] font-semibold">{item.name}</p>
                        </div>
                    ))}
                </div>

                {/* RIGHT */}
                <div className="col-span-2 p-3">

                    <h3 className="font-semibold text-[12px] mb-2">Top Categories For You</h3>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {topCategories.map((item, i) => (
                            <div key={i} className="text-center">
                                <img src={item.img} alt="" className="h-7 mx-auto mb-1" />
                                <p className="text-[10px]">{item.name}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="font-semibold text-[12px] mb-2">Explore More</h3>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {exploreMore.map((item, i) => (
                            <div key={i} className="text-center">
                                <img src={item.img} alt="" className="h-9 mx-auto mb-1" />
                                <p className="text-[10px]">{item.name}</p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Nvabar */}
                <Bottomnav/>
            </div>


        </div>
    );
};

export default Menu;
