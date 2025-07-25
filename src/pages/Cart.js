// src/pages/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../features/cart/cartSlice";
import axios from "axios";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Giỏ hàng trống.");
      return;
    }

    const bill = {
      id: Date.now().toString(), // ID duy nhất
      createdAt: new Date().toISOString(),
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name || item.title || "Không rõ",
        quantity: item.quantity ?? 1,
        price: item.price ?? 0,
      })),
    };

    try {
      await axios.post("http://localhost:5000/bills", bill);
      alert("✅ Hóa đơn đã lưu thành công!");
      dispatch(clearCart());
    } catch (error) {
      console.error("❌ Lỗi khi lưu bill:", error);
      alert("❌ Không thể lưu hóa đơn.");
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Styles
  const containerStyle = { padding: "32px" };
  const titleStyle = { fontSize: "24px", fontWeight: "700", marginBottom: "16px" };
  const listStyle = { listStyleType: "none", padding: 0, margin: 0 };
  const listItemStyle = {
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
    paddingBottom: "8px",
  };
  const removeButtonStyle = {
    marginLeft: "16px",
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "4px 8px",
    borderRadius: "4px",
    cursor: "pointer",
  };
  const checkoutButtonStyle = {
    marginTop: "24px",
    backgroundColor: "#22c55e",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>🛒 Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        <>
          <ul style={listStyle}>
            {cartItems.map((item) => (
              <li key={item.id} style={listItemStyle}>
                <span>
                  {item.name} - x {item.quantity ?? 1} - ${item.price?.toFixed(2) ?? "0.00"}
                </span>
                <button
                  onClick={() => handleRemove(item.id)}
                  style={removeButtonStyle}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  X
                </button>
              </li>
            ))}
          </ul>

          <button onClick={handleCheckout} style={checkoutButtonStyle}>
            ✅ Thanh toán
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
