import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io"
import { FaWallet, FaGift, FaCreditCard, FaHistory } from "react-icons/fa"
import Bottomnav from "../../Mobileview/Bottomnav"

const Wallet = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const username = localStorage.getItem("username") || "Guest"

  const walletFeatures = [
    { icon: <FaWallet className="text-2xl text-teal-600" />, title: "Amazon Pay Balance", desc: "₹0.00", action: "Add Money" },
    { icon: <FaGift className="text-2xl text-orange-500" />, title: "Gift Cards", desc: "Buy & send gift cards", action: "View" },
    { icon: <FaCreditCard className="text-2xl text-blue-600" />, title: "Saved Cards", desc: "Manage payment methods", action: "Manage" },
    { icon: <FaHistory className="text-2xl text-purple-600" />, title: "Transaction History", desc: "View your past transactions", action: "View All" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-4">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate(-1)} className="text-xl">
            <IoIosArrowBack />
          </button>
          <h1 className="text-lg font-bold">Amazon Pay</h1>
        </div>

        <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
          <p className="text-sm opacity-90">Hello, {username}</p>
          <div className="flex justify-between items-center mt-2">
            <div>
              <p className="text-xs opacity-75">Amazon Pay Balance</p>
              <p className="text-2xl font-bold">₹0.00</p>
            </div>
            {token ? (
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition">
                Add Money
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-2 p-4 bg-white mt-2">
        {["Send", "Scan", "Pay Bills", "Recharge"].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
              <span className="text-teal-600 text-xl">
                {["💸", "📷", "📄", "📱"][i]}
              </span>
            </div>
            <span className="text-xs text-gray-700 font-medium">{item}</span>
          </div>
        ))}
      </div>

      {/* Wallet Features */}
      <div className="mt-2">
        {walletFeatures.map((feature, index) => (
          <div key={index} className="bg-white p-4 flex items-center gap-4 border-b border-gray-100">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
              {feature.icon}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">{feature.title}</p>
              <p className="text-xs text-gray-500">{feature.desc}</p>
            </div>
            <button className="text-teal-600 text-sm font-semibold">
              {feature.action}
            </button>
          </div>
        ))}
      </div>

      {/* Offers Section */}
      <div className="bg-white mt-2 p-4">
        <h2 className="font-bold text-md mb-3">Offers & Rewards</h2>
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-100">
          <p className="font-semibold text-sm">🎉 Cashback Offers</p>
          <p className="text-xs text-gray-600 mt-1">
            Get up to ₹100 cashback on your first Amazon Pay transaction!
          </p>
          <button className="mt-3 bg-orange-400 text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-orange-500 transition">
            Explore Offers
          </button>
        </div>
      </div>

      <Bottomnav />
    </div>
  )
}

export default Wallet