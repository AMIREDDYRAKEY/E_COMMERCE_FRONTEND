import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { 
  FiHome, FiBox, FiUsers, FiSettings, FiLogOut, 
  FiTrendingUp, FiDollarSign, FiActivity, FiMenu, FiX
} from 'react-icons/fi';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products");
        const allProducts = Array.isArray(data?.products) ? data.products : Array.isArray(data) ? data : [];
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalValue = products.reduce((sum, p) => sum + (Number(p.price) || 0), 0);

  // Reusable Stat Card
  const StatCard = ({ title, value, icon, color }) => (
    <div className={`p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{value}</h3>
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color} bg-opacity-10`}>
          <div className={`text-2xl ${color.replace('bg-', 'text-')}`}>{icon}</div>
        </div>
      </div>
    </div>
  );

  const NavItem = ({ icon, text, active }) => (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 font-medium
      ${active ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'}`}>
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f7fe] flex w-full font-sans text-gray-800">
      
      {/* ========== LAPTOP VIEW SIDEBAR ========== */}
      <div className="hidden lg:flex w-72 bg-white flex-col shadow-xl fixed h-full z-10">
        <div className="p-8 pb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            E
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700">
            E-Commerce
          </h1>
        </div>
        
        <div className="flex flex-col gap-2 p-4 flex-1 mt-4">
          <NavItem icon={<FiHome />} text="Dashboard" active />
          <NavItem icon={<FiBox />} text="Products" />
          <NavItem icon={<FiUsers />} text="Customers" />
          <NavItem icon={<FiActivity />} text="Analytics" />
          <NavItem icon={<FiSettings />} text="Settings" />
        </div>

        <div className="p-4 mb-4">
          <div 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-red-500 hover:bg-red-50 transition-all font-medium">
            <FiLogOut className="text-xl" />
            <span>Exit to Store</span>
          </div>
        </div>
      </div>

      {/* ========== MOBILE HEADER ========== */}
      <div className="lg:hidden fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
            E
          </div>
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-gray-100 text-gray-600 active:scale-95 transition-transform"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[72px] left-0 w-full bg-white shadow-xl z-40 border-t border-gray-100">
          <div className="flex flex-col p-4 gap-2">
            <NavItem icon={<FiHome />} text="Overview" active />
            <NavItem icon={<FiBox />} text="Products" />
            <div onClick={() => navigate('/')} className="flex items-center gap-3 px-4 py-3 text-red-500 rounded-xl active:bg-red-50 font-medium">
              <FiLogOut className="text-xl" />
              <span>Back to Store</span>
            </div>
          </div>
        </div>
      )}

      {/* ========== MAIN CONTENT ========== */}
      <div className="flex-1 lg:ml-72 w-full pt-20 lg:pt-0">
        
        {/* DESKTOP HEADER */}
        <div className="hidden lg:flex justify-between items-center p-8 bg-[#f4f7fe]/80 backdrop-blur-md sticky top-0 z-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Overview</h2>
            <p className="text-gray-500 text-sm mt-1">Welcome back! Here's your store's fresh status.</p>
          </div>
          <button 
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl shadow-lg shadow-blue-200 font-semibold transform hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2">
            <FiBox /> Manage Products
          </button>
        </div>

        <div className="p-4 lg:p-8 pt-4 lg:pt-0 max-w-7xl mx-auto">
          
          {/* STATS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-8">
            <StatCard 
              title="Total Products" 
              value={loading ? "..." : products.length} 
              icon={<FiBox />} 
              color="bg-blue-500" 
            />
            <StatCard 
              title="Store Value" 
              value={loading ? "..." : `₹${totalValue.toLocaleString()}`} 
              icon={<FiDollarSign />} 
              color="bg-green-500" 
            />
            <StatCard 
              title="Active Users" 
              value="2,845" 
              icon={<FiUsers />} 
              color="bg-purple-500" 
            />
            <StatCard 
              title="Conversion Rate" 
              value="4.6%" 
              icon={<FiTrendingUp />} 
              color="bg-orange-500" 
            />
          </div>

          {/* DYNAMIC CONTENT TABLE */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Recently Added Products</h3>
              <button className="text-sm font-medium text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors">
                View All
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-500 text-sm">
                    <th className="p-4 font-medium">Product Name</th>
                    <th className="p-4 font-medium">Category</th>
                    <th className="p-4 font-medium">Price</th>
                    <th className="p-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {loading ? (
                    <tr>
                      <td colSpan="4" className="p-8 text-center text-gray-400">Loading products...</td>
                    </tr>
                  ) : products.slice(-5).reverse().map((p) => (
                    <tr key={p._id} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={p.image?.startsWith("http") ? p.image : `${import.meta.env.VITE_BACKEND_URL}/uploads/${p.image}`} 
                            alt={p.title || p.name}
                            className="w-10 h-10 rounded-lg object-cover bg-gray-100"
                          />
                          <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">{p.title || p.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-500 capitalize">{p.category || 'N/A'}</td>
                      <td className="p-4 font-bold text-gray-700">₹{p.price}</td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">In Stock</span>
                      </td>
                    </tr>
                  ))}
                  {!loading && products.length === 0 && (
                    <tr>
                      <td colSpan="4" className="p-8 text-center text-gray-400">No products found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
