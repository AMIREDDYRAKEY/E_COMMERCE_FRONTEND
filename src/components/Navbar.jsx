import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaShoppingCart,
  FaSearch,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("phone");
    window.location.reload();
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products");
        const allProducts = Array.isArray(data?.products) ? data.products : Array.isArray(data) ? data : [];
        const uniqueCategories = [...new Set(allProducts.map(p => p.category).filter(Boolean))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-[#131921] text-white px-4 py-2 flex items-center justify-between gap-3 relative">

        {/* Logo */}
        <div
          className="flex items-center gap-2 shrink-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className="text-xl sm:text-2xl font-bold">
            <span className="text-orange-400">amazon</span>
          </h1>
        </div>

        {/* Location (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-1 text-sm">
          <FaMapMarkerAlt size={18} />
          <div>
            <p className="text-gray-300 text-xs">Deliver to</p>
            <p className="font-bold">India</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 max-w-3xl">
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full px-3 py-2 text-black outline-none rounded-l-md text-sm"
          />
          <button className="bg-orange-400 px-4 rounded-r-md flex items-center justify-center hover:bg-orange-500 transition">
            <FaSearch className="text-black" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <div
            className="cursor-pointer hover:text-orange-400 transition"
            onClick={() => {
              if (token) navigate("/dashboard");
              else navigate("/login");
            }}
          >
            <p className="text-xs">
              Hello, {token && username ? username : "sign in"}
            </p>
            <p className="font-bold">Account & Lists</p>
          </div>

          <div
            className="cursor-pointer hover:text-orange-400 transition"
            onClick={() => navigate("/dashboard")}
          >
            <p className="text-xs">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>

          <div
            className="flex items-center gap-1 font-bold cursor-pointer hover:text-orange-400 transition"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart size={20} />
            <span className="hidden sm:block">Cart</span>
          </div>

          {token ? (
            <button
              onClick={handleLogout}
              className="bg-orange-400 text-black px-3 py-1 rounded text-xs font-bold hover:bg-orange-500 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-orange-400 text-black px-3 py-1 rounded text-xs font-bold hover:bg-orange-500 transition"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#131921] text-white flex flex-col shadow-lg md:hidden z-50">

            <div className="flex flex-col gap-4 p-4 border-b border-gray-700">

              <div
                onClick={() => {
                  closeMenu();
                  if (token) navigate("/dashboard");
                  else navigate("/login");
                }}
                className="cursor-pointer"
              >
                <p className="text-xs text-gray-300">
                  Hello, {token && username ? username : "sign in"}
                </p>
                <p className="font-bold text-orange-400">Your Dashboard</p>
              </div>

              <div
                onClick={() => {
                  closeMenu();
                  navigate("/cart");
                }}
                className="flex items-center gap-2 font-bold cursor-pointer"
              >
                <FaShoppingCart size={20} />
                <span>Cart</span>
              </div>

              <div
                onClick={() => {
                  closeMenu();
                  navigate("/products");
                }}
                className="cursor-pointer"
              >
                <p className="font-bold text-orange-400">All Products</p>
              </div>

              {/* Dynamic Categories on Mobile */}
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => {
                    closeMenu();
                    navigate("/products");
                  }}
                  className="cursor-pointer capitalize text-sm hover:text-orange-400"
                >
                  {category}
                </div>
              ))}

              {token ? (
                <div
                  onClick={() => {
                    closeMenu();
                    handleLogout();
                  }}
                  className="cursor-pointer text-orange-400 font-bold mt-2"
                >
                  Logout
                </div>
              ) : (
                <div
                  onClick={() => {
                    closeMenu();
                    navigate("/login");
                  }}
                  className="cursor-pointer text-orange-400 font-bold mt-2"
                >
                  Sign In
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt size={18} />
                <p className="font-bold">India</p>
              </div>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;