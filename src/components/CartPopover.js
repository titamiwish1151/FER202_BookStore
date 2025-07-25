// src/components/CartPopover.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const CartPopover = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white border shadow-lg p-4 z-50">
      <h4 className="font-bold mb-2">Cart</h4>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center py-1">
              <span>{item.title} x {item.quantity}</span>
              <button
                className="text-red-500"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/cart" className="text-blue-500 mt-2 inline-block">Go to Cart</Link>
    </div>
  );
};

export default CartPopover;
