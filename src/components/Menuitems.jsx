import { FaBars } from "react-icons/fa";

const Menuitems = () => {
  const menuItems = [
    "Fresh",
    "MX Player",
    "Sell",
    "Bestsellers",
    "Mobiles",
    "Today's Deals",
    "Customer Service",
    "Prime",
    "New Releases",
    "Amazon Pay",
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Books",
  ];

  return (
    <div className="bg-[#232f3e] text-white text-sm font-semibold h-[45px] flex items-center px-4">

      <div className="flex items-center gap-6 w-full overflow-x-auto whitespace-nowrap no-scrollbar">

        {/* All Menu */}
        <div className="flex items-center gap-2 cursor-pointer hover:border hover:border-white px-2 py-1 rounded-sm transition">
          <FaBars />
          <span>All</span>
        </div>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer hover:border hover:border-white px-2 py-1 rounded-sm transition"
          >
            {item}
          </div>
        ))}

      </div>
    </div>
  );
};

export default Menuitems;