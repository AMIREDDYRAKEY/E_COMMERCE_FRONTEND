import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaSearch, FaCamera, FaMicrophone, FaQrcode,
  FaUserCircle, FaCog, FaBell, FaBoxOpen, FaHistory, FaListAlt
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import img from "../../assets/flag.jpg";
import Bottomnav from "../../Mobileview/Bottomnav";

const Users = () => {
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
  const [phone, setPhone] = useState(() => localStorage.getItem("phone") || "");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [orders, setOrders] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login"); 
      return;
    }

    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        
        // Fetch products for history/recommendations dynamically
        const prodRes = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`);
        const allProds = Array.isArray(prodRes.data?.products) ? prodRes.data.products : (Array.isArray(prodRes.data) ? prodRes.data : []);
        setRecommendations(allProds.slice(0, 4));

        // Attempt to fetch cart
        try {
          const cartRes = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/cart`, { headers });
          setCartItems(cartRes.data?.items || []);
        } catch (e) {
          console.log("Cart fetch issue:", e);
        }

        // Attempt to fetch orders (assuming endpoint exists, gracefully fallback if not)
        try {
          const orderRes = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, { headers });
          setOrders(Array.isArray(orderRes.data) ? orderRes.data : []);
        } catch (e) {
          console.log("Orders fetch issue:", e);
        }
        
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("phone");
    setUsername("");
    setPhone("");
    navigate("/");
  };

  const renderProductImage = (imgStr) => {
    if (!imgStr) return 'https://via.placeholder.com/150';
    return imgStr.startsWith("http") ? imgStr : `${import.meta.env.VITE_BACKEND_URL}/uploads/${imgStr}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-[80px] lg:pb-0">
      
      {/* =========================================
          DESKTOP VIEW (hidden on mobile)
      ========================================= */}
      <div className="hidden lg:block w-full min-h-screen">
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
                    <p className="font-bold">{username || "User"}</p>
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

        <div className="max-w-7xl mx-auto p-8 mt-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Your Account</h2>
            <p className="text-gray-500 font-medium">Manage your orders, lists, and preferences</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Orders Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group flex flex-col justify-between">
              <div>
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
                  {loading ? "Loading..." : orders.length > 0 ? (
                    <span className="text-blue-600 font-medium">You have {orders.length} active orders</span>
                  ) : "You have no recent orders."}
                </div>
              </div>
            </div>

            {/* Buy Again (Cart/Recs) Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-green-50 text-green-600 rounded-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <FaHistory className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">Buy Again</h3>
                    <p className="text-gray-500 text-sm">See what others are reordering</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-50 flex flex-col gap-3">
                  {loading ? <span className="text-sm">Loading...</span> : recommendations.length > 0 ? (
                    recommendations.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <img src={renderProductImage(item.image)} className="w-12 h-12 object-cover bg-gray-50 rounded shadow-sm" alt="Item" />
                        <div>
                          <p className="text-sm font-medium text-gray-800 line-clamp-1">{item.title || item.name}</p>
                          <p className="text-xs text-green-600 font-bold">₹{item.price}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <span className="text-sm text-gray-400">No history available</span>
                  )}
                </div>
              </div>
            </div>

            {/* Lists/Cart Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-purple-50 text-purple-600 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <FaListAlt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800">Your Cart & Lists</h3>
                    <p className="text-gray-500 text-sm">View, modify, and checkout</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-50 text-sm text-gray-600 flex justify-between items-center">
                  <span>{cartItems.length} items in cart</span>
                  <button onClick={() => navigate('/cart')} className="text-blue-600 font-bold hover:underline bg-blue-50 px-3 py-1 rounded">View Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE VIEW (hidden on desktop)
      ========================================= */}
      <div className="lg:hidden">
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

        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="mt-2">
              {token ? (
                <button
                  onClick={handleLogout}
                  className="text-black text-[25px] rounded-xl font-semibold"
                >
                  <CiLogout />
                </button>
              ) : (
                <button onClick={() => navigate("/login")}>
                  <FaUserCircle className="text-3xl text-gray-600" />
                </button>
              )}
            </div>

            {token ? (
              <div>
                <p className="font-semibold text-[13px] ml-2 text-gray-800">
                  Hello, {username || "User"}
                </p>
              </div>
            ) : (
              <p className="font-semibold text-[13px]">
                Hello, Guest
              </p>
            )}
          </div>

          <div className="flex items-center gap-4 text-xl">
            <button onClick={() => navigate("/notifications")}>
              <FaBell className="text-[18px] text-gray-700" />
            </button>
            <img src={img} alt="" className="h-4 w-7 object-fit rounded-sm" />
          </div>
        </div>

        <div className="flex justify-evenly gap-2 px-2 mt-2">
          <button className="flex-1 border bg-white shadow-sm py-2 rounded-full text-xs font-medium text-gray-700">Orders</button>
          <button className="flex-1 border bg-white shadow-sm py-2 rounded-full text-xs font-medium text-gray-700">Buy again</button>
          <button className="flex-1 border bg-white shadow-sm py-2 rounded-full text-xs font-medium text-gray-700">Accounts</button>
        </div>

        {/* Orders Mobile */}
        <section className="px-4 mt-4 flex flex-col gap-2 bg-white p-4 mx-2 rounded-xl shadow-sm border border-gray-100">
          <h2 className="font-bold text-lg text-gray-800">Your Orders</h2>
          <p className="text-sm mt-1 text-gray-500">
            {loading ? "Loading..." : orders.length > 0 ? `You have ${orders.length} orders` : "Hi! You have no recent orders."}
          </p>
          <button onClick={() => navigate("/")} className="w-full border mt-3 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 text-gray-700">
            Return to Homepage
          </button>
        </section>

        {/* Keep Shopping / History Mobile */}
        <section className="px-4 mt-4 bg-white p-4 mx-2 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-md text-gray-800">Keep shopping for</h2>
            <div className="text-blue-600 text-xs font-medium">
              <button>Edit</button> <span className="text-gray-300 mx-1">|</span> <button>History</button>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {loading ? <p className="text-sm">Loading...</p> : recommendations.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-28 flex flex-col border border-gray-100 rounded-xl p-2 hover:shadow-md transition">
                <div className="h-20 w-full flex items-center justify-center bg-gray-50 rounded-lg mb-2">
                  <img src={renderProductImage(item.image)} className="max-h-full max-w-full object-contain mix-blend-multiply" alt={item.title} />
                </div>
                <p className="text-xs font-medium text-gray-800 line-clamp-1">{item.title || item.name}</p>
                <p className="text-xs text-green-600 font-bold mt-1">₹{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cart Mobile */}
        <section className="px-4 mt-4 flex flex-col gap-2 bg-white p-4 mx-2 rounded-xl shadow-sm border border-gray-100 mb-6">
          <h2 className="font-bold text-lg text-gray-800">Your Cart</h2>
          <p className="text-sm mt-1 text-gray-500">You have {cartItems.length} items in your cart.</p>
          <button onClick={() => navigate("/cart")} className="w-full border mt-3 py-2 rounded-xl text-sm font-medium hover:bg-blue-50 text-blue-600 border-blue-200 bg-blue-50/50">
            Go to Cart
          </button>
        </section>

        <Bottomnav />
      </div>
    </div>
  );
};

export default Users;
