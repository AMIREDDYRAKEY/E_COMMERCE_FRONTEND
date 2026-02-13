import React, { useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { FaSearch, FaCamera, FaMicrophone, FaQrcode } from "react-icons/fa";
import Bottomnav from "../../Mobileview/Bottomnav";
import img1 from '../../assets/f1.png'
import img2 from '../../assets/f2.png'
import img3 from '../../assets/f3.png'
const Cart = () => {

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Sample Product Title Here",
      price: 239,
      qty: 1,
      img: img1
    },
    {
      id: 2,
      title: "Wall Decoration Flower Pot",
      price: 450,
      qty: 1,
      img:img2
    },
     {
      id: 1,
      title: "Sample Product Title Here",
      price: 239,
      qty: 1,
      img: img1
    },
    {
      id: 2,
      title: "Wall Decoration Flower Pot",
      price: 450,
      qty: 1,
      img:img2
    }
  ]);
  
  const update = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + change) }
          : item
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-24">

      {/* Search Bar */}
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

      {/* cart items */}
      {cartItems.map(item => (
        <div key={item.id} className="bg-white mt-3 p-3">

          <div className="flex gap-3">

            {/* Image */}
            <div className="h-24 w-24 rounded-xl bg-gray-200 overflow-hidden">
              <img src={item.img} alt="product"
                className="h-full w-full object-cover" />
            </div>

            {/* Products */}
            <div className="flex-1">
              <p className="font-semibold">{item.title}</p>

              <p className="text-blue-500 text-sm mt-1">
                10 days Returnable
              </p>

              <p className="text-lg font-bold mt-1">
                ₹{item.price}.00
              </p>

              <p className="text-green-600 text-sm">
                In stock
              </p>

              <p className="text-sm mt-1">
                FREE delivery <span className="font-semibold">Fri, 2 Jan</span>
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className="flex items-center gap-3 mt-3">

            <div className="flex items-center border-2 border-yellow-400 rounded-full px-3 py-1 gap-3">
              <button className="text-lg" onClick={() => update(item.id, -1)}>
                −
              </button>

              <span className="font-semibold">{item.qty}</span>

              <button className="text-lg" onClick={() => update(item.id, 1)}>
                +
              </button>
            </div>

            <button className="border rounded-full px-4 py-1 text-[12px]">
              Delete
            </button>

            <button className="border rounded-full px-4 py-1 text-[12px]">
              Save for later
            </button>
          </div>

          <div className="flex gap-3 mt-3">
            <button className="border rounded-full px-4 py-1">
              See more like this
            </button>

            <button className="border rounded-full px-4 py-1 flex items-center gap-1">
              <FiShare2 />
              Share
            </button>
          </div>
        </div>
      ))}

      {/* PRICE  */}
      <div className="bg-white mt-3 p-3">
        <p>Items: <span className="float-right">₹717.00</span></p>
        <p>Delivery: <span className="float-right">₹0.00</span></p>
        <p>Total: <span className="float-right">₹717.00</span></p>

        <p className="text-green-600">
          Promotion Applied: <span className="float-right">−₹35.85</span>
        </p>

        <h2 className="font-bold text-lg mt-2">
          Order Total:
          <span className="float-right">₹681.15</span>
        </h2>

        <p className="text-green-700 mt-2 font-semibold">
          ₹35.85 saved
        </p>
      </div>

      {/* buy */}
      <div className="bg-yellow-400 text-center h-[45px] w-[300px] ml-3 flex items-center justify-center font-semibold rounded-3xl mt-3">
        Proceed to Buy ({cartItems.length} items)
      </div>

      <Bottomnav />

    </div>
  );
};

export default Cart;
