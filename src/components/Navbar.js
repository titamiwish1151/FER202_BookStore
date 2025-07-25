import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import CartPopover from "./CartPopover";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-end items-center gap-6 p-4 bg-white shadow relative">
      {/* Yêu thích */}
      <Link to="/favorites" className="text-gray-800 hover:text-black">
        <FiHeart size={22} />
      </Link>

      {/* Hóa đơn */}
      <Link to="/bills" className="text-gray-800 hover:text-black text-sm font-medium">
        Hóa đơn
      </Link>

      {/* Người dùng */}
      <Link to="/login" className="text-gray-800 hover:text-black">
        <FiUser size={22} />
      </Link>

      {/* Giỏ hàng */}
      <div className="relative" ref={cartRef}>
        <button
          onClick={() => setShowCart((prev) => !prev)}
          className="relative text-gray-800 hover:text-black"
        >
          <FiShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>

        {showCart && <CartPopover />}
      </div>
    </nav>
  );
};

export default Navbar;
