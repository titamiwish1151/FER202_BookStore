import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const CartIcon = () => {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <Link to="/cart" className="relative inline-block text-gray-700">
      <FiShoppingCart size={24} />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
