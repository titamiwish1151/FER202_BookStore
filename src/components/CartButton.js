// src/components/CartButton.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react"; // hoặc dùng biểu tượng SVG khác

function CartButton() {
  const cartItems = useSelector((state) => state.cart.items);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative">
        <ShoppingCart className="w-8 h-8 text-gray-700" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
          {cartItems.length}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg z-50 p-4">
          <h3 className="font-semibold mb-2">🛍️ Your Cart</h3>
          {cartItems.length === 0 ? (
            <p className="text-sm text-gray-500">Cart is empty</p>
          ) : (
            <ul className="space-y-3 max-h-64 overflow-auto">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default CartButton;
